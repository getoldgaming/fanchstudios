<template>
  <section class="container" style="padding:48px 0">
    <h1 class="hero-title" style="font-size:2rem;margin:0 0 12px">Photography Services</h1>
    <p class="hero-sub">Professional photography for brands and people in Cincinnati, Ohio.</p>
    <nav style="margin:18px 0 28px">
      <RouterLink class="btn" :to="{ name: 'services-brand' }">Brand Photography</RouterLink>
      <RouterLink class="btn" :to="{ name: 'services-product' }">Product Photography</RouterLink>
      <RouterLink class="btn" :to="{ name: 'services-portraits' }">Portraits & Headshots</RouterLink>
    </nav>
    <RouterView />
  </section>
</template>

<script>
export default {}
</script>
