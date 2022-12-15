import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import autoprefixer from "autoprefixer"
import postcssNested from "postcss-nested"
import postcssScss from "postcss-scss"

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://muniox.github.io/test/',
  css: {
    devSourcemap: true,
    postcss: {
      syntax: postcssScss,
      plugins: [
          autoprefixer({}),
          postcssNested({}),
      ]
    }
  },
  plugins: [
    react()
  ]
})
