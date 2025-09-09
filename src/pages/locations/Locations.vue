<template>
  <section class="container" style="padding:48px 0">
    <h1 class="hero-title" style="font-size:2rem;margin:0 0 12px">Locations</h1>
    <p class="hero-sub">We primarily serve Cincinnati, Ohio and the surrounding region.</p>
    <ul>
      <li><RouterLink class="links" :to="{ name: 'cincinnati' }">Cincinnati, OH</RouterLink></li>
    </ul>
  </section>
</template>

<script>
export default {}
</script>
