import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['15f8-2800-484-976f-bb00-e796-9f73-7f96-83da.ngrok-free.app'],
  },
})
