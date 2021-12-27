const path = require("path");
// const webpack = require("webpack");
const pack = require("./package.json");

const UnpluginVueComponentsWebpack = require("unplugin-vue-components/webpack");
const { AntDesignVueResolver } = require("unplugin-vue-components/resolvers");

const { getLess } = require("@zougt/some-loader-utils");

const ThemeCssExtractWebpackPlugin = require("@zougt/theme-css-extract-webpack-plugin");

const multipleScopeVars = [
  {
    // 必需
    scopeName: "theme-default",
    // path 和 varsContent 必选一个
    path: path.resolve("src/theme/theme-default.less"),
    // varsContent参数等效于 path文件的内容
    // varsContent:`@primary-color:${defaultPrimaryColor};`
  },

  {
    scopeName: "theme-red",
    path: path.resolve("src/theme/theme-red.less"),
  },
];
const extract = process.env.NODE_ENV === 'production';
const publicPath = "/";
const publicPath = `/dynamic-theme-demos/${pack.name}`;
const assetsDir = "assets";
const extractCssOutputDir = `${assetsDir}/css`;

module.exports = {
  lintOnSave: false,
  publicPath,
  assetsDir,
  // 让color模块进过babel-loader转译
  transpileDependencies: ["color"],
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true,
        },
        // 给支持implementation的sass-loader添加
        implementation: getLess({
          // getMultipleScopeVars优先于 sassOptions.multipleScopeVars
          getMultipleScopeVars: () => multipleScopeVars,
        }),
      },
    },
  },
  chainWebpack: (config) => {
    config.plugin("define").tap((args) => {
      args[0]["env.themeConfig"] = {
        multipleScopeVars: JSON.stringify(multipleScopeVars),
        extract: JSON.stringify(extract),
        publicPath: JSON.stringify(publicPath),
        extractCssOutputDir: JSON.stringify(extractCssOutputDir),
      };
      return args;
    });
    //  添加主题插件
    config
      .plugin("ThemeCssExtractWebpackPlugin")
      .use(ThemeCssExtractWebpackPlugin, [
        {
          multipleScopeVars,
          extract,
          outputDir: extractCssOutputDir,
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
              color: ["transparent", "none"],
            },
          ],
        },
      ]);
  },
  configureWebpack: {
    plugins: [
      // 添加vue组件库按需
      UnpluginVueComponentsWebpack({
        resolvers: [AntDesignVueResolver({ importStyle: "less" })],
      }),
    ],
  },
};
