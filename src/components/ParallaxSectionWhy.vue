<template>
  <section class="parallax-section why" ref="sectionRef">
    <div class="parallax-bg" v-show="visible" :style="bgStyle" aria-hidden="true"></div>
  <div class="parallax-inner container" :class="{ visible }">
      <div class="left">
        <h3>Why Choose Timeless Treasures</h3>
        <p>Gentle direction, flattering light, and a calm, body‑positive atmosphere. Your boudoir experience is private, empowering, and tailored to you.</p>
        <ul class="why-list">
          <li><strong>Comfort first:</strong> guided posing and pacing at your level</li>
          <li><strong>Privacy:</strong> your session and images stay confidential</li>
          <li><strong>Flattering light:</strong> soft, timeless looks for every body</li>
          <li><strong>Empowering:</strong> images that celebrate you—your way</li>
        </ul>
      </div>
      <div class="right">
        <div class="why-cards">
          <div class="card">Body‑positive guidance</div>
          <div class="card">Private, respectful set</div>
          <div class="card">Soft, flattering light</div>
          <div class="card">Clear, caring communication</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'
import parallaxUrl from '../images-optimized/parallax-3.jpg'
import parallaxWebp from '../images-optimized/parallax-3.webp'

export default {
  setup() {
    const sectionRef = ref(null)
    const visible = ref(false)
    const bgStyle = ref({
      backgroundImage: `image-set(url(${parallaxWebp}) type('image/webp'), url(${parallaxUrl}) type('image/jpeg'))`
    })

    let observer = null
    onMounted(() => {
      if (!sectionRef.value) return
      observer = new IntersectionObserver((entries) => {
        entries.forEach(e => { visible.value = e.isIntersecting })
      }, { root: null, threshold: 0.15 })
      observer.observe(sectionRef.value)
    })
    onUnmounted(() => {
      if (observer && sectionRef.value) observer.unobserve(sectionRef.value)
      observer = null
    })

    return { sectionRef, bgStyle, visible }
  }
}
</script>

