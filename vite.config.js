import { defineConfig } from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  root: "src",
  build: {
    outDir: "../dist",
    rollupOptions: {
      input: "src/index.html",
    },
  },
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: "manifest.json",
          dest: "../dist",
        },
      ],
    }),
  ],
  server: {
    open: "/index.html",
  },
});
