<template>
  <div>
    <Hero />
    <ParallaxSection />
    <ParallaxSectionReversed />
    <ParallaxSectionWhy />
    <section class="container" style="padding:24px 0 8px">
      <h2 class="hero-title" style="font-size:1.6rem;margin:0 0 8px">Services</h2>
      <p class="hero-sub">Explore boudoir offerings in Cincinnati.</p>
      <div style="display:flex;gap:12px;flex-wrap:wrap;margin-top:10px">
        <RouterLink class="btn" :to="{ name: 'services-boudoir-experience' }">Boudoir Experience — from $250</RouterLink>
        <RouterLink class="btn" :to="{ name: 'services-couples-boudoir' }">Couples Boudoir — from $350</RouterLink>
        <RouterLink class="btn" :to="{ name: 'services-bridal-boudoir' }">Bridal Boudoir — from $300</RouterLink>
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
