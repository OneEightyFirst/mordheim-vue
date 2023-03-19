import { fileURLToPath, URL } from 'node:url'
import commonjs from 'vite-plugin-commonjs';

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'



// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [
//     vue(),
//     commonjs()
//   ],
//   resolve: {
//     alias: {
//       '@': fileURLToPath(new URL('./src', import.meta.url))
//     }
//   }
// })

export default defineConfig({
  resolve: {
    alias: {
      process: "process/browser",
      stream: "stream-browserify",
      zlib: "browserify-zlib",
      util: 'util',
      '@': fileURLToPath(new URL('./src', import.meta.url))

    }
  },
  plugins: [
    vue(),
    commonjs()

  ],
  optimizeDeps: {
    exclude: ['buffer']
  }
})