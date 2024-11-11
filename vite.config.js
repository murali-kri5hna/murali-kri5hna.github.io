import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',  // Change this to '/' since we're deploying to murali-kri5hna.github.io
  build: {
    outDir: 'dist',
  },
})
