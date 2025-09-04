<template>
  <section id="gallery" class="gallery">
    <div class="container">
      <h2>Selected Work</h2>
      <div class="grid">
        <div class="card" v-for="n in 8" :key="n">
          <div class="img" :style="{ backgroundImage: `url(/images/sample-${(n%4)+1}.jpg)` }"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Gallery'
}
</script>
