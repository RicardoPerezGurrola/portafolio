import { defineConfig } from 'vite';
import react from "@vitejs/plugin-react";
// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    base: '/portafolio/', // ¡Reemplaza con el nombre real de tu repo!
});
