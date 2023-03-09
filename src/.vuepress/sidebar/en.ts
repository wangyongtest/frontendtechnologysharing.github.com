import { sidebar } from 'vuepress-theme-hope'

export const enSidebar = sidebar({
  '/en/': [
    { text: 'Vue', icon: 'vue', prefix: 'en/', link: '/vue/', children: 'structure' },
    { text: 'React', icon: 'react', link: '/en/react/' },
    { text: 'Javascript', icon: 'javascript', link: '/en/javascript/' },
    { text: 'TS', icon: 'typescript', link: '/en/TS/' },
    { text: 'Nodejs', icon: 'nodejs', link: '/en/nodejs/' },
    { text: 'uniapp', icon: 'app4', link: '/en/uniapp/' },
    { text: 'dailyAccumulation', icon: 'richangguanli', link: '/en/dailyAccumulation/' }
  ]
})
