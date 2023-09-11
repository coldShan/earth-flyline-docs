import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
console.log(process.env.npm_lifecycle_script === 'astro build --vercel')
let config = {
}
if(process.env.npm_lifecycle_script !== 'astro build --vercel'){
  config = {
    site:'https://javascriptam.github.io/earth-flyline-docs/',
    base:'/earth-flyline-docs',
  }
}
// https://astro.build/config
export default defineConfig({
    ...config,
    server:{
      port: 3001
    },
    integrations: [
      starlight({
        title: 'Earth-flyLine',
        social: {
          github: 'https://github.com/JavaScriptam/earth-flyLine',
        },
        sidebar: [
          {
            label: '更新日志',
            link:'/changelog/log/'
          },
          {
            label: '起步',
            items: [
              // Each item here is one entry in the navigation menu.
              { label: '介绍', link: '/guides/start/' },
              { label: '安装', link: '/guides/install/' },
            ],
          },
          {
            label: '文档',
            items: [
              // Each item here is one entry in the navigation menu.
              { label: '示例', link: '/reference/example/' },
              { label: '参数', link: '/reference/property/' },
              { label: '方法', link: '/reference/methods/' },
              { label: '事件', link: '/reference/event/' },
            ],
          },
          {
            label: '致谢',
            link:"/thanks/thanks/"
          },
        ],
        defaultLocale: 'zh',
        locales: {
          // English docs in `src/content/docs/en/`
          // en: {
          //   label: 'English',
          // },
          // Simplified Chinese docs in `src/content/docs/zh/`
          zh: {
            label: '简体中文',
            lang: 'zh-CN',
          },
          // Arabic docs in `src/content/docs/ar/`
          
        },
      }),
    ],

  // Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
  image: { service: { entrypoint: 'astro/assets/services/sharp' } },
});
