<template>
  <div>
    <a-slider id="test" :default-value="30" :disabled="disabled" />
    <a-slider range :default-value="[20, 50]" :disabled="disabled" />
    Disabled: <a-switch size="small" :checked="disabled" @change="handleDisabledChange" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      disabled: false,
    };
  },
  methods: {
    handleDisabledChange(disabled) {
      this.disabled = disabled;
    },
  },
};
</script>
<style scoped>
.code-box-demo .ant-slider {
  margin-bottom: 16px;
}
</style>
