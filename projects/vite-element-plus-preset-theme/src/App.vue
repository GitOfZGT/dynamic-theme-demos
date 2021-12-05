<script setup>
import { ref, watch, computed } from "vue";
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Forms from "./components/forms.vue";
import { toggleTheme } from "@zougt/vite-plugin-theme-preprocessor/dist/browser-utils";
</script>

<template>
  <div style="padding: 20px">
    <h1 style="text-align: center">vite + elment-plus 预设主题切换示例</h1>
    <h3 style="text-align: center">
      element-plus 的按钮主题色时内联的，这里没法切换颜色，后续研究怎么搞
    </h3>
    <div style="text-align: center">
      <el-button
        type="primary"
        plain
        @click="toggleTheme({ scopeName: 'theme-default' })"
        >默认</el-button
      >

      <el-button
        type="primary"
        plain
        @click="toggleTheme({ scopeName: 'theme-red' })"
        style="margin-left: 20px"
        >红色</el-button
      >
    </div>
    <h3 class="sub-title">
      这行文字是非组件库的颜色切换演示，之下是组件库的颜色切换
    </h3>
    <el-row>
      <el-button>Default</el-button>
      <el-button type="primary">Primary</el-button>
      <el-button>中文</el-button>
    </el-row>
    <Forms />
    <div class="my-plugins">
      <h4>webpack版本插件支持</h4>
      <a href="https://github.com/GitOfZGT/some-loader-utils" target="_blank"
        >@zougt/some-loader-utils</a
      >
      <a
        href="https://github.com/GitOfZGT/theme-css-extract-webpack-plugin"
        target="_blank"
        >@zougt/theme-css-extract-webpack-plugin</a
      >
      <h4>vite版本插件支持</h4>
      <a
        href="https://github.com/GitOfZGT/vite-plugin-theme-preprocessor"
        target="_blank"
        >@zougt/vite-plugin-theme-preprocessor</a
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./theme/theme-default.scss";
.sub-title {
  margin-top: 20px;
  text-align: center;
  // 用一个固定颜色 与  主题色 混合之后的颜色
  color: mix(#b6b450, $color-primary, 50%);
}

.my-plugins {
  padding: 10px 20px;
  position: fixed;
  z-index: 9;
  top: 0px;
  left: 0px;
  background-color: #fff;
  a {
    display: block;
  }
  h4 {
    margin-top: 10px;
  }
}
</style>
