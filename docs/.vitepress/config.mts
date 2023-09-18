import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: '준영이의 해피해피 기술블로그',
  description: 'A VitePress Site',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
    ],

    sidebar: [
      {
        // text: '가이드 문서',
        text: '가이드 문서', link: '/guide/' ,
        items: [
          { text: 'How To Use', link: '/guide/how-to-use' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/jun0108' },
    ],
  },
})
