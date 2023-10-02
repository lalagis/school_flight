import react from '@astrojs/react'
import { defineConfig } from 'astro/config'
import million from 'million/compiler'
import UnoCSS from 'unocss/astro'
import cesium from 'vite-plugin-cesium'

// https://astro.build/config
export default defineConfig({
  site: 'https://lalagis.github.io',
  base: '/school_flight',

  vite: {
    plugins: [
      million.vite({
        mode: 'react',
        server: true,
        auto: true,
      }),
      cesium(),
    ],

    test: {
      globals: true,
      environment: 'jsdom',
      coverage: {
        reporter: ['text', 'json', 'html'],
      },
    },
  },
  integrations: [react(), UnoCSS({ injectReset: true })],
})
