import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// GitHub Pages project site: base must be '/<repo-name>/'
export default defineConfig({
  plugins: [vue()],
  base: '/fanchstudios/',
})