<template>
  <article>
    <h2>Portraits & Headshots</h2>
    <p>
      Professional headshots and portraits for individuals and teams across Cincinnati. I keep sessions relaxed and efficient so
      you get natural expressions and consistent lighting—great for LinkedIn, team pages, press, and speaking gigs.
    </p>

    <h3>Popular sessions</h3>
    <ul>
      <li>Individual headshot: quick studio‑style setup or outdoor background near your office</li>
      <li>Team day on‑site: consistent lighting for 5–30 people with matching backgrounds</li>
      <li>Creative portrait: location‑based with more time for styling and mood</li>
    </ul>

    <h3>Packages & pricing</h3>
    <ul>
      <li>Quick headshot (20–30 min, 1 look, 2 retouched finals): $90–$150</li>
      <li>Standard session (45–60 min, 2 looks, 5 retouched finals): $160–$260</li>
      <li>Team on‑site (5–10 people, 1 look each): $300–$500; add $25–$40 per extra person</li>
    </ul>
    <p>Add‑ons: makeup artist (at cost), extra retouched images ($15–$30 each), background removal for PNGs ($10/image).</p>

    <h3>FAQs</h3>
    <details>
      <summary>Where do we shoot?</summary>
      <p>I can come to your workplace with a compact lighting setup or suggest outdoor spots in OTR, Downtown, or Eden Park.</p>
    </details>
    <details>
      <summary>What should I wear?</summary>
      <p>Solid colors, minimal patterns, and layered textures work well. Bring one extra option for variety.</p>
    </details>
    <details>
      <summary>How long until I get photos?</summary>
      <p>Proofs within 24–48 hours; retouched selects usually 2–4 days after you choose favorites.</p>
    </details>

    <p style="margin-top:14px">
      <RouterLink class="btn" :to="{ name: 'home', hash: '#contact' }">Book portraits & headshots</RouterLink>
    </p>
  </article>
</template>

<script>
export default {}
</script>
