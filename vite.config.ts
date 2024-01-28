import { defineConfig } from 'vite';
import path from 'node:path';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import ElementPlus from 'unplugin-element-plus/vite'
import UnoCSS from 'unocss/vite'
import IconsResolver from "unplugin-icons/resolver";
import Icons from "unplugin-icons/vite";
// https://vitejs.dev/config/
const pathSrc = path.resolve(__dirname, "src");
export default defineConfig({
    plugins: [
        vue(),
           // 自动注入
    AutoImport({
      dirs: ["src/components/", "src/views/", "src/plugins/"],
      // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
      imports: ["vue", "vue-router"],
      // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
      resolvers: [
        ElementPlusResolver({
          importStyle: "sass",
        }),
        // 自动导入图标组件
        IconsResolver({
          prefix: "Icon",
        }),
      ],

      dts: path.resolve(pathSrc, "auto-imports.d.ts"),
    }),
    Components({
      resolvers: [
        // 自动注册图标组件
        IconsResolver({
          enabledCollections: ["el"],
        }),
        // 自动导入 Element Plus 组件
        ElementPlusResolver({
          importStyle: "sass",
        }),
      ],
      dts: path.resolve(pathSrc, "components.d.ts"),
    }),
    UnoCSS(),
            // 按需定制主题配置
    ElementPlus({
      useSource: true,
    }),
      Icons({
      autoInstall: true,
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
