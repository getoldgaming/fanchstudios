<template>
  <section class="container services-section">
    <h1 class="hero-title" style="font-size:2rem;margin:0 0 12px">Boudoir Services</h1>
    <p class="hero-sub">Intimate, empowering boudoir photography in Cincinnati, Ohio.</p>
    <nav style="margin:18px 0 28px">
      <RouterLink class="btn" :to="{ name: 'services-boudoir-experience' }">Boudoir Experience</RouterLink>
      <RouterLink class="btn" :to="{ name: 'services-couples-boudoir' }">Couples Boudoir</RouterLink>
      <RouterLink class="btn" :to="{ name: 'services-bridal-boudoir' }">Bridal Boudoir</RouterLink>
    </nav>
    <RouterView />
  </section>
</template>

<script>
export default {}
</script>
