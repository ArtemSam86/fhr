import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import svgLoader from 'vite-svg-loader';
// import { NodePackageImporter } from 'sass-embedded';

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), svgLoader()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // importers: [new NodePackageImporter()],
        // additionalData: '@use "@/assets/styles/index.scss";',
        additionalData: "@use '@/assets/styles/index.scss' as *;",
      },
    },
  },
});
