<template>
  <section class="price-guide">
    <div class="container">
  <h2 class="section-title">Boudoir Pricing</h2>
  <p class="muted">Transparent ranges; final quotes depend on sets, wardrobe, locations, and deliverables.</p>

      <div class="price-cards">
        <div class="card bronze">
          <h3>Boudoir Signature</h3>
          <div class="price">$250–$400</div>
          <ul class="features">
            <li>60–90 min, 2 outfits</li>
            <li>10 retouched images</li>
            <li>Private, body‑positive set</li>
          </ul>
          <RouterLink class="btn" :to="{ name: 'home', hash: '#contact' }">Book Signature</RouterLink>
        </div>

        <div class="card silver">
          <h3>Couples Deluxe</h3>
          <div class="price">$600–$850</div>
          <ul class="features">
            <li>2 hours, multiple looks</li>
            <li>24 retouched images</li>
            <li>Guided, comfortable posing</li>
          </ul>
          <RouterLink class="btn" :to="{ name: 'home', hash: '#contact' }">Book Couples</RouterLink>
        </div>

        <div class="card gold">
          <h3>Bridal Heirloom</h3>
          <div class="price">$550–$800</div>
          <ul class="features">
            <li>2 hours, 3–4 outfits</li>
            <li>20 retouched images</li>
            <li>Album design available</li>
          </ul>
          <RouterLink class="btn" :to="{ name: 'home', hash: '#contact' }">Book Bridal</RouterLink>
        </div>

        <div class="card day-rate">
          <h3>Luxury Boudoir</h3>
          <div class="price">$700–$950</div>
          <ul class="features">
            <li>3–4 hours, multiple sets</li>
            <li>30+ retouched images</li>
            <li>Studio or in‑home</li>
          </ul>
          <RouterLink class="btn" :to="{ name: 'home', hash: '#contact' }">Book Luxury</RouterLink>
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
