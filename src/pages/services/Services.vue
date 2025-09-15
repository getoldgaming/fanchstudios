<template>
  <section class="container services-hero">
  <h1 class="hero-title">Photography Services</h1>
  <p class="hero-sub">Intimate, empowering photography in Cincinnati, Ohio.</p>
    <nav class="services-nav">
      <button class="btn service-btn" @click="setActive('boudoir')">
        <span class="service-label">Boudoir Experience</span>
        <span class="service-price">from $250</span>
      </button>
      <button class="btn service-btn" @click="setActive('couples')">
        <span class="service-label">Couples Boudoir</span>
        <span class="service-price">from $350</span>
      </button>
      <button class="btn service-btn" @click="setActive('bridal')">
        <span class="service-label">Bridal Boudoir</span>
        <span class="service-price">from $300</span>
      </button>
      <button class="btn service-btn" @click="setActive('cosplay')">
        <span class="service-label">Cosplay</span>
        <span class="service-price">from $180</span>
      </button>
      <button class="btn service-btn" @click="setActive('pinup')">
        <span class="service-label">Pin-up</span>
        <span class="service-price">from $160</span>
      </button>
      <button class="btn service-btn" @click="setActive('fineart')">
        <span class="service-label">Fine Art Nude</span>
        <span class="service-price">from $220</span>
      </button>
    </nav>

    <section class="service-detail" v-if="active">
      <component :is="activeComponent" />
    </section>
    <!-- keep router view for backward compatibility with nested routes -->
    <RouterView style="display:none" />
  </section>
</template>

<script>
import BoudoirExperience from './BoudoirExperience.vue'
import CouplesBoudoir from './CouplesBoudoir.vue'
import BridalBoudoir from './BridalBoudoir.vue'
import Cosplay from './Cosplay.vue'
import Pinup from './Pinup.vue'
import FineArtNude from './FineArtNude.vue'

export default {
  components: { BoudoirExperience, CouplesBoudoir, BridalBoudoir, Cosplay, Pinup, FineArtNude },
  data() { return { active: null } },
  computed: {
    activeComponent() {
      switch (this.active) {
        case 'boudoir': return 'BoudoirExperience'
        case 'couples': return 'CouplesBoudoir'
        case 'bridal': return 'BridalBoudoir'
        case 'cosplay': return 'Cosplay'
        case 'pinup': return 'Pinup'
        case 'fineart': return 'FineArtNude'
        default: return null
      }
    }
  },
  methods: {
    setActive(key) {
      this.active = this.active === key ? null : key
      // scroll the detail into view
      this.$nextTick(() => {
        const el = document.querySelector('.service-detail')
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
    }
  }
}
</script>
