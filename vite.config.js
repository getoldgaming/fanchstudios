import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Using a relative base ('./') ensures assets load whether served at / or /fanchstudios/
export default defineConfig({
  plugins: [vue()],
  base: './',
})