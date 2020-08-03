
export default {
  mode: 'universal',
  target: 'static',
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    '@/assets/scss/main.scss'
  ],
  components: true,
  plugins: [
    '~/plugins/images',
    '~/plugins/time'
  ],
  buildModules: [
    '@nuxt/components'
  ],
  modules: [
    '@nuxt/content',
    '@nuxtjs/style-resources',
    '@nuxtjs/svg-sprite',
    'nuxt-responsive-loader'
  ],
  hooks: {
    'content:file:beforeInsert': (document) => {
      if (document.extension === '.md') {
        const { time } = require('reading-time')(document.text)

        document.readingTime = time
      }
    }
  },
  styleResources: {
    scss: [
      '@/node_modules/include-media/dist/_include-media.scss',
      './assets/scss/base/_variables.scss'
    ]
  },
  responsiveLoader: {
    name: 'img/[name]-[width].[ext]',
    quality: 65,
    sizes: [480, 640, 1280, 1920]
  },
  build: {}
}
