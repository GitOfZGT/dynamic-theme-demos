<template>
  <div id="app">
    <div style="padding: 20px">
      <h1 style="text-align: center">
        webpack + ant-design-vue 预设主题切换示例
      </h1>
      <div style="text-align: center">
        <a-button @click="toggleTheme({ scopeName: 'theme-default' })"
          >默认主题</a-button
        >
        <a-button
          @click="toggleTheme({ scopeName: 'theme-red' })"
          style="margin-left: 20px"
          >红色主题</a-button
        >
      </div>
      <h3 class="sub-title">
        这行文字是非组件库的颜色切换演示，之下是组件库的颜色切换
      </h3>
      <a-divider />
      <a-row :gutter="30">
        <a-col :span="12">
          <a-button type="primary">Primary Button</a-button>
          <a-button>Default Button</a-button>
          <a-button type="dashed">Dashed Button</a-button>
          <a-button type="text">Text Button</a-button>
          <a-button type="link">Link Button</a-button>
          <a-divider />

          <a-alert
            style="margin-bottom: 10px"
            message="success"
            type="success"
          />
          <a-alert style="margin-bottom: 10px" message="info" type="info" />
          <a-alert
            style="margin-bottom: 10px"
            message="warning"
            type="warning"
          />
          <a-alert message="error" type="error" />
          <a-divider />
          <a-breadcrumb>
            <a-breadcrumb-item>Home</a-breadcrumb-item>
            <a-breadcrumb-item
              ><a href="">Application Center</a></a-breadcrumb-item
            >
            <a-breadcrumb-item
              ><a href="">Application List</a></a-breadcrumb-item
            >
            <a-breadcrumb-item>An Application</a-breadcrumb-item>
          </a-breadcrumb>
          <a-divider />
          <Notification />
          <a-divider />
          <Modal />
          <a-divider />
          <Message />
        </a-col>
        <a-col :span="12">
          <Slider />
          <a-divider />

          <Table />
        </a-col>
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
  </div>
</template>

<script>
import Table from "./components/table.vue";
import Slider from "./components/slider.vue";
import Notification from "./components/notification.vue";
import Modal from "./components/modal.vue";
import Message from "./components/message.vue";
import {toggleTheme} from "@zougt/theme-css-extract-webpack-plugin/dist/toggleTheme";
// env.themeConfig 来源 vue.config.js define (webpack的DefinePlugin)
const themeConfig = env.themeConfig;

export default {
  name: "App",
  components: {
    Table,
    Slider,
    Notification,
    Modal,
    Message,
  },
  methods: {
    toggleTheme({ scopeName }) {
      toggleTheme({
        scopeName,
        multipleScopeVars: themeConfig.multipleScopeVars,
        extract: themeConfig.extract,
        publicPath: themeConfig.publicPath,
        outputDir: themeConfig.extractCssOutputDir,
        // customLinkHref: (href) => href,
        // themeLinkTagId: "theme-link-tag",
        // "head" || "body"
        // themeLinkTagInjectTo: "head",
        // removeCssScopeName: false,
        // loading: {
        //   show: () => {},
        //   hide: () => {},
        // },
      });
    },
  },
};
</script>

<style lang="less" scoped>
@import "~ant-design-vue/es/style/themes/index.less";
.sub-title {
  margin-top: 20px;
  text-align: center;
  // 用一个固定颜色 与  主题色 混合之后的颜色
  color: mix(#c017c0, @primary-color, 50%);
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
