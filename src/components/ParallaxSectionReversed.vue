<template>
  <section class="parallax-section reversed" ref="sectionRef">
    <div class="parallax-bg" v-show="visible" :style="bgStyle" aria-hidden="true"></div>
    <div class="parallax-inner container reversed">
      <div class="left">
        <div class="gallery-grid">
          <div class="gitem" :style="{ backgroundImage: `url(${p5})` }" aria-hidden="true"></div>
          <div class="gitem" :style="{ backgroundImage: `url(${p6})` }" aria-hidden="true"></div>
          <div class="gitem" :style="{ backgroundImage: `url(${p7})` }" aria-hidden="true"></div>
          <div class="gitem" :style="{ backgroundImage: `url(${p8})` }" aria-hidden="true"></div>
        </div>
      </div>
      <div class="right">
        <h3>Clients & Projects</h3>
        <p>Our work spans commercial campaigns, editorial shoots, and brand partnerships. We focus on clarity, mood, and storytelling.</p>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'
import parallaxUrl from '../images/parallax-2.jpg'
import p5 from '../images/p5.jpg'
import p6 from '../images/p6.jpg'
import p7 from '../images/p7.jpg'
import p8 from '../images/p8.jpg'

export default {
  setup() {
    const sectionRef = ref(null)
    const visible = ref(false)
    const bgStyle = ref({ backgroundImage: `url(${parallaxUrl})` })

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

  return { sectionRef, bgStyle, visible, p5, p6, p7, p8 }
  }
}
</script>
