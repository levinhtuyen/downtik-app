import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  devtools: {
    enabled: true,
  vscode: {
    reuseExistingServer: true
  }},
  app: {
    head: {
      title: 'downtik.app',
      link: [{ rel: 'icon', type: 'image/x-icon', href: './favicon.ico' }],
      htmlAttrs: {
        lang: 'vi'
      },
    },
    
  },
  ssr: true,
  routeRules: {
    '/': { 
      ssr: true,
      headers: {
        'Cache-Control': 'no-cache'
      }},
  },
  components: true, 
  typescript: {
    strict: true,
    shim: false,
  },
  nitro: {
    compressPublicAssets: {
      gzip: true,
      brotli: false
    },
    // routeRules: {
    //   "/img/**": { headers: { 'cache-control': `no-cache` } },
    //   "/_nuxt/**": { headers: { 'cache-control': `no-cache` } },
    // },
    publicAssets: [
      {
        baseURL: 'public',
        dir: 'public',
        maxAge: 60 * 60 * 24 * 30 // 30 days
      },
      {
        baseURL: 'images',
        dir: 'public/images',
        maxAge: 60 * 60 * 24 * 30 // 30 days
      },
      {
        baseURL: 'fonts',
        dir: 'public/fonts',
        maxAge: 60 * 60 * 24 * 30 // 30 days
      }
    ],
    minify: true
  },
  modules: [
    'nuxt-windicss',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    'nuxt-gtag',
    'nuxt-delay-hydration',
    '@nuxtjs/critters',
    '@nuxtjs/web-vitals',
    '@nuxt/devtools',
    '@element-plus/nuxt',
    '@nuxtjs/i18n',
    // '@nuxtjs/sitemap',
    // 'nuxt-schema-org',
  ],
  gtag: {
    id: 'G-NBHL9FFCSE'
  },
  webVitals: {
    provider: 'log',
    debug: true, // debug enable metrics reporting on dev environments
    disabled: false
  },
  critters: {
    // Options passed directly to critters: https://github.com/GoogleChromeLabs/critters#critters-2
    config: {
      preload: 'swap',
    },
  },
  i18n: {
    vueI18n: './i18n.config.ts' // if you are using custom path, default 
  },
  delayHydration: {
    // enables nuxt-delay-hydration in dev mode for testing
    mode: 'init',
    replayClick: true,
    include: [
      '/'
    ],
  },
  vueuse: {
    ssrHandlers: true,
  },
  build: {
    transpile: [
    ],
  },
  vite: {
    plugins: [
      
    ],
  }
})
