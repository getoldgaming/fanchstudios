<template>
  <section class="container services-hero">
    <h1 class="hero-title">Boudoir Services</h1>
    <p class="hero-sub">Intimate, empowering boudoir photography in Cincinnati, Ohio.</p>
    <nav class="services-nav">
  <RouterLink class="btn" :to="{ name: 'services-boudoir-experience' }">Boudoir Experience — from $250</RouterLink>
  <RouterLink class="btn" :to="{ name: 'services-couples-boudoir' }">Couples Boudoir — from $350</RouterLink>
  <RouterLink class="btn" :to="{ name: 'services-bridal-boudoir' }">Bridal Boudoir — from $300</RouterLink>
  <RouterLink class="btn" :to="{ name: 'services', query: { t: 'cosplay' } }">Cosplay — from $180</RouterLink>
  <RouterLink class="btn" :to="{ name: 'services', query: { t: 'pinup' } }">Pin-up — from $160</RouterLink>
  <RouterLink class="btn" :to="{ name: 'services', query: { t: 'fine-art-nude' } }">Fine Art Nude — from $220</RouterLink>
    </nav>
    <RouterView />
  </section>
</template>

<script>
export default {}
</script>
