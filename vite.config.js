import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: { // 👈 optimizedeps
    esbuildOptions: {
      target: "esnext", 
      // Node.js global to browser globalThis
      define: {
        global: 'globalThis'
      },
      supported: { 
        bigint: true 
      },
    }
  }, 

  build: {
    target: ["esnext"], // 👈 build.target
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`,     
    }
  }
})
