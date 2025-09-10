<template>
  <div>
    <Hero />
    <ParallaxSection />
    <ParallaxSectionReversed />
    <ParallaxSectionWhy />
  <section class="container home-services">
      <h2 class="hero-title" style="font-size:1.6rem;margin:0 0 8px">Services</h2>
      <p class="hero-sub">Explore boudoir offerings in Cincinnati.</p>
      <div class="service-buttons">
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
export default {
  components: { Hero, ParallaxSection, ParallaxSectionReversed, ParallaxSectionWhy, PriceGuide, About, Contact },
  mounted(){
    // Show the initial site loader for 500ms, then hide and remove it after transition
    try{
      const loader = document.getElementById('site-loader')
      if (loader){
        setTimeout(()=>{
          loader.classList.add('hidden')
          // remove from DOM after transition finished
          loader.addEventListener('transitionend', ()=>{ if (loader.parentNode) loader.parentNode.removeChild(loader) }, { once: true })
        }, 500)
      }
    }catch(_){}}
  }
}
