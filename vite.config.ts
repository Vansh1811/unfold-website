import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  
  plugins: [
    react({
      // Enable Fast Refresh for better development experience
      tsDecorators: true,
      plugins: [
        // Add any additional SWC plugins here if needed
      ],
    }),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  
  // Production optimizations
  build: {
    // Optimize bundle splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks
          vendor: ['react', 'react-dom', 'react-router-dom'],
          ui: ['framer-motion', 'lucide-react'],
          // Utils chunk
          utils: ['clsx', 'tailwind-merge'],
        },
      },
    },
    // Increase chunk size warning limit for production
    chunkSizeWarningLimit: 1000,
    // Enable source maps for production debugging (optional)
    sourcemap: mode === 'production' ? false : true,
    // Minification settings
    minify: 'esbuild',
  },
  
  // CSS optimizations
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          // Unfold brand colors available globally
          $navy: #0f1b2b;
          $gold: #c59364;
          $white: #ffffff;
        `,
      },
    },
  },
  
  // Define environment variables
  define: {
    __BRAND_COLORS__: {
      navy: '#0f1b2b',
      gold: '#c59364',
      white: '#ffffff',
    },
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
  },
  
  // Optimization settings
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'framer-motion',
      'lucide-react',
    ],
    exclude: ['lovable-tagger'],
  },
  
  // Preview settings for production preview
  preview: {
    port: 3000,
    strictPort: true,
  },
  
  // ESBuild optimizations
  esbuild: {
    // Remove console logs in production
    drop: mode === 'production' ? ['console', 'debugger'] : [],
    // Optimize for modern browsers
    target: 'es2020',
  },
}));
