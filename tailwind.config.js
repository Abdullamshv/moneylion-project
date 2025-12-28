import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace 'abdulla-portfolio' with your ACTUAL repo name if different
export default defineConfig({
  plugins: [react()],
  base: "/moneylion-project/", 
})