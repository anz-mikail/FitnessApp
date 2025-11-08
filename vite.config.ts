import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {type ManifestOptions, VitePWA} from "vite-plugin-pwa";


const manifest: Partial<ManifestOptions> | false = {
  "theme_color":"#8936FF",
  "background_color":"#2EC6FE",
  "icons":[
    {
      "purpose":"maskable",
      "sizes":"512x512",
      "src":"icon512_maskable.png",
      "type":"image/png"
    },
    {
      "purpose":"any",
      "sizes":"512x512",
      "src":"icon512_rounded.png",
      "type":"image/png"
    }],
  screenshots: [
    {
      src: "/screenshots/desktop.png",
      type: "image/png",
      sizes: "1913x895",
      form_factor: "wide",
    },
    {
      src: "/screenshots/mobile.png",
      type: "image/png",
      sizes: "401x794",
      form_factor: 'narrow',
    },
  ],
  "orientation":"any",
  "display":"standalone",
  "lang":"ru-RU",
  "name":"Fitness App"};

export default defineConfig({
  plugins: [
      react(),
    VitePWA({
      registerType: "autoUpdate",
      workbox: {globPatterns: ["**/*.{js,ts,tsx, html, css, ico, png, svg}"],},
      manifest : manifest,
    })
  ],
})
