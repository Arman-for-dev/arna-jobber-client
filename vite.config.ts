import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  "root":'.',
  plugins: [
    react({
      include: '**/*.tsx'
    }),
    tailwindcss(),
    tsconfigPaths()
  ],
  resolve:{
    alias:{
      src: '/src'
    }
  },
  server:{
    port: 3000
  }
})
