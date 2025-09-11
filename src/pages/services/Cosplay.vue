<template>
  <article>
    <h2>Cosplay Sessions</h2>
    <p>Bring your favorite characters to life with stylized, dramatic portraits. Whether it's a full costume or casual cosplay, we'll plan looks that flatter and photograph beautifully.</p>
    <h3>Includes</h3>
    <ul>
      <li>Pre-session styling consult</li>
      <li>Guided posing to capture character and mood</li>
      <li>Light retouching and color grading</li>
    </ul>
    <h3>Packages & pricing</h3>
    <ul>
      <li>Bronze (60 min, 1 look): from $180</li>
      <li>Silver (90–120 min, 2 looks): from $300</li>
      <li>Gold (extended, multiple looks & retouching): from $480</li>
    </ul>

    <h3>FAQs</h3>
    <details>
      <summary>Can we do multiple characters?</summary>
      <p>Yes—the Silver and Gold packages accommodate multiple looks; bring quick-change solutions and we’ll plan timing.</p>
    </details>
    <details>
      <summary>Do you help with props?</summary>
      <p>I can advise on props and simple set pieces; large or fragile props should be discussed ahead of time.</p>
    </details>
    <p style="margin-top:14px">
      <RouterLink class="btn" :to="{ name: 'home', hash: '#contact' }">Book cosplay</RouterLink>
    </p>
  </article>
</template>

<script>
export default {}
</script>
