<template>
  <article>
    <h2>Couples Boudoir</h2>
    <p>
      Intimate, tasteful imagery that captures connection. I guide you through comfortable poses and movement that feels natural,
      with an emphasis on trust, consent, and your shared story.
    </p>

    <h3>What’s included</h3>
    <ul>
      <li>Pre‑session consult to discuss boundaries and ideas</li>
      <li>Private, respectful set with music and pacing to match your comfort</li>
      <li>Posing direction designed for two—gentle movement and natural moments</li>
      <li>Light retouching and color grading</li>
    </ul>

    <h3>Packages & pricing</h3>
    <ul>
  <li>Bronze (60–90 min, 2 looks, 12 retouched images): $350–$550</li>
  <li>Silver (2 hours, multiple looks, 24 retouched images): $600–$850</li>
  <li>Gold (Extended session, multiple looks, 36+ retouched images): $900–$1,200</li>
    </ul>

    <h3>FAQs</h3>
    <details>
      <summary>What should we wear?</summary>
      <p>Simple, coordinated tones work best—think neutrals, soft textures, and layers. Bring options; we’ll choose together.</p>
    </details>
    <details>
      <summary>Is nudity required?</summary>
      <p>No. Your comfort sets the tone. Sessions can be implied, fully clothed, or artistic nudes—always with consent.</p>
    </details>

    <p class="actions">
      <RouterLink class="btn" :to="{ name: 'contact', query: { service: 'Couples Boudoir' } }">Book couples boudoir</RouterLink>
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
