import fs from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const outDir = path.resolve('public')
const outPath = path.join(outDir, 'og-timeless-treasures.jpg')

const width = 1200
const height = 630

// Background gradient SVG
const bgSvg = `
<svg xmlns='http://www.w3.org/2000/svg' width='${width}' height='${height}'>
  <defs>
    <linearGradient id='bg' x1='0' y1='0' x2='1' y2='1'>
      <stop offset='0%' stop-color='#0b0b0b'/>
      <stop offset='100%' stop-color='#1a1a1a'/>
    </linearGradient>
    <linearGradient id='gold' x1='0' x2='1'>
      <stop stop-color='#f3d27a' offset='0%'/>
      <stop stop-color='#d4af37' offset='100%'/>
    </linearGradient>
    <filter id='shadow' x='-50%' y='-50%' width='200%' height='200%'>
      <feDropShadow dx='0' dy='6' stdDeviation='18' flood-color='rgba(0,0,0,0.5)'/>
    </filter>
  </defs>
  <rect width='100%' height='100%' fill='url(#bg)'/>
  <!-- TT monogram -->
  <g filter='url(#shadow)'>
    <rect x='72' y='115' width='200' height='200' rx='28' ry='28' fill='none' stroke='url(#gold)' stroke-width='6'/>
    <text x='172' y='232' text-anchor='middle' font-family='Playfair Display, Georgia, serif' font-weight='700' font-size='92' fill='url(#gold)'>TT</text>
  </g>
  <!-- Brand title and subtitle -->
  <g>
  <text x='320' y='220' font-family='Playfair Display, Georgia, serif' font-weight='700' font-size='66' fill='#faf6e8'>Timeless Touch Boudoir</text>
    <text x='320' y='270' font-family='Inter, Arial, sans-serif' font-weight='500' font-size='28' fill='#d7d3c4' opacity='.9'>Cincinnati Boudoir Photography</text>
  </g>
</svg>
`

const svgBuffer = Buffer.from(bgSvg)

await fs.mkdir(outDir, { recursive: true })
await sharp(svgBuffer)
  .jpeg({ quality: 90, mozjpeg: true })
  .toFile(outPath)

console.log('OG image generated at', outPath)
