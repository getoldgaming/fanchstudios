<template>
  <section class="price-guide">
    <div class="container">
      <h2 class="section-title">Pricing Guide</h2>
      <p class="muted">Choose a package that fits your project. Prices are starting rates and will vary by deliverables.</p>

      <div class="price-cards">
        <div class="card bronze">
          <h3>Bronze</h3>
          <div class="price">$800</div>
          <ul class="features">
            <li>1-hour consultation</li>
            <li>Half-day shoot</li>
            <li>10 edited images</li>
          </ul>
          <button class="btn">Book Bronze</button>
        </div>

        <div class="card silver">
          <h3>Silver</h3>
          <div class="price">$1,500</div>
          <ul class="features">
            <li>Creative direction</li>
            <li>Full-day shoot</li>
            <li>25 edited images</li>
          </ul>
          <button class="btn">Book Silver</button>
        </div>

        <div class="card gold">
          <h3>Gold</h3>
          <div class="price">$3,000</div>
          <ul class="features">
            <li>Pre-production & scouting</li>
            <li>Full-day premium shoot</li>
            <li>50+ edited images + rights</li>
          </ul>
          <button class="btn">Book Gold</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PriceGuide'
}
</script>
