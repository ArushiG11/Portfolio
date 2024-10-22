import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // Ensure this line is included

export default defineConfig({
  plugins: [react()],
      assetsInclude: ['**/*.glb'],
    });