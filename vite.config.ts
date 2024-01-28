import { defineConfig } from 'vite';
import path from 'node:path';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import ElementPlus from 'unplugin-element-plus/vite'
import UnoCSS from 'unocss/vite'
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        AutoImport({
            resolvers: [ElementPlusResolver()],
        }),
        Components({
          resolvers: [ElementPlusResolver({
              importStyle: 'sass',
            })],
        }),
    UnoCSS(),
            // 按需定制主题配置
    ElementPlus({
      useSource: true,
    }),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
      css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @use "@/assets/styles/var.scss" as *;   
        @use "@/assets/styles/element/index.scss" as light;  
        @use "@/assets/styles/element/dark.scss" as dark;  
        `,
      },
    },
  },
});
