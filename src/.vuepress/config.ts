import { defineUserConfig } from 'vuepress'
import theme from './theme.js'

export default defineUserConfig({
  base: '/frontendtechnologysharing.github.com/',
  locales: {
    '/': {
      lang: 'en-US',
      title: '',
      description: 'A blog demo for vuepress-theme-hope'
    },
    '/zh/': {
      lang: 'zh-CN',
      title: '',
      description: 'vuepress-theme-hope 的博客演示'
    }
  },

  theme

  // Enable it with pwa
  // shouldPrefetch: false,
})
