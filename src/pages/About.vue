<template>
  <section class="container about-page" style="padding:48px 0">
    <h1 class="hero-title">About Timeless Treasures</h1>
    <p class="hero-sub" style="max-width:56ch;margin:12px auto 18px;line-height:1.6">We create intimate, empowering boudoir imagery in Cincinnati that celebrates confidence, individuality, and timeless style. Our approach is collaborative, body‑positive, and focused on making every client feel comfortable and radiant.</p>

    <div class="about-inner" style="gap:24px;display:flex;flex-direction:column;align-items:center">
      <div style="max-width:72ch">
        <h2>Our approach</h2>
        <p>Sessions are relaxed and guided. We prioritize warm lighting, flattering posing, and gentle direction so your personality and presence shine through. Whether you're booking solo, couples, or bridal boudoir, we'll plan the session around your comfort and aesthetic.</p>
      </div>

      <div style="max-width:72ch">
        <h2>Studio & services</h2>
        <p>We offer studio and in‑home options. Packages are available at Bronze, Silver, and Gold levels to suit different timeframes and deliverables. Add-ons such as hair & makeup and albums are available on request.</p>
      </div>

      <div style="max-width:72ch;text-align:center">
        <h3>Ready to chat?</h3>
        <RouterLink class="btn" :to="{ name: 'home', hash: '#contact' }">Get in touch</RouterLink>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>
