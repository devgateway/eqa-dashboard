import { defineConfig } from 'vite';

export default defineConfig({
  base: '/eqa-dashboard/',
  root: '.',
  publicDir: 'public',
  server: {
    port: 5173,
    open: false
  },
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        mobile: 'mobile/index.html'
      }
    }
  }
});
