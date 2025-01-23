import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  root: 'frontend', // Explicitly set the root directory for the frontend
  plugins: [react()],
  root: './frontend', // If your index.html is in the 'frontend' directory
  build: {
    outDir: resolve(__dirname, 'dist'), // Output directory for build files
    emptyOutDir: true, // Clear the output directory before building
    rollupOptions: {
      input: resolve(__dirname, 'frontend/index.html'), // Ensure correct path to index.html
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './frontend/src'), // Alias for frontend/src
    },
  },
  server: {
    port: 3000, // Set development server port
    open: true, // Open browser automatically on start
  },
});
