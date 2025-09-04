<template>
  <section class="parallax-section" ref="sectionRef">
    <div class="parallax-bg" v-show="visible" :style="bgStyle" aria-hidden="true"></div>
    <div class="parallax-inner container">
      <div class="left">
        <h3>Our Approach</h3>
        <p>We combine art direction and technical craft to create imagery that connects. Our process centers on storytelling and collaboration.</p>
      </div>
      <div class="right">
        <div class="gallery-grid">
          <div class="gitem" :style="{ backgroundImage: `url(${p1})` }" aria-hidden="true"></div>
          <div class="gitem" :style="{ backgroundImage: `url(${p2})` }" aria-hidden="true"></div>
          <div class="gitem" :style="{ backgroundImage: `url(${p3})` }" aria-hidden="true"></div>
          <div class="gitem" :style="{ backgroundImage: `url(${p4})` }" aria-hidden="true"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'
import parallaxUrl from '../images/parallax-1.jpg'
import p1 from '../images/p1.jpg'
import p2 from '../images/p2.jpg'
import p3 from '../images/p3.jpg'
import p4 from '../images/p4.jpg'

export default {
  setup() {
    const sectionRef = ref(null)
    const visible = ref(false)
    const bgStyle = ref({
      backgroundImage: `url(${parallaxUrl})`,
      opacity: 1
    })

    let observer = null
    onMounted(() => {
      if (!sectionRef.value) return
      observer = new IntersectionObserver((entries) => {
        entries.forEach(e => {
          visible.value = e.isIntersecting
        })
      }, { root: null, threshold: 0 })
      observer.observe(sectionRef.value)
    })

    onUnmounted(() => {
      if (observer && sectionRef.value) observer.unobserve(sectionRef.value)
      observer = null
    })

  return { sectionRef, bgStyle, visible, p1, p2, p3, p4 }
  }
}
</script>
