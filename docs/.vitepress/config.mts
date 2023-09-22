import { defineConfig } from 'vitepress'
import AutoImport from 'unplugin-auto-import/vite'

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
  vite: {
    plugins: [
      AutoImport({
        imports: [
          'vue',
        ],
      })
    ],
    server: {
      hmr: {overlay:false}
    },
    css: {
      preprocessorOptions: {
        scss: {
         // 전역 SCSS 파일 경로를 지정합니다.
          additionalData: '@import "docs/styles/_variables.scss";',
        },
      }
    }
  }
})
