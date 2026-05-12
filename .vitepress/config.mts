import { defineConfig } from 'vitepress'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  title: "Petsy Ecommerce",
  description: "Petsy is all about providing pet parents with everything...",
  srcDir: './docs',
  
  // ADD THIS EXACT LINE:
  base: '/petsy_landing_page/', 

  vite: {
    plugins: [
      tailwindcss(),
    ]
  },
  themeConfig: {
    // ... your theme config
  }
})