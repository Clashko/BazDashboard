import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import react from "@vitejs/plugin-react-swc";
import autoprefixer from "autoprefixer";
import tailwindcss from "tailwindcss";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: "script",
      includeAssets: [
        "assets/favicon.ico",
        "assets/apple-touch-icon.png",
        "assets/maskable-icon.png",
        "assets/apple-touch-icon-57x57.png",
        "assets/apple-touch-icon-72x72.png",
        "assets/apple-touch-icon-76x76.png",
        "assets/apple-touch-icon-114x114.png",
        "assets/apple-touch-icon-120x120.png",
        "assets/apple-touch-icon-144x144.png",
        "assets/apple-touch-icon-152x152.png",
        "assets/apple-touch-icon-180x180.png",
      ],
      manifest: {
        name: "BAZ Dashboard",
        short_name: "BAZD",
        description: "BAZ API dashboard",
        theme_color: "#FFFFFF",
        lang: "ru",
        icons: [
          {
            src: "assets/apple-touch-icon-57x57.png",
            sizes: "57x57",
            type: "image/png",
          },
          {
            src: "assets/apple-touch-icon-72x72.png",
            sizes: "72x72",
            type: "image/png",
          },
          {
            src: "assets/apple-touch-icon-76x76.png",
            sizes: "76x76",
            type: "image/png",
          },
          {
            src: "assets/apple-touch-icon-114x114.png",
            sizes: "114x114",
            type: "image/png",
          },
          {
            src: "assets/apple-touch-icon-120x120.png",
            sizes: "120x120",
            type: "image/png",
          },
          {
            src: "assets/apple-touch-icon-144x144.png",
            sizes: "144x144",
            type: "image/png",
          },
          {
            src: "assets/apple-touch-icon-152x152.png",
            sizes: "152x152",
            type: "image/png",
          },
          {
            src: "assets/apple-touch-icon-180x180.png",
            sizes: "180x180",
            type: "image/png",
          },
        ],
      },
      workbox: {
        globPatterns: ["**/*.{js, ts, css, html, svg, png, ico}"],
        cleanupOutdatedCaches: true,
        clientsClaim: true,
        maximumFileSizeToCacheInBytes: 3000000,
      },
      devOptions: {
        enabled: true,
        navigateFallback: "index.html",
        suppressWarnings: true,
        type: "module",
      },
    }),
  ],
  css: {
    postcss: {
      plugins: [tailwindcss(), autoprefixer()]
    }
  }
});
