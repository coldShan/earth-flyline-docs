import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
    outDir: './docs',
    site:"https://javascriptam.github.io",
  integrations: [
    starlight({
      title: 'Earth-flyLine',
      social: {
        github: 'https://github.com/JavaScriptam/earth-flyLine',
      },
      sidebar: [
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
          ],
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
