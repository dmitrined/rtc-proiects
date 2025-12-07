import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),],
  build: {
    // Устанавливаем новый лимит, например, 1000 КБ (1MB)
    chunkSizeWarningLimit: 1000, 
  },
   
})
