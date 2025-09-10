<template>
  <teleport to="body">
    <div v-if="show" class="lightbox" role="dialog" aria-modal="true" @click.self="onClose" @contextmenu.prevent @mousedown.right.prevent.stop @keydown.prevent.stop="onKeydownBlock" tabindex="-1" ref="lbRoot">
      <button class="close" aria-label="Close" @click="onClose">×</button>
      <div class="lightbox-img" :style="boxStyle" @click.stop>
        <img :src="src" :alt="alt || 'Preview image'" :style="{width: '100%', height: '100%', display: 'block', objectFit: 'contain', pointerEvents: 'auto'}" draggable="false" />
        <div class="lb-watermark" aria-hidden="true"></div>
      </div>
    </div>
  </teleport>
</template>

<script>
export default {
  name: 'ImageLightbox',
  props: {
    show: { type: Boolean, required: true },
    src: { type: String, required: true },
    alt: { type: String, default: '' }
  },
  emits: ['close'],
  data() {
  return { _onKey: null, _prevOverflow: '', _scrollY: 0, scale: 0.70, iw: 0, ih: 0, boxW: 0, boxH: 0 }
  },
  computed: {
    bgStyle() {
      return { backgroundImage: `url(${this.src})` }
    },
    boxStyle(){
      const styles = {}
      if (this.boxW && this.boxH){
        styles.width = this.boxW + 'px'
        styles.height = this.boxH + 'px'
      }
      return styles
    }
  },
  watch: {
    show(val) {
      if (val) { this.lockScroll(); this._loadDims(); } else this.unlockScroll();
    },
    src(){
      if (this.show) this._loadDims()
    }
  },
  mounted() {
    this._onKey = (e) => { if (e.key === 'Escape') this.$emit('close') }
    window.addEventListener('keydown', this._onKey)
  if (this.show) { this.lockScroll(); this._loadDims(); }
    // Focus root to capture keydown blocking
    this.$nextTick(() => { this.$refs.lbRoot && this.$refs.lbRoot.focus && this.$refs.lbRoot.focus() })
  },
  beforeUnmount() {
    window.removeEventListener('keydown', this._onKey)
    this.unlockScroll()
  },
  methods: {
    onClose() { this.$emit('close') },
    onKeydownBlock(e){
      // Block common save/print/screenshot shortcuts: Ctrl/Cmd+S/P, Ctrl/Cmd+Shift+S
      const k = e.key.toLowerCase();
      if ((e.ctrlKey || e.metaKey) && (k === 's' || k === 'p')) {
        e.preventDefault(); e.stopPropagation();
      }
    },
    _viewport(){
      const vw = window.innerWidth || document.documentElement.clientWidth || 0
      const vh = (window.visualViewport ? window.visualViewport.height : window.innerHeight) || 0
      return { vw, vh }
    },
    _setVh() {
      try {
        const vh = (window.visualViewport ? window.visualViewport.height : window.innerHeight) * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`)
        this._computeBoxSize()
      } catch (_) {}
    },
    _loadDims(){
      try{
        const img = new Image()
        img.referrerPolicy = 'no-referrer'
        img.onload = () => {
          this.iw = img.naturalWidth || img.width
          this.ih = img.naturalHeight || img.height
          this._computeBoxSize()
        }
        img.src = this.src
      }catch(_){
        this._computeBoxSize()
      }
    },
    _computeBoxSize(){
      try{
        const { vw, vh } = this._viewport()
        const maxW = vw * this.scale
        const maxH = vh * this.scale
        if (!this.iw || !this.ih){
          // Fallback: square box limited by shortest dimension
          const side = Math.min(maxW, maxH)
          this.boxW = Math.floor(side)
          this.boxH = Math.floor(side)
          return
        }
        const s = Math.min(maxW / this.iw, maxH / this.ih)
        this.boxW = Math.floor(this.iw * s)
        this.boxH = Math.floor(this.ih * s)
      }catch(_){ /* noop */ }
    },
    lockScroll() {
      try {
        this._scrollY = window.scrollY || window.pageYOffset || 0
        this._prevOverflow = document.body.style.overflow
        document.body.style.overflow = 'hidden'
        document.body.style.position = 'fixed'
        document.body.style.top = `-${this._scrollY}px`
        document.body.style.width = '100%'
        document.documentElement.classList.add('lightbox-open')
        this._setVh()
        window.addEventListener('resize', this._setVh)
        window.addEventListener('orientationchange', this._setVh)
        if (window.visualViewport) window.visualViewport.addEventListener('resize', this._setVh)
      } catch (_) {}
    },
    unlockScroll() {
      try {
        document.body.style.overflow = this._prevOverflow || ''
        document.body.style.position = ''
        document.body.style.top = ''
        document.body.style.width = ''
        document.documentElement.classList.remove('lightbox-open')
        window.removeEventListener('resize', this._setVh)
        window.removeEventListener('orientationchange', this._setVh)
        if (window.visualViewport) window.visualViewport.removeEventListener('resize', this._setVh)
        window.scrollTo(0, this._scrollY || 0)
      } catch (_) {}
    }
  }
}
</script>

<style scoped>
.lightbox{position:fixed;inset:0;background:rgba(0,0,0,.88);display:flex;align-items:center;justify-content:center;z-index:100000;overscroll-behavior:none;overflow:hidden;-webkit-touch-callout:none;user-select:none}
/* Lightbox image box: sized via inline styles to ~85% viewport preserving aspect */
.lightbox-img{position:relative;box-shadow:none;border-radius:0;display:flex;align-items:center;justify-content:center;-webkit-user-drag:none;user-select:none;width:88vw;height:calc(var(--vh, 1vh) * 88);max-width:90vw;max-height:90svh;overflow:hidden;background:transparent}
@supports (max-height: 90dvh){
  .lightbox-img{max-height:90dvh}
}
@supports (max-height: 90svh){
  .lightbox-img{max-height:90svh}
}
.lb-watermark{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:2;opacity:.06;background-image:repeating-linear-gradient(-45deg, rgba(255,255,255,.6) 0, rgba(255,255,255,.6) 1px, rgba(0,0,0,0) 1px, rgba(0,0,0,0) 24px)}
.close{position:absolute;top:16px;right:16px;background:transparent;border:none;color:#fff;font-size:32px;line-height:1;cursor:pointer;z-index:100001}
.close:focus{outline:2px solid #fff;outline-offset:2px}
</style>
