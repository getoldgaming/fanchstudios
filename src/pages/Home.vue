<template>
  <div>
    <Hero />
    <ParallaxSection />
    <ParallaxSectionReversed />
    <ParallaxSectionWhy />
    <section class="container home-services">
      <h2 class="hero-title">Services</h2>
      <p class="hero-sub">Explore boudoir offerings in Cincinnati.</p>
      <div class="service-intro">
        <p>We offer multiple services including Boudoir Experience, Couples Boudoir, Bridal Boudoir, Cosplay, Pin-up, and Fine Art Nude.</p>
        <RouterLink class="btn" :to="{ name: 'services' }">View Services</RouterLink>
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
