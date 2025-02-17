import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  server: {
    port: process.env.PORT || 10000, // Use Render's dynamic port
    host: '0.0.0.0', // Ensure it's publicly accessible
  },
  preview: {
    port: process.env.PORT || 10000,
    host: '0.0.0.0',
  }
});
