import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Относительные пути: сайт работает на GitHub Pages в любом репозитории
  // (https://<имя>.github.io/<репозиторий>/) без правки настроек.
  base: './',
  plugins: [react()],
});
