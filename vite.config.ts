import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {type ManifestOptions } from "vite-plugin-pwa";
import { VitePWA } from "vite-plugin-pwa";


const manifest: Partial<ManifestOptions> | false = {
  "theme_color":"#19191a",
    "background_color":"#7fb1c3",
    "icons":[{
        "purpose":"maskable",
        "sizes":"512x512",
        "src":"icon512_maskable.png",
        "type":"image/png"
    },{
        "purpose":"any",
        "sizes":"512x512",
        "src":"icon512_rounded.png",
        "type":"image/png"
    }],
      "orientation":"any",
      "display":"fullscreen",
      "lang":"ru-RU",
      "name":"Fitness grozny",
      "start_url":"/FitnessApp/index.html",
      "scope":"https://anz-mikail.github.io"
  }

export default defineConfig({
  plugins: [
      react(),
    VitePWA({
      registerType: "autoUpdate",
      workbox: {globPatterns: ["**/*.{js,ts,tsx, html, css, ico, png, svg}"],},
      manifest: manifest,
    })
  ],
  base: "/FitnessApp"
})
