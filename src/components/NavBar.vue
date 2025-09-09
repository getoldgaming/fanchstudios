<template>
  <header :class="['nav', { scrolled }]">
    <div class="container nav-inner">
  <div class="brand">Fanch Studios</div>
      <nav class="links">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/services">Services</RouterLink>
        <RouterLink to="/locations/cincinnati">Cincinnati</RouterLink>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </div>
  </header>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  setup () {
    const scrolled = ref(false)

    const onScroll = () => {
      scrolled.value = window.scrollY > 20
    }

    onMounted(() => {
      onScroll()
      window.addEventListener('scroll', onScroll, { passive: true })
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', onScroll)
    })

    return { scrolled }
  }
}
</script>
