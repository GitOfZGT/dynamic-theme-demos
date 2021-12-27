<script>
import Color from "color";
import setCustomTheme from "@setCustomTheme";
export default {
  data() {
    return {
      primaryColor: "#512da7",
    };
  },
  methods:{
    colorChange(color){
      this.primaryColor=color;
       setCustomTheme({
        Color,
        primaryColor: color,
      });
    }
  }
};
</script>
<template>
  <div style="padding: 20px">
    <h1 style="text-align: center">vite + element-ui 动态主题切换示例</h1>
    <div style="text-align: center">
      <el-color-picker v-model="primaryColor" @active-change="colorChange"></el-color-picker>
    </div>
    <h3 class="sub-title">
      这行文字是非组件库的颜色切换演示，之下是组件库的颜色切换
    </h3>
      <el-row style="margin-bottom: 15px">
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>
    <el-row style="margin-bottom: 15px">
      <el-button disabled>默认按钮</el-button>
      <el-button type="primary" disabled>主要按钮</el-button>
      <el-button type="success" disabled>成功按钮</el-button>
      <el-button type="info" disabled>信息按钮</el-button>
      <el-button type="warning" disabled>警告按钮</el-button>
      <el-button type="danger" disabled>危险按钮</el-button>
    </el-row>

    <el-row style="margin-bottom: 15px">
      <el-button plain disabled>朴素按钮</el-button>
      <el-button type="primary" plain>主要按钮</el-button>
      <el-button type="success" plain>成功按钮</el-button>
      <el-button type="info" plain>信息按钮</el-button>
      <el-button type="warning" plain>警告按钮</el-button>
      <el-button type="danger" plain>危险按钮</el-button>
    </el-row>
    <el-progress style="margin-bottom: 15px" :percentage="50"></el-progress>
    <Forms style="margin-bottom: 15px" />
    <Menu style="margin-bottom: 15px" />
    <Message style="margin-bottom: 15px" />
    <el-steps :active="2" align-center>
      <el-step
        title="步骤1"
        description="这是一段很长很长很长的描述性文字"
      ></el-step>
      <el-step
        title="步骤2"
        description="这是一段很长很长很长的描述性文字"
      ></el-step>
      <el-step
        title="步骤3"
        description="这是一段很长很长很长的描述性文字"
      ></el-step>
      <el-step
        title="步骤4"
        description="这是一段很长很长很长的描述性文字"
      ></el-step>
    </el-steps>
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
/** 注意：@import 默认的组件库变量文件，而不能是 src/theme/theme-vars.less */
@import "element-ui/packages/theme-chalk/src/common/var.scss";
.sub-title {
  margin-bottom: 120px;
  margin-top: 20px;
  text-align: center;
  // 用一个固定颜色 与  主题色 混合之后的颜色
  color: mix(#45DEE0, $--color-primary, 90%);
}

.my-plugins {
  max-width: 350px;
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
