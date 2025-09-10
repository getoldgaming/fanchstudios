<template>
  <div>
    <Hero />
    <ParallaxSection />
    <ParallaxSectionReversed />
    <ParallaxSectionWhy />
    <section class="container home-services">
      <h2 class="hero-title">Services</h2>
      <p class="hero-sub">Explore boudoir offerings in Cincinnati.</p>
      <div class="service-buttons">
        <RouterLink class="btn" :to="{ name: 'services-boudoir-experience' }">Boudoir Experience — from $250</RouterLink>
        <RouterLink class="btn" :to="{ name: 'services-couples-boudoir' }">Couples Boudoir — from $350</RouterLink>
        <RouterLink class="btn" :to="{ name: 'services-bridal-boudoir' }">Bridal Boudoir — from $300</RouterLink>
  <RouterLink class="btn" :to="{ name: 'services', query: { t: 'cosplay' } }">Cosplay — from $180</RouterLink>
  <RouterLink class="btn" :to="{ name: 'services', query: { t: 'pinup' } }">Pin-up — from $160</RouterLink>
  <RouterLink class="btn" :to="{ name: 'services', query: { t: 'fine-art-nude' } }">Fine Art Nude — from $220</RouterLink>
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
