<template>
  <div>
    <Loading v-if="showLoader" @start="reveal" @done="showLoader = false" :duration="1400" />
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
  data() { return { showLoader: true, contentVisible: false } },
  methods: {
    reveal() { this.contentVisible = true }
  }
}
</script>
