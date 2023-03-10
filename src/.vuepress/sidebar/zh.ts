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
    {
      text: 'Vue',
      icon: 'vuejs',
      link: '/zh/vue/',
      prefix: '/zh/vue/',
      children: [
        { text: 'ref', icon: 'vuejs', link: 'ref' },
        { text: 'reactive', icon: 'vuejs', link: 'reactive' }
      ]
    },
    { text: 'React', icon: 'react', link: '/zh/react/' },
    {
      text: 'Javascript',
      icon: 'javascript',
      link: '/zh/javascript/',
      prefix: '/zh/javascript/',
      children: [
        { text: 'Proxy', icon: 'javascript', link: 'proxy' },
        { text: 'PdfPreview', icon: 'javascript', link: 'PDF-Preview' }
      ]
    },
    { text: 'TS', icon: 'typescript', link: '/zh/TS/' },
    { text: 'Nodejs', icon: 'nodejs', link: '/zh/nodejs/' },
    { text: 'uniapp', icon: 'app4', link: '/zh/uniapp/' },
    { text: '日常笔记', icon: 'richangguanli', link: '/zh/dailyAccumulation/' }
  ]
})
