
<template>
  <section class="hero" ref="sectionRef">
    <div class="hero-bg" v-show="visible" :style="bgStyle"></div>
    <div class="container hero-content">
  <h1 class="hero-title">Cincinnati Photography Studio — Fanch Studios</h1>
      <p class="hero-sub">Cincinnati, Ohio photography for brands and people: campaigns, products, portraits, and headshots.</p>
      <div class="cta">
        <button class="btn">View Work</button>
        <button class="btn ghost">Contact Us</button>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'
import heroUrl from '../images/hero.jpg'

export default {
  setup() {
    const sectionRef = ref(null)
    const visible = ref(true)
    const bgStyle = ref({
      backgroundImage: `url(${heroUrl})`
    })

    let observer = null
    onMounted(() => {
      if (!sectionRef.value) return
      observer = new IntersectionObserver((entries) => {
        entries.forEach(e => {
          visible.value = e.isIntersecting && e.intersectionRatio > 0
        })
      }, { root: null, threshold: 0.01 })
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

