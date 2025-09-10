<template>
  <section class="hero" ref="sectionRef">
    <div class="hero-bg" v-show="visible" :style="bgStyle"></div>
    <div class="container hero-content">
  <h1 class="hero-title">Cincinnati Boudoir Photography — Timeless Treasures</h1>
      <p class="hero-sub">Elegant, empowering boudoir sessions in Cincinnati—signature, couples, and bridal.</p>
      <div class="cta">
        <RouterLink class="btn" :to="{ name: 'services-boudoir-experience' }">View Boudoir</RouterLink>
        <RouterLink class="btn ghost" :to="{ name: 'home', hash: '#contact' }">Book a Session</RouterLink>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'
import heroUrl from '../images-optimized/hero.jpg'
import heroWebp from '../images-optimized/hero.webp'

export default {
  setup() {
    const sectionRef = ref(null)
    const visible = ref(true)
    const bgStyle = ref({
      backgroundImage: `image-set(url(${heroWebp}) type('image/webp'), url(${heroUrl}) type('image/jpeg'))`,
      transform: 'translateY(0px)'
    })

    let observer = null
    let ticking = false
    const speed = 0.12
    const onScroll = () => {
      if (!sectionRef.value) return
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        const rect = sectionRef.value.getBoundingClientRect()
        const offset = Math.round(rect.top * speed)
        bgStyle.value.transform = `translateY(${offset}px)`
        ticking = false
      })
    }

    onMounted(() => {
      if (!sectionRef.value) return
      observer = new IntersectionObserver((entries) => {
        entries.forEach(e => {
          visible.value = e.isIntersecting && e.intersectionRatio > 0
        })
      }, { root: null, threshold: 0.01 })
      observer.observe(sectionRef.value)
      window.addEventListener('scroll', onScroll, { passive: true })
      onScroll()
    })

    onUnmounted(() => {
      if (observer && sectionRef.value) observer.unobserve(sectionRef.value)
      observer = null
      window.removeEventListener('scroll', onScroll)
    })

    return { sectionRef, bgStyle, visible }
  }
}
</script>

