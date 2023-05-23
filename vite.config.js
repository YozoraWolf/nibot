const Path = require('path');
const vuePlugin = require('@vitejs/plugin-vue')
const sass = require('vite-plugin-sass');
import dotenv from 'dotenv';

dotenv.config();

const { defineConfig } = require('vite');

/**
 * https://vitejs.dev/config
 */
const config = defineConfig({
    root: Path.join(__dirname, 'src', 'renderer'),
    publicDir: 'public',
    server: {
        port: 8080,
    },
    open: false,
    build: {
        outDir: Path.join(__dirname, 'build', 'renderer'),
        emptyOutDir: true,
    },
    plugins: [vuePlugin()],

    css: {
        preprocessorOptions: {
          scss: {
            additionalData: `@import "@/variables.scss";`,
          },
        },
      },
    
      resolve: {
        alias: {
          '@': Path.resolve(__dirname, 'src'), // Adjust the path based on your project structure
        },
      },
});

module.exports = config;
