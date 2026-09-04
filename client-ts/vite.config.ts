import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/boards': 'http://localhost:3001',
      '/socket.io': 'http://localhost:3001',
    },
  },
})
