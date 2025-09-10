<template>
  <section class="parallax-section why" ref="sectionRef">
    <div class="parallax-bg" v-show="visible" :style="bgStyle" aria-hidden="true"></div>
    <div class="parallax-inner container">
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
          <div class="card">
            <svg class="card-icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0 2c-4.418 0-8 1.79-8 4v2h16v-2c0-2.21-3.582-4-8-4z"/></svg>
            <h4>Comfort-first guidance</h4>
            <p>Gentle, guided posing and pacing so you feel confident at every step.</p>
          </div>

          <div class="card">
            <svg class="card-icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 1a3 3 0 0 0-3 3v1H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-3V4a3 3 0 0 0-3-3zM9 5a3 3 0 0 1 6 0v1H9V5z"/></svg>
            <h4>Privacy & respect</h4>
            <p>Your session and images remain private; a safe, respectful environment is always maintained.</p>
          </div>

          <div class="card">
            <svg class="card-icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 3l2.09 6.26L20 11l-5 3.64L16.18 21 12 17.77 7.82 21 9 14.64 4 11l5.91-.74L12 3z"/></svg>
            <h4>Flattering light</h4>
            <p>Soft, timeless lighting crafted to flatter every body and create flattering, timeless portraits.</p>
          </div>

          <div class="card">
            <svg class="card-icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1 14h-2v-2h2v2zm0-4h-2V6h2v6z"/></svg>
            <h4>Clear communication</h4>
            <p>We discuss your goals and preferences up front so your session reflects your vision and comfort level.</p>
          </div>
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
      }, { root: null, threshold: 0 })
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

