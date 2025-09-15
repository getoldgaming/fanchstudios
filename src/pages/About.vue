<template>
  <section class="container about-page">
    <h1 class="hero-title">About Timeless Treasures</h1>
  <p class="hero-sub">We create intimate, empowering boudoir imagery in Cincinnati that celebrates confidence, individuality, and timeless style. Our approach is collaborative, body‑positive, and focused on making every client feel comfortable and radiant.</p>

    <div class="about-inner">
      <div class="about-section">
        <h2>Our approach</h2>
        <p>Sessions are relaxed and guided. We prioritize warm lighting, flattering posing, and gentle direction so your personality and presence shine through. Whether you're booking solo, couples, or bridal boudoir, we'll plan the session around your comfort and aesthetic.</p>
      </div>

      <div class="about-section">
        <h2>Studio & services</h2>
        <p>We offer studio and in‑home options. Packages are available at Bronze, Silver, and Gold levels to suit different timeframes and deliverables. Add-ons such as hair & makeup and albums are available on request.</p>
      </div>

      <div class="about-section about-cta">
        <h3>Ready to chat?</h3>
        <RouterLink class="btn" :to="{ name: 'contact' }">Get in touch</RouterLink>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>
.about-inner { display:flex; flex-direction:column; gap:24px; align-items:center }
.about-section { max-width:72ch }
.about-cta { text-align: center }
.about-cta .btn { margin-top: 12px; display:inline-block }
</style>
