// 在 vue.config.js 配置很简单 ， less版本只需把 getSass 改成 getLess 使用

const path = require("path");

const pack = require("./package.json");

const { getSass } = require("@zougt/some-loader-utils");

const ThemeCssExtractWebpackPlugin = require("@zougt/theme-css-extract-webpack-plugin");

const UnpluginVueComponentsWebpack = require("unplugin-vue-components/webpack");
const { ElementUiResolver } = require("unplugin-vue-components/resolvers");

const multipleScopeVars = [
  {
    // 必需
    scopeName: "theme-mauve",
    // path和varsContent选一个
    path: path.resolve("src/theme/mauve-vars.scss"),
    // varsContent:`@--color-primary:#9c26b;`
  },
];

module.exports = {
  // publicPath: `/dynamic-theme-demos/${pack.name}`,
  // 让color模块进过babel-loader转译
  transpileDependencies: ["color"],
  css: {
    loaderOptions: {
      scss: {
        // 给支持implementation的sass-loader添加
        implementation: getSass({
          // getMultipleScopeVars优先于 sassOptions.multipleScopeVars
          getMultipleScopeVars: () => multipleScopeVars,
        }),
      },
    },
  },
  chainWebpack: (config) => {
    // 添加别名，也可以直接 import setCustomTheme from "@zougt/theme-css-extract-webpack-plugin/dist/setCustomTheme.js";
    config.resolve.alias.set(
      "@setCustomTheme",
      "@zougt/theme-css-extract-webpack-plugin/dist/setCustomTheme.js"
    );
    if (process.env.NODE_ENV === "development") {
      // 添加setCustomTheme的热更新loader（仅开发模式需要）
      config.module
        .rule("setCustomTheme-hot-loader")
        .test(/setCustomTheme.js$/)
        .enforce("pre")
        .use("setCustomTheme-hot-loader")
        .loader(
          "@zougt/theme-css-extract-webpack-plugin/dist/hot-loader/index.js"
        );
    }
    //  添加主题插件
    config
      .plugin("ThemeCssExtractWebpackPlugin")
      .use(ThemeCssExtractWebpackPlugin, [
        {
          // 以下是任意主题模式的参数 arbitraryMode:true 有效
          arbitraryMode: true,
          // 默认主题色，与"src/theme/mauve-vars.scss"的@--color-primary主题色相同
          defaultPrimaryColor: "#512da7",
          hueDiffControls: {
            low: 2,
            high: 2,
          },
          multipleScopeVars,
          // 【注意】includeStyleWithColors作用： css中不是由主题色变量生成的颜色，也让它抽取到主题css内，可以提高权重
          includeStyleWithColors: [
            {
              color: "#ffffff",
              // 排除掉样式属性，这里将非背景的白色提升权重
              excludeCssProps: ["background", "background-color"],
              // 此类颜色的是否跟随主题色梯度变化，默认false
              // inGradient: true,
            },
            {
              // element-ui 的非primary颜色，受到了primary的权重问题，这里可以让他们提升权重
              color: [
                // success background-color
                "#67C23A",
                // info background-color
                "#909399",
                // warning background-color
                "#E6A23C",
                // danger background-color
                "#F56C6C",
                // success hover  background-color
                "#85ce61",
                // info hover  background-color
                "#a6a9ad",
                // warning hover  background-color
                "#ebb563",
                // danger hover  background-color
                "#f78989",
              ],
            },
          ],
        },
      ]);
  },
  configureWebpack: {
    plugins: [
      // 添加vue组件库按需
      UnpluginVueComponentsWebpack({
        resolvers: [ElementUiResolver({ importStyle: "sass" })],
      }),
    ],
  },
};
