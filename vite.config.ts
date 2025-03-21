import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base:'/WEB_Lab_1/',
  plugins: [react()],
})
