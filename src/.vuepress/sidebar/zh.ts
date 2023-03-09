import { sidebar } from 'vuepress-theme-hope'

export const zhSidebar = sidebar({
  '/zh/': [
    // {
    //   text: '如何使用',
    //   icon: 'creative',
    //   prefix: 'demo/',
    //   link: 'demo/',
    //   children: 'structure'
    // },
    { text: 'Vue', icon: 'vue', link: '/en/vue/' },
    { text: 'React', icon: 'react', link: '/en/react/' },
    { text: 'Javascript', icon: 'javascript', link: '/en/javascript/' },
    { text: 'TS', icon: 'typescript', link: '/en/TS/' },
    { text: 'Nodejs', icon: 'nodejs', link: '/en/nodejs/' },
    { text: 'uniapp', icon: 'app4', link: '/en/uniapp/' },
    { text: '日常笔记', icon: 'richangguanli', link: '/en/dailyAccumulation/' }
  ]
})
