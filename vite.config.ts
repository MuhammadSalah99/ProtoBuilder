import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    watch: {
            // https://rollupjs.org/configuration-options/#watch

    }
  }
})
