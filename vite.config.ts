import { defineConfig } from "vite"
import { svelte } from "@sveltejs/vite-plugin-svelte";
import sveltePreprocess from "svelte-preprocess";
import { generateSW } from "rollup-plugin-workbox";
import { VitePluginSitemap } from "@tormak/vite-plugin-sitemap";

export default defineConfig({
  plugins: [
    svelte({
      preprocess: [
        sveltePreprocess({
          typescript: true,
        }),
      ],
    }),
    // VitePluginSitemap({
    //   baseUrl: "https://localhost:8080",
    //   contentBase: "public",
    //   routes: [
    //     { path: "/", name: "About" },
    //     { path: "/events", name: "Events" },
    //     { path: "/officers", name: "Officers" },
    //     { path: "/contact", name: "Contact" }
    //   ],
    //   urlGenHook: async (config: { routes: any; }) => {
    //     return config.routes;
    //   }
    // }),
    generateSW({
      swDest: "./dist/service-worker.js",
      globDirectory: "./dist",
      globPatterns: [
        "**/*.{html,json,js,css}",
      ],
      skipWaiting: true,
      clientsClaim: true,
      runtimeCaching: [
        {
          urlPattern: /\.(?:png|jpg|jpeg|svg|webp)$/,
          handler: "NetworkFirst",
          options: {
            cacheName: "images",
            expiration: {
              maxEntries: 10,
            },
          },
        },
        {
          urlPattern: /\.(?:js|css)$/,
          handler: "NetworkFirst",
          options: {
            cacheName: "assets",
            expiration: {
              maxEntries: 10,
            },
          },
        },
        {
          urlPattern: /\.(?:html)$/,
          handler: "NetworkFirst",
          options: {
            cacheName: "pages",
            expiration: {
              maxEntries: 10,
            },
          },
        }
      ],
    })
  ],
  clearScreen: false,
  server: {
    port: 1420,
    strictPort: true
  }
});
