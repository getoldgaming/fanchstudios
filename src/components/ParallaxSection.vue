<template>
  <section class="parallax-section" ref="sectionRef">
    <div class="parallax-bg" v-show="visible" :style="bgStyle" aria-hidden="true"></div>
  <div class="parallax-inner container" :class="{ visible }">
      <div class="left">
        <h3>Our Approach</h3>
        <p>We combine art direction and technical craft to create imagery that connects. Our process centers on storytelling and collaboration.</p>
      </div>
      <div class="right">
        <div class="gallery-grid">
          <div class="gitem" :style="{ backgroundImage: `image-set(url(${p1Webp}) type('image/webp'), url(${p1}) type('image/jpeg'))` }" @click="openLightbox(p1)" role="button" tabindex="0" @keydown.enter="openLightbox(p1)" aria-label="Open image" @contextmenu.prevent @dragstart.prevent></div>
          <div class="gitem" :style="{ backgroundImage: `image-set(url(${p2Webp}) type('image/webp'), url(${p2}) type('image/jpeg'))` }" @click="openLightbox(p2)" role="button" tabindex="0" @keydown.enter="openLightbox(p2)" aria-label="Open image" @contextmenu.prevent @dragstart.prevent></div>
          <div class="gitem" :style="{ backgroundImage: `image-set(url(${p3Webp}) type('image/webp'), url(${p3}) type('image/jpeg'))` }" @click="openLightbox(p3)" role="button" tabindex="0" @keydown.enter="openLightbox(p3)" aria-label="Open image" @contextmenu.prevent @dragstart.prevent></div>
          <div class="gitem" :style="{ backgroundImage: `image-set(url(${p4Webp}) type('image/webp'), url(${p4}) type('image/jpeg'))` }" @click="openLightbox(p4)" role="button" tabindex="0" @keydown.enter="openLightbox(p4)" aria-label="Open image" @contextmenu.prevent @dragstart.prevent></div>
        </div>
      </div>
    </div>
    <ImageLightbox :show="lightboxOpen" :src="lightboxSrc" @close="lightboxOpen=false" />
  </section>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'
import ImageLightbox from './ImageLightbox.vue'
import parallaxUrl from '../images-optimized/parallax-1.jpg'
import parallaxWebp from '../images-optimized/parallax-1.webp'
import p1 from '../images-optimized/p1.jpg'
import p2 from '../images-optimized/p2.jpg'
import p3 from '../images-optimized/p3.jpg'
import p4 from '../images-optimized/p4.jpg'
import p1Webp from '../images-optimized/p1.webp'
import p2Webp from '../images-optimized/p2.webp'
import p3Webp from '../images-optimized/p3.webp'
import p4Webp from '../images-optimized/p4.webp'

export default {
  components: { ImageLightbox },
  setup() {
    const sectionRef = ref(null)
    const visible = ref(false)
    const lightboxOpen = ref(false)
    const lightboxSrc = ref('')
    const bgStyle = ref({
      backgroundImage: `image-set(url(${parallaxWebp}) type('image/webp'), url(${parallaxUrl}) type('image/jpeg'))`,
      opacity: 1,
      transform: 'translateY(0px)'
    })

    const openLightbox = (src) => { lightboxSrc.value = src; lightboxOpen.value = true }

    let observer = null
    // lightweight parallax via requestAnimationFrame
    let ticking = false
    const speed = 0.18 // parallax strength
    const onScroll = () => {
      if (!sectionRef.value) return
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        const rect = sectionRef.value.getBoundingClientRect()
        // offset based on element top: positive when scrolled up
        const offset = Math.round(rect.top * speed)
        bgStyle.value.transform = `translateY(${offset}px)`
        ticking = false
      })
    }

    onMounted(() => {
      if (!sectionRef.value) return
      observer = new IntersectionObserver((entries) => {
        entries.forEach(e => {
          visible.value = e.isIntersecting
        })
      }, { root: null, threshold: 0.15 })
      observer.observe(sectionRef.value)
      // attach window scroll listener for parallax
      window.addEventListener('scroll', onScroll, { passive: true })
      // initial update
      onScroll()
    })

    onUnmounted(() => {
      if (observer && sectionRef.value) observer.unobserve(sectionRef.value)
      observer = null
      window.removeEventListener('scroll', onScroll)
    })

  return { sectionRef, bgStyle, visible, p1, p2, p3, p4, p1Webp, p2Webp, p3Webp, p4Webp, lightboxOpen, lightboxSrc, openLightbox }
  }
}
</script>
