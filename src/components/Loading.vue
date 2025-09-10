<template>
  <div class="loading-overlay" :class="{ 'fade-out': fading }" v-show="visible" role="status" aria-live="polite">
    <div class="loading-inner">
      <h1 class="loading-title">Welcome to Timeless Treasures</h1>
      <div class="loading-bar" aria-hidden="true">
        <div class="loading-progress" :style="{ width: progress + '%' }"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
export default {
  name: 'Loading',
  emits: ['start', 'done'],
  props: { duration: { type: Number, default: 1200 } },
  setup(props, { emit }) {
    const progress = ref(0)
    const visible = ref(true)
    const fading = ref(false)

    onMounted(() => {
      const started = Date.now()
      const step = () => {
        const elapsed = Date.now() - started
        progress.value = Math.min(100, Math.round((elapsed / props.duration) * 100))
        if (progress.value < 100) {
          requestAnimationFrame(step)
        } else {
          // wait 300ms at full, then start fade and notify parent
          setTimeout(() => {
            fading.value = true
            emit('start')
            // wait for CSS fade (500ms) then hide and notify done
            setTimeout(() => {
              visible.value = false
              emit('done')
            }, 500)
          }, 300)
        }
      }
      requestAnimationFrame(step)
    })

    return { progress, visible, fading }
  }
}
</script>
