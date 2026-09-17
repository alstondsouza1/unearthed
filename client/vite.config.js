import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    outDir: '../server/public',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        gift: resolve(import.meta.dirname, 'gift.html'),
        notFound: resolve(import.meta.dirname, '404.html')
      }
    }
  }
})