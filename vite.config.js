import { defineConfig } from 'vite'

export default defineConfig({
  root: '.',
  server: {
    port: 8000,
    host: true
  },
  preview: {
    port: 8000,
    host: true
  }
})