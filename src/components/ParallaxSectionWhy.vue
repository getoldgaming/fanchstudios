<template>
  <section class="parallax-section why" ref="sectionRef">
    <div class="parallax-bg" v-show="visible" :style="bgStyle" aria-hidden="true"></div>
    <div class="parallax-inner container">
      <div class="left">
        <h3>Why Choose Me</h3>
        <p>Clear direction, technical craft, and a collaborative approach that delivers striking imagery on brief and on time.</p>
        <ul class="why-list">
          <li><strong>Experienced:</strong> decade of commercial & editorial work</li>
          <li><strong>Creative:</strong> story-led imagery with strong art direction</li>
          <li><strong>Reliable:</strong> organized shoots and fast turnarounds</li>
          <li><strong>Collaborative:</strong> partners with clients to realize vision</li>
        </ul>
      </div>
      <div class="right">
        <div class="why-cards">
          <div class="card">Custom approach</div>
          <div class="card">High quality</div>
          <div class="card">Fast turnarounds</div>
          <div class="card">Clear communication</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'
import parallaxUrl from '../images/parallax-3.jpg'

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

    return { sectionRef, bgStyle, visible }
  }
}
</script>

