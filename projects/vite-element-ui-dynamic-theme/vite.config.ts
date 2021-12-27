import { defineConfig } from "vite";
import {
  themePreprocessorPlugin,
  themePreprocessorHmrPlugin,
} from "@zougt/vite-plugin-theme-preprocessor";
import Components from "unplugin-vue-components/vite";
import { ElementUiResolver } from "unplugin-vue-components/resolvers";
import path from "path";
import { createVuePlugin } from "vite-plugin-vue2";
import pack from './package.json';
import legacy from "@vitejs/plugin-legacy";
// https://vitejs.dev/config/
export default defineConfig({
  base: `/dynamic-theme-demos/${pack.name}`,
  build: {
    outDir: "dist",
  },
  plugins: [
    legacy({
      targets: ["ie >= 11"],
      additionalLegacyPolyfills: ["regenerator-runtime/runtime"],
    }),
    createVuePlugin({}),
    Components({
      resolvers: [ElementUiResolver({ importStyle: "sass" })],
    }),
    // 创建动态主题切换
    themePreprocessorPlugin({
      scss: {
        // 启用任意主题色模式
        arbitraryMode: true,
        // 默认的主题色，用于对其他颜色值形成对比值，通常与 src/theme/theme-vars.less 中的一个主题色相同，也可以不相同，就看是不是你想要的效果
        defaultPrimaryColor: "#512da7",
        // 只需提供一组变量文件
        multipleScopeVars: [
          {
            // 必需
            scopeName: "theme-extract",
            // path 和 varsContent 必选一个
            path: path.resolve("src/theme/theme-vars.scss"),
            // varsContent参数等效于 path文件的内容 ，可以让 defaultPrimaryColor 与 "@primary-color"值只写一遍， varsContent 与 path 选一个使用
            // varsContent:`@primary-color:${defaultPrimaryColor};`
          },
        ],
        // css中不是由主题色变量生成的颜色，也让它抽取到主题css内，可以提高权重
        includeStyleWithColors: [
          {
            color: "#ffffff",
            // 排除掉属性
            excludeCssProps: ["background", "background-color"],
            // 此类颜色的是否跟随主题色梯度变化，默认false
            // inGradient: true,
          },
          {
            color: [
              "#85ce61",
              "#ebb563",
              "#a6a9ad",
              "#f78989",
              "#909399",
              "#67C23A",
              "#E6A23C",
              "#F56C6C",
            ],
          },
        ],
      },
    }),
    // 主题热更新，不得已分开插件，因为需要vite插件顺序enforce
    themePreprocessorHmrPlugin(),
  ],
});
