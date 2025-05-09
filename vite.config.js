import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['2b29-2800-484-976f-bb00-acc1-bb52-d403-9396.ngrok-free.app'],
  },
})
