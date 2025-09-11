<template>
  <article>
    <h2>Bridal Boudoir</h2>
    <p>
      A timeless gift for yourself or your partner—soft, romantic imagery that celebrates you ahead of the big day.
      From lace robes to your wedding accessories, we’ll craft a look that’s elegant and personal.
    </p>

    <h3>What’s included</h3>
    <ul>
      <li>Pre‑session planning for wardrobe and styling</li>
      <li>Delicate lighting and direction for a classic bridal feel</li>
      <li>Private studio or in‑home session</li>
      <li>Optional album design and prints</li>
    </ul>

    <h3>Packages & pricing</h3>
    <ul>
  <li>Bronze (60–90 min, 2 outfits, 12 retouched images): $300–$500</li>
  <li>Silver (2 hours, 3–4 outfits, 20 retouched images): $550–$800</li>
  <li>Gold (Session + 10x10 album or extended session): from $850</li>
    </ul>

    <h3>FAQs</h3>
    <details>
      <summary>Can you help with album design?</summary>
      <p>Yes—I offer simple, heirloom‑quality albums with custom layouts and cover options.</p>
    </details>
    <details>
      <summary>When should I book before my wedding?</summary>
      <p>Ideally 6–8 weeks before the date to allow time for editing and album production.</p>
    </details>

    <p class="actions">
      <RouterLink class="btn" :to="{ name: 'contact', query: { service: 'Bridal Boudoir' } }">Book bridal boudoir</RouterLink>
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
