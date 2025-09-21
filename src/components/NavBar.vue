<template>
  <header :class="['nav', { scrolled }]">
    <div class="container nav-inner">
  <RouterLink class="brand" :to="{ name: 'home' }" aria-label="Home" title="Home — Timeless Touch Boudoir">Timeless Touch Boudoir</RouterLink>

      <!-- Mobile hamburger (shown on small screens) -->
      <button type="button" class="burger" @click="toggleMenu" :aria-expanded="menuOpen.toString()" aria-controls="mobile-menu" aria-label="Toggle navigation">
        <span class="burger-box"><span class="burger-inner" :class="{ open: menuOpen }"></span></span>
      </button>

      <nav id="primary-nav" class="links">
        <RouterLink to="/services" @click="menuOpen = false">Services</RouterLink>
        <RouterLink to="/locations/cincinnati" @click="menuOpen = false">Cincinnati</RouterLink>
        <RouterLink :to="{ name: 'about' }" @click="menuOpen = false">About</RouterLink>
        <RouterLink :to="{ name: 'contact' }" @click="menuOpen = false">Contact</RouterLink>
      </nav>
    </div>

    <!-- Mobile slide-in panel -->
    <aside
      id="mobile-menu"
      class="mobile-panel"
      :class="{ open: menuOpen }"
      role="dialog"
      aria-modal="true"
      aria-labelledby="mobile-menu-title">
      <h2 id="mobile-menu-title" class="sr-only">Menu</h2>
      <button type="button" class="mobile-close" @click="closeMenu" aria-label="Close menu">×</button>
      <nav class="mobile-links">
        <RouterLink class="mobile-brand" :to="{ name: 'home' }" @click="closeMenu" aria-label="Home">
          <img src="/tt-logo.svg" alt="Timeless Touch Boudoir" />
        </RouterLink>
        <RouterLink to="/services" @click="closeMenu">Services</RouterLink>
        <RouterLink to="/locations/cincinnati" @click="closeMenu">Cincinnati</RouterLink>
        <RouterLink :to="{ name: 'about' }" @click="closeMenu">About</RouterLink>
        <RouterLink :to="{ name: 'contact' }" @click="closeMenu">Contact</RouterLink>
      </nav>
    </aside>
  </header>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  setup () {
    const scrolled = ref(false)
    const menuOpen = ref(false)

    const onScroll = () => {
      scrolled.value = window.scrollY > 20
    }

    const closeMenu = () => { menuOpen.value = false; document.body.classList.remove('menu-open') }
    const toggleMenu = () => {
      menuOpen.value = !menuOpen.value
      document.body.classList.toggle('menu-open', menuOpen.value)
    }

    // hoist keydown handler so we can remove it on unmount
    const onKey = (e) => { if (e.key === 'Escape' || e.key === 'Esc') closeMenu() }

    onMounted(() => {
      onScroll()
      window.addEventListener('scroll', onScroll, { passive: true })
      // close menu on Escape for keyboard users
      window.addEventListener('keydown', onKey)
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('keydown', onKey)
      document.body.classList.remove('menu-open')
    })

    return { scrolled, menuOpen, toggleMenu, closeMenu }
  }
}
</script>
