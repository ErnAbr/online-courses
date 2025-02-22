import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/current-user": {
        target: "http://localhost:9090",
        changeOrigin: true,
      },
      "/users/": {
        target: "http://localhost:9090",
        changeOrigin: true,
      },
      "/books/": {
        target: "http://localhost:9090",
        changeOrigin: true,
      },
    },
  },
});
