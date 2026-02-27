import { defineConfig } from 'vite'
import { createHash } from 'crypto';
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// This fixes the Vite 7 / Node 20 compatibility bug
if (!globalThis.crypto.hash) {
  globalThis.crypto.hash = (algorithm, data) => {
    return createHash(algorithm).update(data).digest();
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss(),
  ],
})
