<template>
  <section class="price-guide">
    <div class="container">
  <h2 class="section-title">Package Pricing</h2>
  <p class="muted">Transparent ranges; final quotes depend on sets, wardrobe, locations, and deliverables.</p>

      <div class="price-cards">
        <div class="card bronze">
          <h3>Bronze</h3>
          <div class="price">$250–$400</div>
          <ul class="features">
            <li>60–90 min session</li>
            <li>2 outfits</li>
            <li>10 retouched images</li>
          </ul>
          <RouterLink class="btn" :to="{ name: 'contact', query: { package: 'Bronze' } }">Book Bronze</RouterLink>
        </div>

        <div class="card silver">
          <h3>Silver</h3>
          <div class="price">$550–$800</div>
          <ul class="features">
            <li>2 hour session</li>
            <li>Multiple looks</li>
            <li>20 retouched images</li>
          </ul>
          <RouterLink class="btn" :to="{ name: 'contact', query: { package: 'Silver' } }">Book Silver</RouterLink>
        </div>

        <div class="card gold">
          <h3>Gold</h3>
          <div class="price">$700–$950</div>
          <ul class="features">
            <li>3–4 hour session</li>
            <li>Multiple sets and styling</li>
            <li>30+ retouched images</li>
          </ul>
          <RouterLink class="btn" :to="{ name: 'contact', query: { package: 'Gold' } }">Book Gold</RouterLink>
        </div>
      </div>

      <p class="muted" style="margin-top:16px">Add‑ons: professional makeup (at cost), extra retouched images ($15–$30 each), studio rental (if applicable).</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PriceGuide'
}
</script>
