import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig({
  plugins: [react(),
  cssInjectedByJsPlugin(),
  ViteImageOptimizer({
    png: {
      quality: 80,
    },
    jpeg: {
      quality: 75,
    },
    webp: {
      quality: 75,
    },
  }),
  ],
  base: process.env.NODE_ENV === "production" ? "/gis/" : "/",
  build: {
    chunkSizeWarningLimit: 1000,
    cssMinify: true,
    cssCodeSplit: false,
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: undefined,
        assetFileNames: (assetInfo) => {
          const names = assetInfo.names || [];
          const isFontFile = names.some(name =>
            /\.(woff2?|ttf|otf|eot)$/.test(name)
          );

          if (isFontFile) {
            // Сохраняем шрифты в определенной структуре
            return 'fonts/[name][extname]';
          }

          return 'assets/[name]-[hash][extname]';
        }
      },
    },
  },
  optimizeDeps: {
    exclude: ['js-big-decimal']
  }
})
