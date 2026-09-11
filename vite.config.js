import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages serves from the repository subpath; Vercel serves from root.
  base: process.env.GITHUB_ACTIONS === 'true' ? '/webportfolioi/' : '/',
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        resume: 'resume.html',
      },
    },
  },
  server: {
    port: 3000,
    open: true
  }
})
