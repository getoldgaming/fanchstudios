<template>
  <div>
    <NavBar />
    <RouterView />
    <FooterBar />
  </div>
  
</template>

<script>
import NavBar from './components/NavBar.vue'
// Routes render the page sections; keep only layout components here
import FooterBar from './components/FooterBar.vue'

export default { components: { NavBar, FooterBar } }
</script>
