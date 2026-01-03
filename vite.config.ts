import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      png: {
        quality: 80,
      },
      jpg: {
        quality: 80,
      },
      svg: {
        quality: 80,
      },
      webp: {
        quality: 80,
      },
    }),
  ],
  server: {
    port: 5173,
    allowedHosts: ["unprotrusible-alison-nonlyrically.ngrok-free.dev"],
  },
});
