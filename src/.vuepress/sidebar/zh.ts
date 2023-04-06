/*
 * @Author: wy wang.yong@easttrans.cn
 * @Date: 2023-03-07 12:46:22
 * @LastEditors: wy wang.yong@easttrans.cn
 * @LastEditTime: 2023-04-06 09:26:19
 * @FilePath: \frontendtechnologysharing.github.com\src\.vuepress\sidebar\zh.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
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
    {
      text: 'Css',
      icon: 'css',
      link: '/zh/css/',
      prefix: '/zh/css/',
      children: [{ text: 'flex', icon: 'css', link: 'flex' }]
    },
    { text: 'TS', icon: 'typescript', link: '/zh/TS/' },
    { text: 'Nodejs', icon: 'nodejs', link: '/zh/nodejs/' },
    { text: 'uniapp', icon: 'app4', link: '/zh/uniapp/' },
    {
      text: '日常笔记',
      icon: 'richangguanli',
      link: '/zh/dailyAccumulation/',
      prefix: '/zh/dailyAccumulation/',
      children: [{ text: '进阶面试题', icon: 'richangguanli', link: '2023Web前端进阶面试题' }]
    }
  ]
})