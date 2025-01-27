import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  root: './frontend', // Set the root directory for the frontend
  build: {
    outDir: resolve(__dirname, 'dist'),
    emptyOutDir: true,
    rollupOptions: {
      input: resolve(__dirname, 'frontend/index.html'), // Correct input path
      external: ['graphql'], // Mark 'graphql' as external to exclude it from the bundle
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'frontend/src'),
    },
  },
  server: {
    port: 3000, // Ensure the port matches the one shown in the terminal
    open: true,
  },
});
