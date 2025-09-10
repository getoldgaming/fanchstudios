<template>
  <section class="price-guide">
    <div class="container">
  <h2 class="section-title">Boudoir Pricing</h2>
  <p class="muted">Transparent ranges; final quotes depend on sets, wardrobe, locations, and deliverables.</p>

      <div class="price-cards">
        <div class="card bronze">
          <h3>Bronze</h3>
          <div class="price">$250–$400</div>
          <ul class="features">
            <li>60–90 minutes, 1–2 outfits</li>
            <li>10 professionally retouched images</li>
            <li>Private studio set and guided posing</li>
          </ul>
          <RouterLink class="btn" :to="{ name: 'home', hash: '#contact' }">Book Bronze</RouterLink>
        </div>

        <div class="card silver">
          <h3>Silver</h3>
          <div class="price">$550–$800</div>
          <ul class="features">
            <li>Up to 2 hours, multiple looks</li>
            <li>20–24 retouched images</li>
            <li>Expanded set options and styling guidance</li>
          </ul>
          <RouterLink class="btn" :to="{ name: 'home', hash: '#contact' }">Book Silver</RouterLink>
        </div>

        <div class="card gold">
          <h3>Gold</h3>
          <div class="price">$700–$950</div>
          <ul class="features">
            <li>Long session (3+ hrs), multiple sets/outfits</li>
            <li>30+ retouched images</li>
            <li>Album design and priority retouching</li>
          </ul>
          <RouterLink class="btn" :to="{ name: 'home', hash: '#contact' }">Book Gold</RouterLink>
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
