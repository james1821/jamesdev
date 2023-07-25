import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default ({ mode }) => {
  return defineConfig({
    plugins: [
      react(),
    ],
    build: {
      rollupOptions: {
        external: ['react-type-animation'],
      },
    },
  });
};
