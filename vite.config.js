import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/React-MyPortfolio/', // Set this to your repository name
  plugins: [react()],
});
