<template>
  <div>
    <Loading v-if="showLoader" @start="reveal" @done="onLoaderDone" :duration="1400" />
    <div :class="['app-main', { 'app-visible': contentVisible }]">
      <NavBar />
      <RouterView />
      <FooterBar />
    </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import FooterBar from './components/FooterBar.vue'
import Loading from './components/Loading.vue'

export default {
  components: { NavBar, FooterBar, Loading },
  data() { return { showLoader: false, contentVisible: false } },
  created() {
    try {
      const FLAG = 'tt:homeLoaderShown'
      const isHome = this.$route && (this.$route.name === 'home' || this.$route.path === '/')
      const alreadyShown = typeof window !== 'undefined' && window.sessionStorage && sessionStorage.getItem(FLAG)
      if (isHome && !alreadyShown) {
        // First visit to Home in this tab: show loader
        this.showLoader = true
      } else {
        // Any other route or already shown: skip loader and show content immediately
        this.showLoader = false
        this.contentVisible = true
      }
    } catch (e) {
      // Fallback: never block content if storage is unavailable
      this.showLoader = false
      this.contentVisible = true
    }
  },
  methods: {
    reveal() { this.contentVisible = true },
    onLoaderDone() {
      // Mark loader as shown for this tab session and hide the overlay
      try { sessionStorage.setItem('tt:homeLoaderShown', '1') } catch (e) { /* ignore */ }
      this.showLoader = false
    }
  }
}
</script>
