<script setup>
import { ref, watch, computed, getCurrentInstance } from "vue";
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { toggleTheme } from "@zougt/vite-plugin-theme-preprocessor/dist/browser-utils";
// const internalInstance = getCurrentInstance();

const multipleScopeVars = [
  {
    scopeName: "theme-default",
    primaryColor: "#7546C9",
  },
  {
    scopeName: "theme-red",
    primaryColor: "#ed0a5a",
  },
];
const setTheme = (scopeName) => {
  toggleTheme({
    scopeName,
  });
};
</script>

<template>
  <div style="padding: 20px">
    <h1 style="text-align: center">vite + scss 最简单的预设主题切换示例</h1>

    <div style="text-align: center; margin-top: 20px">
      <div
        class="theme-chunk"
        v-for="item in multipleScopeVars"
        :key="item.scopeName"
        :style="{ background: item.primaryColor }"
        @click="setTheme(item.scopeName)"
      ></div>
    </div>
    <h3 class="sub-title">我是副标题</h3>
    <section class="show-theme-color"></section>
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
// 引入默认主题变量文件
@import "./theme/theme-default.scss";
.sub-title {
  margin-top: 20px;
  text-align: center;
  // 用一个固定颜色 与  主题色 混合之后的颜色
  color: mix(#b6b450, $primary-color, 50%);
}
.theme-chunk {
  display: inline-block;
  width: 30px;
  height: 30px;
  border-radius: 2px;
  cursor: pointer;
  margin-right: 20px;
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

.show-theme-color {
  margin: 40px auto;
  width: 70%;
  height: 300px;
  background-color: $primary-color;
  border: 3px solid mix(#ffffff, $primary-color, 50%);
}
</style>
