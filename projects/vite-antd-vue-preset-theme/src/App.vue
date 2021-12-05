<script setup>
import { ref, watch, computed } from "vue";
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Forms from "./components/forms.vue";
import Table from "./components/table.vue";
import Slider from "./components/slider.vue";
import TimeLine from "./components/timeLine.vue";
import { toggleTheme } from "@zougt/vite-plugin-theme-preprocessor/dist/browser-utils";
</script>

<template>
  <div style="padding: 20px">
    <h1 style="text-align: center">vite + ant-design-vue 预设主题切换示例</h1>
    <div style="text-align: center">
      <a-button @click="toggleTheme({ scopeName: 'theme-default' })"
        >默认主题</a-button
      >
      <a-button
        @click="toggleTheme({ scopeName: 'theme-dark' })"
        style="margin-left: 20px"
        >暗黑主题</a-button
      >
      <a-button
        @click="toggleTheme({ scopeName: 'theme-red' })"
        style="margin-left: 20px"
        >红色主题</a-button
      >
      <a-button
        @click="toggleTheme({ scopeName: 'theme-red-dark' })"
        style="margin-left: 20px"
        >暗黑红色主题</a-button
      >
    </div>
    <h3 class="sub-title">
      这行文字是非组件库的颜色切换演示，之下是组件库的颜色切换
    </h3>
    <a-divider />
    <a-row :gutter="30">
      <a-col :span="12"
        ><a-typography-title>Buttons</a-typography-title>
        <a-button type="primary">Primary Button</a-button>
        <a-button>Default Button</a-button>
        <a-button type="dashed">Dashed Button</a-button>
        <a-button type="text">Text Button</a-button>
        <a-button type="link">Link Button</a-button>
        <a-divider />
        <a-typography-title>Alert</a-typography-title>
        <a-alert style="margin-bottom: 10px" message="success" type="success" />
        <a-alert style="margin-bottom: 10px" message="info" type="info" />
        <a-alert style="margin-bottom: 10px" message="warning" type="warning" />
        <a-alert message="error" type="error" />
        <a-divider />

        <a-divider
      /></a-col>
      <a-col :span="12"
        ><a-typography-title>Slider</a-typography-title>
        <Slider />
        <a-divider />
        <a-typography-title>Forms</a-typography-title>

        <Forms />
        <a-divider />
        <a-typography-title>Table</a-typography-title>
        <Table />

        <a-typography-title>TimeLine</a-typography-title>
        <TimeLine
      /></a-col>
    </a-row>
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

<style lang="less" scoped>
@import "ant-design-vue/lib/style/themes/index.less";
.sub-title {
  margin-top: 20px;
  text-align: center;
  // 用一个固定颜色 与  主题色 混合之后的颜色
  color: mix(#c017c0, @body-background, 50%);
}

.my-plugins {
  padding: 10px 20px;
  position: fixed;
  z-index: 9;
  top: 0px;
  left: 0px;
  background-color: @body-background;
  a {
    display: block;
  }
  h4 {
    margin-top: 10px;
  }
}
</style>
