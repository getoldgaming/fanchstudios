import fs from 'node:fs'
import path from 'node:path'
import sharp from 'sharp'

const srcDir = path.resolve('src/images')
const outDir = path.resolve('src/images-optimized')

const TARGET_MAX = 300 * 1024 // 300 KB
const QUALITY_STEPS = [80, 70, 60, 50, 40]
// Target widths to try (try 1920 first, then smaller fallbacks). `null` preserves original width.
const WIDTH_STEPS = [1920, 1600, 1400, 1200, 1000, null]

async function optimizeFile(file) {
  const ext = path.extname(file).toLowerCase()
  const base = path.basename(file, ext)
  const inputPath = path.join(srcDir, file)
  const stat = await fs.promises.stat(inputPath)
  if (!stat.isFile()) return

  await fs.promises.mkdir(outDir, { recursive: true })
  const img = sharp(inputPath)
  const meta = await img.metadata()

  // Skip tiny files
  if (stat.size <= TARGET_MAX) {
    console.log(`skip  ${file} (already ${(stat.size/1024).toFixed(0)} KB)`) 
    return
  }

  // Choose format and try quality steps
  const isJpeg = ext === '.jpg' || ext === '.jpeg'
  const isPng = ext === '.png'
  const isWebp = ext === '.webp'

  let lastGood = null
  outer: for (const width of WIDTH_STEPS) {
    for (const q of QUALITY_STEPS) {
      let pipeline = sharp(inputPath)
      if (width) pipeline = pipeline.resize({ width, withoutEnlargement: true })
      if (isJpeg) pipeline = pipeline.jpeg({ quality: q, mozjpeg: true })
      else if (isPng) pipeline = pipeline.png({ quality: q, palette: true })
      else if (isWebp) pipeline = pipeline.webp({ quality: q })
      else pipeline = pipeline.jpeg({ quality: q, mozjpeg: true }) // default to jpeg

      const buf = await pipeline.toBuffer()
      lastGood = { buf, q, width }
      if (buf.length <= TARGET_MAX) {
        break outer
      }
    }
  }

  if (lastGood) {
    const outExt = '.jpg'
    const outPath = path.join(outDir, `${base}${outExt}`)
    await fs.promises.writeFile(outPath, lastGood.buf)
  // Also write WebP variant for modern browsers
  let wPipe = sharp(inputPath)
  if (lastGood.width) wPipe = wPipe.resize({ width: lastGood.width, withoutEnlargement: true })
  const webpBuf = await wPipe.webp({ quality: Math.max(50, lastGood.q) }).toBuffer()
  const outWebp = path.join(outDir, `${base}.webp`)
  await fs.promises.writeFile(outWebp, webpBuf)
    const before = (stat.size/1024).toFixed(0)
    const after = (lastGood.buf.length/1024).toFixed(0)
  const wTxt = lastGood.width ? `, w${lastGood.width}` : ''
  console.log(`ok    ${file} -> ${path.basename(outPath)} & ${path.basename(outWebp)}  ${before}KB -> ${after}KB @ q${lastGood.q}${wTxt}`)
  }
}

async function run(){
  const files = await fs.promises.readdir(srcDir)
  console.log(`Scanning ${srcDir} ... ${files.length} entries`) 
  for (const f of files) {
    if (!/\.(jpe?g|png|webp)$/i.test(f)) continue
    try { 
      console.log('process', f)
      await optimizeFile(f) 
    } catch (e) {
      console.warn('fail ', f, e)
    }
  }
}

run().catch(err => {
  console.error(err)
  process.exit(1)
})
