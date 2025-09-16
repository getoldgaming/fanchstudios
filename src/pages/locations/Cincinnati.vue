<template>
  <section class="cincinnati-page">
    <div class="container">
    <!-- Hero -->
    <h1 class="hero-title">Cincinnati Boudoir Photography</h1>
    <p class="hero-sub">Elegant, empowering boudoir sessions—signature, couples, and bridal—right here in Cincinnati.</p>
    <div class="cta">
      <RouterLink class="btn" :to="{ name: 'services' }">View Services</RouterLink>
      <RouterLink class="btn ghost" :to="{ name: 'contact' }">Book a Session</RouterLink>
    </div>

    <!-- Overview -->
    <div class="intro">
      <p>
        Timeless Treasures serves the Cincinnati metro—Over‑the‑Rhine, Downtown, Walnut Hills, Covington/Newport, and
        surrounding neighborhoods. I create soft, flattering boudoir imagery with natural posing, intentional light, and
        a calm, body‑positive approach.
      </p>
      <p>
        Sessions include individual boudoir, couples boudoir, and bridal boudoir, with options for studio or in‑home sets.
        I’m a newer photographer focused on a thoughtful experience—approachable pricing while delivering quality and consistency.
      </p>
    </div>

    <!-- Packages -->
    <h2 class="section-title">Boudoir services & ranges</h2>
    <ul class="list tight">
      <li><strong>Boudoir Signature</strong> — 60–90 min, 2 outfits, 10 retouched: $250–$400</li>
      <li><strong>Couples Deluxe</strong> — 2 hrs, multiple looks, 24 retouched: $600–$850</li>
      <li><strong>Bridal Heirloom</strong> — 2 hrs, 3–4 outfits, 20 retouched: $550–$800</li>
    </ul>

    <!-- Locations -->
    <h2 class="section-title">Great Cincinnati locations</h2>
    <ul class="list">
      <li>Findlay Market / OTR alleys — textured brick and city vibe</li>
      <li>Smale Riverfront Park and Roebling Bridge — clean architecture</li>
      <li>Eden Park and Krohn Conservatory — greenery and softer light</li>
    </ul>

    <!-- CTA -->
    <div class="cincy-cta">
      <RouterLink class="btn" :to="{ name: 'contact' }">Book a Cincinnati boudoir session</RouterLink>
    </div>

    <!-- FAQs -->
    <h2 class="section-title">FAQs</h2>
    <details class="faq">
      <summary>Do you travel around Cincinnati?</summary>
      <p>Yes. I work across Cincinnati and Northern Kentucky. Small travel fees may apply for distant suburbs or permits.</p>
    </details>
    <details class="faq">
      <summary>What’s the typical turnaround?</summary>
      <p>Proofs within 1–2 days; finals in 3–7 days depending on scope. Rush delivery is available.</p>
    </details>
    <details class="faq">
      <summary>Can you help plan locations and styling?</summary>
      <p>Absolutely. I suggest locations and put together a simple moodboard/shot list so the day runs smoothly.</p>
    </details>
    </div>
  </section>
  
</template>

<script>
export default {}
</script>

<style scoped>
/* Centered hero + CTA with consistent measure */
.cincinnati-page{display:flex;flex-direction:column;align-items:center;justify-content:flex-start}
.cincinnati-page .hero-title{font-size:2rem;margin:0 0 12px}
.cincinnati-page .hero-sub{max-width:48rem;text-align:center;margin:0 0 16px;line-height:1.6}
.cta{display:flex;gap:12px;margin:6px 0 18px;flex-wrap:wrap;justify-content:center;width:100%}
.cta .btn{margin-right:0}

/* Readable overview */
.intro{padding:8px 0 8px}
.intro p{max-width:65ch;margin:0 auto 12px;color:var(--muted)}

/* Section titles and lists */
.section-title{color:var(--accent);margin:16px 0 8px;font-family:'Playfair Display', serif;font-size:1.35rem;text-align:center}
.list{margin:0 auto 8px;padding-left:18px;max-width:65ch;color:var(--muted)}
.list li{margin:8px 0}
.list.tight li{margin:6px 0}

/* CTA block */
.cincy-cta{padding:18px 0 10px;text-align:center}
.cincy-cta .btn{display:inline-block;margin-right:0}

/* FAQs: compact, readable */
.faq{background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.06);border-radius:10px;padding:12px 16px;margin:10px auto;color:var(--muted);max-width:65ch}
.faq summary{cursor:pointer;color:var(--accent);font-weight:600}
.faq p{margin:8px 0 0}

@media(max-width:768px){
  .cincinnati-page{padding-top:64px;padding-bottom:36px}
}
</style>
