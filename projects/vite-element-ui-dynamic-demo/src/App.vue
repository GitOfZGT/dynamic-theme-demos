<script>
import Color from "color";
import setCustomTheme from "@setCustomTheme";
export default {
  data() {
    return {
      primaryColor: "#512da7",
    };
  },
  watch: {
    primaryColor() {
      setCustomTheme({
        Color,
        primaryColor: this.primaryColor,
      });
    },
  },
};
</script>
<template>
  <div style="padding: 20px">
    <h1 style="text-align: center">vite + element-ui 动态主题切换示例</h1>
    <div style="text-align: center">
      <el-color-picker v-model="primaryColor"></el-color-picker>
    </div>
    <h3 class="sub-title">
      这行文字是非组件库的颜色切换演示，之下是组件库的颜色切换
    </h3>
    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>

    <el-row>
      <el-button plain>朴素按钮</el-button>
      <el-button type="primary" plain>主要按钮</el-button>
      <el-button type="success" plain>成功按钮</el-button>
      <el-button type="info" plain>信息按钮</el-button>
      <el-button type="warning" plain>警告按钮</el-button>
      <el-button type="danger" plain>危险按钮</el-button>
    </el-row>

    <el-row>
      <el-button round>圆角按钮</el-button>
      <el-button type="primary" round>主要按钮</el-button>
      <el-button type="success" round>成功按钮</el-button>
      <el-button type="info" round>信息按钮</el-button>
      <el-button type="warning" round>警告按钮</el-button>
      <el-button type="danger" round>危险按钮</el-button>
    </el-row>

    <el-row>
      <el-button icon="el-icon-search" circle></el-button>
      <el-button type="primary" icon="el-icon-edit" circle></el-button>
      <el-button type="success" icon="el-icon-check" circle></el-button>
      <el-button type="info" icon="el-icon-message" circle></el-button>
      <el-button type="warning" icon="el-icon-star-off" circle></el-button>
      <el-button type="danger" icon="el-icon-delete" circle></el-button>
    </el-row>
    <el-row>
      <el-button disabled>默认按钮</el-button>
      <el-button type="primary" disabled>主要按钮</el-button>
      <el-button type="success" disabled>成功按钮</el-button>
      <el-button type="info" disabled>信息按钮</el-button>
      <el-button type="warning" disabled>警告按钮</el-button>
      <el-button type="danger" disabled>危险按钮</el-button>
    </el-row>

    <el-row>
      <el-button plain disabled>朴素按钮</el-button>
      <el-button type="primary" plain disabled>主要按钮</el-button>
      <el-button type="success" plain disabled>成功按钮</el-button>
      <el-button type="info" plain disabled>信息按钮</el-button>
      <el-button type="warning" plain disabled>警告按钮</el-button>
      <el-button type="danger" plain disabled>危险按钮</el-button>
    </el-row>
    <div class="my-plugins">
      使用成本低、适用于任何UI框架（基于less/sass）、不依赖Css3
      vars、兼容IE9+（待验证）
      <h4>webpack版本插件支持(未发布)</h4>
      <a href="https://github.com/GitOfZGT/some-loader-utils" target="_blank"
        >@zougt/some-loader-utils</a
      >
      <a
        href="https://github.com/GitOfZGT/theme-css-extract-webpack-plugin"
        target="_blank"
        >@zougt/theme-css-extract-webpack-plugin</a
      >
      <h4>vite版本插件支持(测试版v1.4.0-beta.6)</h4>
      <a
        href="https://github.com/GitOfZGT/vite-plugin-theme-preprocessor"
        target="_blank"
        >@zougt/vite-plugin-theme-preprocessor</a
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
/** 注意：@import 默认的组件库变量文件，而不能是 src/theme/theme-vars.less */
@import "element-ui/packages/theme-chalk/src/common/var.scss";
.sub-title {
  margin-bottom: 120px;
  margin-top: 20px;
  text-align: center;
  // 用一个固定颜色 与  主题色 混合之后的颜色
  color: mix(#999999, $--color-primary, 90%);
}

.my-plugins {
  max-width: 450px;
  padding: 10px 20px;
  position: fixed;
  z-index: 9;
  top: 0px;
  left: 0px;
  background-color: #ffffff;
  a {
    display: block;
  }
  h4 {
    margin-top: 10px;
  }
}
</style>
