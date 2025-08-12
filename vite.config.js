import { defineConfig } from 'vite'

export default defineConfig({
  root: '.',
  publicDir: 'images',
  server: {
    port: 8000,
    host: true,
    open: false
  },
  preview: {
    port: 8000,
    host: true,
    open: false
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: './index.html'
      }
    }
  }
})