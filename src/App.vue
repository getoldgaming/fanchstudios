<template>
  <div>
    <NavBar />
  <Hero />
  <ParallaxSection />
  <ParallaxSectionReversed />
  <ParallaxSectionWhy />
  <PriceGuide />
    <About />
    <Contact />
    <FooterBar />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import Hero from './components/Hero.vue'
import ParallaxSection from './components/ParallaxSection.vue'
import ParallaxSectionReversed from './components/ParallaxSectionReversed.vue'
import ParallaxSectionWhy from './components/ParallaxSectionWhy.vue'
import PriceGuide from './components/PriceGuide.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'
import FooterBar from './components/FooterBar.vue'

export default {
  components: { NavBar, Hero, ParallaxSection, ParallaxSectionReversed, ParallaxSectionWhy, PriceGuide, About, Contact, FooterBar }
}
</script>
