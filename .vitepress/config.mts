import { defineConfig } from 'vitepress'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  title: "Petsy Ecommerce",
  description: "Petsy is all about providing pet parents with everything...",
  
  // This is the magic line that fixes the 404!
  srcDir: './docs',

  vite: {
    plugins: [
      tailwindcss(),
    ]
  },

  themeConfig: {
    // ... your existing theme config
  }
})