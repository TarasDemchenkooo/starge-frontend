import { defineConfig } from 'vite'
import { nodePolyfills } from 'vite-plugin-node-polyfills'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  plugins: [nodePolyfills({
    globals: {
      Buffer: true
    }
  }), react(), svgr()],
})
