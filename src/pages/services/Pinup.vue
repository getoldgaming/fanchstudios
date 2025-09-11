<template>
  <article>
    <h2>Pin‑up Sessions</h2>
    <p>Classic pin‑up with modern sensibility — playful, confident images with vintage-inspired posing and lighting.</p>
    <h3>Includes</h3>
    <ul>
      <li>Posing guidance and classic pin‑up styling tips</li>
      <li>Studio lighting setup tailored to vintage looks</li>
      <li>Retouching optimized for glossy, timeless results</li>
    </ul>
    <h3>Packages & pricing</h3>
    <ul>
      <li>Bronze (45–60 min, 1–2 looks): from $160</li>
      <li>Silver (90 min, multiple looks): from $260</li>
      <li>Gold (extended session, hair & makeup add-on): from $420</li>
    </ul>

    <h3>FAQs</h3>
    <details>
      <summary>Can you provide hair and makeup?</summary>
      <p>I can arrange a makeup artist for Silver/Gold packages; please request in advance.</p>
    </details>
    <details>
      <summary>Are vintage props included?</summary>
      <p>Simple props are available; please contact me for specific requests or large items.</p>
    </details>
    <p class="actions">
      <RouterLink class="btn" :to="{ name: 'contact', query: { service: 'Pin-up' } }">Book pin‑up</RouterLink>
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
