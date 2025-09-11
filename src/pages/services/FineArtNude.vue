<template>
  <article>
    <h2>Fine Art Nude</h2>
    <p>Fine art nude sessions focusing on form, light, and composition — tasteful, art-forward imagery created with respect and care.</p>
    <h3>Includes</h3>
    <ul>
      <li>Consult on mood, posing, and privacy preferences</li>
      <li>Carefully lit, sculptural images emphasizing shape and tone</li>
      <li>Discreet handling and delivery of files</li>
    </ul>
    <h3>Packages & pricing</h3>
    <ul>
      <li>Bronze (60 min, selected poses): from $220</li>
      <li>Silver (90–120 min, expanded poses): from $380</li>
      <li>Gold (extended session, portfolio-ready retouching): from $620</li>
    </ul>

    <h3>FAQs</h3>
    <details>
      <summary>How is privacy handled?</summary>
      <p>Sessions and images are private by default. I can provide specific delivery methods or agreements on request.</p>
    </details>
    <details>
      <summary>Can I request a particular look or concept?</summary>
      <p>Yes—concept planning is part of Silver/Gold packages to ensure a cohesive creative direction.</p>
    </details>
    <p class="actions">
      <RouterLink class="btn" :to="{ name: 'contact', query: { service: 'Fine Art Nude' } }">Book fine art nude</RouterLink>
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
