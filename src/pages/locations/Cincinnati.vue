<template>
  <section class="container" style="padding:48px 0">
    <h1 class="hero-title" style="font-size:2rem;margin:0 0 12px">Cincinnati, Ohio Photography</h1>
    <p class="hero-sub">Commercial, product, and portrait photography for businesses and people in Cincinnati.</p>
    <div class="about" style="padding:16px 0 0">
      <p>Fanch Studios serves the greater Cincinnati area including Over-the-Rhine, Downtown, Northern Kentucky, and surrounding neighborhoods.</p>
      <p>Services include brand campaigns, e‑commerce product photography, and professional headshots. Get a quote or book a session today.</p>
    </div>
    <p style="margin-top:10px"><RouterLink class="btn" :to="{ name: 'home', hash: '#contact' }">Contact us</RouterLink></p>
    <h2 style="font-size:1.25rem;margin-top:22px">FAQs</h2>
    <details>
      <summary>Do you travel around Cincinnati?</summary>
      <p>Yes. We work across Cincinnati and Northern Kentucky. Studio sessions by appointment.</p>
    </details>
    <details>
      <summary>Do you offer rush turnaround?</summary>
      <p>Rush options are available depending on scope and schedule.</p>
    </details>
  </section>
  
</template>

<script>
export default {}
</script>
