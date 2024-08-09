import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8000', // Update this to match your backend server
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
