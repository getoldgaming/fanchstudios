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
        <RouterLink class="btn service-btn" :to="{ name: 'services-boudoir-experience' }">
          <span class="service-label">Boudoir Experience</span>
          <span class="service-price">from $250</span>
        </RouterLink>
        <RouterLink class="btn service-btn" :to="{ name: 'services-couples-boudoir' }">
          <span class="service-label">Couples Boudoir</span>
          <span class="service-price">from $350</span>
        </RouterLink>
        <RouterLink class="btn service-btn" :to="{ name: 'services-bridal-boudoir' }">
          <span class="service-label">Bridal Boudoir</span>
          <span class="service-price">from $300</span>
        </RouterLink>
        <RouterLink class="btn service-btn" :to="{ name: 'services', query: { t: 'cosplay' } }">
          <span class="service-label">Cosplay</span>
          <span class="service-price">from $180</span>
        </RouterLink>
        <RouterLink class="btn service-btn" :to="{ name: 'services', query: { t: 'pinup' } }">
          <span class="service-label">Pin-up</span>
          <span class="service-price">from $160</span>
        </RouterLink>
        <RouterLink class="btn service-btn" :to="{ name: 'services', query: { t: 'fine-art-nude' } }">
          <span class="service-label">Fine Art Nude</span>
          <span class="service-price">from $220</span>
        </RouterLink>
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
