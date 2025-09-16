<template>
  <section class="container about-page">
    <h1 class="hero-title">About Timeless Treasures</h1>
    <p class="hero-sub">We create intimate, empowering boudoir imagery in Cincinnati that celebrates confidence, individuality, and timeless style. Our approach is collaborative, body‑positive, and focused on making every client feel comfortable and radiant.</p>

    <div class="about-inner">
      <div class="about-section">
        <h2 class="section-title">Our approach</h2>
        <p>Sessions are relaxed and guided. We prioritize warm lighting, flattering posing, and gentle direction so your personality and presence shine through. Whether you're booking solo, couples, or bridal boudoir, we'll plan the session around your comfort and aesthetic.</p>
        <ul class="bullets">
          <li>Gentle, guided posing at your pace</li>
          <li>Soft, flattering light for every body</li>
          <li>Respectful, private, body‑positive environment</li>
        </ul>
      </div>

      <div class="about-section">
        <h2 class="section-title">Studio & services</h2>
        <p>We offer studio and in‑home options. Packages are available at Bronze, Silver, and Gold levels to suit different timeframes and deliverables. Add‑ons such as hair & makeup and albums are available on request.</p>
        <ul class="bullets tight">
          <li>Boudoir Experience • Couples • Bridal</li>
          <li>Studio or in‑home sets; simple planning guidance</li>
          <li>Albums and printing options available</li>
        </ul>
      </div>

      <div class="about-section about-cta">
        <h3 class="section-title">Ready to chat?</h3>
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
.section-title{color:var(--accent);margin:8px 0 10px;font-family:'Playfair Display', serif;font-size:1.35rem;text-align:center}
.bullets{list-style:none;margin:10px 0 0;padding:0;color:var(--muted)}
.bullets li{position:relative;padding-left:22px;margin:8px 0}
.bullets li::before{content:'•';position:absolute;left:0;top:0;color:var(--accent)}
.bullets.tight li{margin:6px 0}
.about-cta { text-align: center }
.about-cta .btn { margin-top: 12px; display:inline-block }
</style>
