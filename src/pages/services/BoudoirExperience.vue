<template>
  <article>
    <h2>Boudoir Experience</h2>
    <p>
      Celebrate your confidence with a guided boudoir session—elegant, flattering, and entirely at your pace. I focus on
      natural posing, soft light, and thoughtful direction so you look and feel incredible.
    </p>

    <h3>What’s included</h3>
    <ul>
      <li>Pre‑session consult: outfits, locations, and vibe</li>
      <li>Professional guidance on posing and expression</li>
      <li>Private, body‑positive set—studio or in‑home</li>
      <li>Light retouching and color grading on delivered images</li>
    </ul>

    <h3>Packages & pricing</h3>
    <ul>
  <li>Bronze (60–90 min, 2 outfits, 10 retouched images): $250–$400</li>
  <li>Silver (2 hours, 3–4 outfits, 20 retouched images): $450–$700</li>
  <li>Gold (3–4 hours, multiple looks, 30+ retouched images): $700–$950</li>
    </ul>

    <h3>FAQs</h3>
    <details>
      <summary>Do you provide wardrobe guidance?</summary>
      <p>Yes—bring options you love; I’ll help plan outfits that flatter and mix textures/tones. A simple robe or oversized shirt can be stunning.</p>
    </details>
    <details>
      <summary>Can I keep images private?</summary>
      <p>Absolutely. Your session and images are confidential. Sharing is entirely your choice.</p>
    </details>
    <details>
      <summary>Do you work with all body types?</summary>
      <p>Yes. I photograph all bodies with care and respect. My posing and lighting are designed to be flattering and affirming.</p>
    </details>

    <p class="actions">
      <RouterLink class="btn" :to="{ name: 'contact', query: { service: 'Boudoir Experience' } }">Book boudoir</RouterLink>
    </p>
  </article>
</template>

<script>
export default {}
</script>

<style scoped>
h2 { font-size:1.6rem; margin-bottom:0.5rem }
h3 { font-size:1rem; margin-top:1rem; color:var(--muted) }
article p, article ul { color:var(--muted); line-height:1.6 }
 .actions { margin-top:1.25rem }
</style>
