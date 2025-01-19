import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'), // Alias for easier imports
    },
  },
  server: {
    port: parseInt(process.env.VITE_PORT) || 3000, // Use .env or fallback to 3000
    open: true, // Automatically open the browser
    proxy: {
      '/api': {
        target: 'http://localhost:5001', // Backend API URL
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // Remove '/api' prefix
      },
    },
  },
  build: {
    outDir: 'dist', // Output directory for production builds
    emptyOutDir: true, // Clean output directory before building
    sourcemap: true, // Generate source maps for debugging
    rollupOptions: {
      output: {
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/variables.scss";`, // Automatically import SCSS variables
      },
    },
    postcss: {
      plugins: [
        tailwindcss, // TailwindCSS support
        autoprefixer, // Vendor prefixing for CSS
      ],
    },
  },
});
