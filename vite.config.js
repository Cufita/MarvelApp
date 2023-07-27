import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    new webpack.DefinePlugin({
      process: { env: {} },
    }),
    react(),
  ],
});
