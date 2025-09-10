<template>
  <section class="parallax-section reversed" ref="sectionRef">
    <div class="parallax-bg" v-show="visible" :style="bgStyle" aria-hidden="true"></div>
    <div class="parallax-inner container">
      <div class="left">
        <h3>Clients & Projects</h3>
        <p>Our work spans commercial campaigns, editorial shoots, and brand partnerships. We focus on clarity, mood, and storytelling.</p>
      </div>
      <div class="right">
        <div class="gallery-grid">
          <div class="gitem" :style="{ backgroundImage: `image-set(url(${p5Webp}) type('image/webp'), url(${p5}) type('image/jpeg'))` }" @click="openLightbox(p5)" role="button" tabindex="0" @keydown.enter="openLightbox(p5)" aria-label="Open image" @contextmenu.prevent @dragstart.prevent></div>
          <div class="gitem" :style="{ backgroundImage: `image-set(url(${p6Webp}) type('image/webp'), url(${p6}) type('image/jpeg'))` }" @click="openLightbox(p6)" role="button" tabindex="0" @keydown.enter="openLightbox(p6)" aria-label="Open image" @contextmenu.prevent @dragstart.prevent></div>
          <div class="gitem" :style="{ backgroundImage: `image-set(url(${p7Webp}) type('image/webp'), url(${p7}) type('image/jpeg'))` }" @click="openLightbox(p7)" role="button" tabindex="0" @keydown.enter="openLightbox(p7)" aria-label="Open image" @contextmenu.prevent @dragstart.prevent></div>
          <div class="gitem" :style="{ backgroundImage: `image-set(url(${p8Webp}) type('image/webp'), url(${p8}) type('image/jpeg'))` }" @click="openLightbox(p8)" role="button" tabindex="0" @keydown.enter="openLightbox(p8)" aria-label="Open image" @contextmenu.prevent @dragstart.prevent></div>
        </div>
      </div>
    </div>
    <ImageLightbox :show="lightboxOpen" :src="lightboxSrc" @close="lightboxOpen=false" />
  </section>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'
import ImageLightbox from './ImageLightbox.vue'
import parallaxUrl from '../images-optimized/parallax-2.jpg'
import parallaxWebp from '../images-optimized/parallax-2.webp'
import p5 from '../images-optimized/p5.jpg'
import p6 from '../images-optimized/p6.jpg'
import p7 from '../images-optimized/p7.jpg'
import p8 from '../images-optimized/p8.jpg'
import p5Webp from '../images-optimized/p5.webp'
import p6Webp from '../images-optimized/p6.webp'
import p7Webp from '../images-optimized/p7.webp'
import p8Webp from '../images-optimized/p8.webp'

export default {
  components: { ImageLightbox },
  setup() {
    const sectionRef = ref(null)
    const visible = ref(false)
    const lightboxOpen = ref(false)
    const lightboxSrc = ref('')
    const bgStyle = ref({
      backgroundImage: `image-set(url(${parallaxWebp}) type('image/webp'), url(${parallaxUrl}) type('image/jpeg'))`
    })

    const openLightbox = (src) => { lightboxSrc.value = src; lightboxOpen.value = true }

    let observer = null
    onMounted(() => {
      if (!sectionRef.value) return
      observer = new IntersectionObserver((entries) => {
        entries.forEach(e => { visible.value = e.isIntersecting })
      }, { root: null, threshold: 0 })
      observer.observe(sectionRef.value)
    })
    onUnmounted(() => {
      if (observer && sectionRef.value) observer.unobserve(sectionRef.value)
      observer = null
    })

  return { sectionRef, bgStyle, visible, p5, p6, p7, p8, p5Webp, p6Webp, p7Webp, p8Webp, lightboxOpen, lightboxSrc, openLightbox }
  }
}
</script>
