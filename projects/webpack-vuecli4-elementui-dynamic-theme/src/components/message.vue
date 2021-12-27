<template>
  <div>
    <el-button :plain="true" @click="open2">成功</el-button>
    <el-button :plain="true" @click="open3">警告</el-button>
    <el-button :plain="true" @click="open1">消息</el-button>
    <el-button :plain="true" @click="open4">错误</el-button>
  </div>
</template>

<script>
import "element-ui/packages/theme-chalk/src/message.scss";
import message from 'element-ui/lib/message'
export default {
  methods: {
    open1() {
      message("这是一条消息提示");
    },
    open2() {
      message({
        message: "恭喜你，这是一条成功消息",
        type: "success",
      });
    },

    open3() {
      message({
        message: "警告哦，这是一条警告消息",
        type: "warning",
      });
    },

    open4() {
      message.error("错了哦，这是一条错误消息");
    },
  },
};
</script>
