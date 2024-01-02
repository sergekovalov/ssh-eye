import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

// https://vitejs.dev/config
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@fe': path.resolve(__dirname, './src/fe'),
      '@be': path.resolve(__dirname, './src/be'),
    }
  }
});