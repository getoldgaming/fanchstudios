<template>
  <div>
    <Hero />
    <ParallaxSection />
    <ParallaxSectionReversed />
    <ParallaxSectionWhy />
    <section class="container" style="padding:24px 0 8px">
      <h2 class="hero-title" style="font-size:1.6rem;margin:0 0 8px">Services</h2>
      <p class="hero-sub">Explore our core offerings in Cincinnati.</p>
      <div style="display:flex;gap:12px;flex-wrap:wrap;margin-top:10px">
        <RouterLink class="btn" :to="{ name: 'services-brand' }">Brand</RouterLink>
        <RouterLink class="btn" :to="{ name: 'services-product' }">Product</RouterLink>
        <RouterLink class="btn" :to="{ name: 'services-portraits' }">Portraits & Headshots</RouterLink>
      </div>
    </section>
    <PriceGuide />
    <About />
    <Contact />
  </div>
</template>

<script>
import Hero from '../components/Hero.vue'
import ParallaxSection from '../components/ParallaxSection.vue'
import ParallaxSectionReversed from '../components/ParallaxSectionReversed.vue'
import ParallaxSectionWhy from '../components/ParallaxSectionWhy.vue'
import PriceGuide from '../components/PriceGuide.vue'
import About from '../components/About.vue'
import Contact from '../components/Contact.vue'

export default {
  components: { Hero, ParallaxSection, ParallaxSectionReversed, ParallaxSectionWhy, PriceGuide, About, Contact }
}
</script>
