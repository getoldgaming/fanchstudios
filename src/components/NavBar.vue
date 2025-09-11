<template>
  <header :class="['nav', { scrolled }]">
    <div class="container nav-inner">
  <RouterLink class="brand" :to="{ name: 'home' }" aria-label="Home" title="Home — Timeless Treasures">Timeless Treasures</RouterLink>
      <nav class="links">
        <RouterLink to="/services">Services</RouterLink>
        <RouterLink to="/locations/cincinnati">Cincinnati</RouterLink>
  <RouterLink :to="{ name: 'about' }">About</RouterLink>
        <RouterLink :to="{ name: 'home', hash: '#contact' }">Contact</RouterLink>
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
