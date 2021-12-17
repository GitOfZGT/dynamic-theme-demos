const path = require("path");

// const pack = require("./package.json");

const { getLess } = require("@zougt/some-loader-utils");

const ThemeCssExtractWebpackPlugin = require("@zougt/theme-css-extract-webpack-plugin");

const multipleScopeVars = [
  {
    // 必需
    scopeName: "theme-mauve",
    // path和varsContent选一个
    path: path.resolve("src/theme/mauve-vars.less"),
    // varsContent:`@--color-primary:#9c26b;`
  },
];

const customThemeOutputPath = path.resolve("src/themeMethods.js");
function getThemeConfig(isEnvDevelopment) {
  return {
    resolve: {
      alias: {
        "@setCustomTheme": isEnvDevelopment?customThemeOutputPath: "@zougt/theme-css-extract-webpack-plugin/dist/setCustomTheme.js",
      },
    },
    lessLoaderOptions: {
      lessOptions: {
        javascriptEnabled: true,
      },
      // 给支持implementation的sass-loader添加
      implementation: getLess({
        // getMultipleScopeVars优先于 sassOptions.multipleScopeVars
        getMultipleScopeVars: () => multipleScopeVars,
      }),
    },
    module: {
      rules: [
        {
          test: /themeMethods\.js$/,
          enforce: "post",
          loader: require.resolve(
            "@zougt/theme-css-extract-webpack-plugin/dist/hot-loader/index.js"
          ),
        },
      ],
    },
    plugins: [
      new ThemeCssExtractWebpackPlugin({
        // 以下是任意主题模式的参数 arbitraryMode:true 有效
        arbitraryMode: true,
        // 默认主题色，与"src/theme/mauve-vars.scss"的@--color-primary主题色相同
        defaultPrimaryColor: "#512da7",
        hueDiffControls: {
          low: 2,
          high: 2,
        },
        customThemeOutputPath: isEnvDevelopment ? customThemeOutputPath : "",
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
        ],
      }),
    ],
  };
}
module.exports = getThemeConfig;
