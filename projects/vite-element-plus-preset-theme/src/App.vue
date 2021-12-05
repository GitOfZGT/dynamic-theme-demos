<script setup>
import { ref, watch, computed, getCurrentInstance } from "vue";
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Forms from "./components/forms.vue";
import { toggleTheme } from "@zougt/vite-plugin-theme-preprocessor/dist/browser-utils";
// const internalInstance = getCurrentInstance();
const primaryColors = {
  "theme-default": "#7546C9",
  "theme-red": "#ed0a5a",
};
const buttonColor = ref(primaryColors["theme-default"]);

const setTheme = (scopeName) => {
  buttonColor.value=primaryColors[scopeName]
  toggleTheme({
    scopeName,
  });
};
</script>

<template>
  <div style="padding: 20px">
    <h1 style="text-align: center">vite + elment-plus 预设主题切换示例</h1>
    <h3 style="text-align: center">
      element-plus 的按钮主题色是内联的，只能设置color属性给button
    </h3>
    <div style="text-align: center">
      有人提了这个问题
      <a href="https://github.com/element-plus/element-plus/issues/4263"
        >https://github.com/element-plus/element-plus/issues/4263</a
      >
    </div>
    <div style="text-align: center; margin-top: 20px">
      <el-button :color="primaryColors['theme-default']" type="primary" plain @click="setTheme('theme-default')"
        >默认</el-button
      >

      <el-button
        type="primary"
        :color="primaryColors['theme-red']"
        plain
        @click="setTheme('theme-red')"
        style="margin-left: 20px"
        >红色</el-button
      >
    </div>
    <h3 class="sub-title">
      这行文字是非组件库的颜色切换演示，之下是组件库的颜色切换
    </h3>
    <el-row style="margin-bottom:20px;">
      <el-button>Default</el-button>
      <el-button :color="buttonColor" type="primary">设置了color</el-button>
      <el-button  type="primary">没有设置color</el-button>
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
//  通过@use 取element-plus默认变量来用，
@use "element-plus/theme-chalk/src/common/var.scss" as vars;
.sub-title {
  margin-top: 20px;
  text-align: center;
  // 用一个固定颜色 与  主题色 混合之后的颜色
  color: mix(#b6b450, vars.$color-primary, 50%);
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
