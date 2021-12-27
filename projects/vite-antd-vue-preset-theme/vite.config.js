import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { themePreprocessorPlugin } from "@zougt/vite-plugin-theme-preprocessor";
import Components from "unplugin-vue-components/vite";
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";
import path from "path";
import pack from "./package.json";
// https://vitejs.dev/config/
export default defineConfig({
  base: `/dynamic-theme-demos/${pack.name}`,
  server:{
    port:3300
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  optimizeDeps: {
    //【注意】 排除 import { toggleTheme } from "@zougt/vite-plugin-theme-preprocessor/dist/browser-utils"; 在vite的缓存依赖
    exclude: ["@zougt/vite-plugin-theme-preprocessor/dist/browser-utils"],
  },
  plugins: [
    vue(),
    Components({
      resolvers: [AntDesignVueResolver({ importStyle: "less" })],
    }),
    themePreprocessorPlugin({
      less: {
        // 是否启用任意主题色模式，这里不启用
        arbitraryMode: false,
        // 提供多组变量文件
        multipleScopeVars: [
          {
            // 必需
            scopeName: "theme-default",
            // path 和 varsContent 必选一个
            path: path.resolve("src/theme/theme-default.less"),
            // varsContent参数等效于 path文件的内容
            // varsContent:`@primary-color:${defaultPrimaryColor};`
          },
          {
            scopeName: "theme-dark",
            path: path.resolve("src/theme/theme-dark.less"),
          },
          {
            scopeName: "theme-red",
            path: path.resolve("src/theme/theme-red.less"),
          },
          {
            scopeName: "theme-red-dark",
            path: path.resolve("src/theme/theme-red-dark.less"),
          },
        ],
        // 【注意】includeStyleWithColors作用： css中不是由主题色变量生成的颜色，也让它抽取到主题css内，可以提高权重
        includeStyleWithColors: [
          {
            // color也可以是array，如 ["#ffffff","#000"]
            color: "#ffffff",
            // 排除属性，如 不提取背景色的#ffffff
            // excludeCssProps:["background","background-color"]
            // 排除选择器，如 不提取以下选择器的 #ffffff
            // excludeSelectors: [
            //   ".ant-btn-link:hover, .ant-btn-link:focus, .ant-btn-link:active",
            // ],
          },
          {
            // @zougt/some-loader-utils v1.4.2 支持 "transparent" 、"none" 等等
            color: ["transparent", "none"],
            // excludeSelectors: [
            //   ".ant-btn-link:hover, .ant-btn-link:focus, .ant-btn-link:active",
            // ],
          },
        ],
        // // 默认取 multipleScopeVars[0].scopeName
        // defaultScopeName: "",
        // 在生产模式是否抽取独立的主题css文件，extract为true以下属性有效
        extract: false,
        // // 独立主题css文件的输出路径，默认取 viteConfig.build.assetsDir 相对于 (viteConfig.build.outDir)
        // outputDir: "",
        // // 会选取defaultScopeName对应的主题css文件在html添加link
        // themeLinkTagId: "theme-link-tag",
        // // "head"||"head-prepend" || "body" ||"body-prepend"
        // themeLinkTagInjectTo: "head",
        // // 是否对抽取的css文件内对应scopeName的权重类名移除
        // removeCssScopeName: false,
      },
    }),
  ],
});
