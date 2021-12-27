<template>
  <a-button type="primary" @click="info">
    Display normal message
  </a-button>
</template>
<script>
export default {
  methods: {
    info() {
      this.$message.info('This is a normal message');
    },
  },
};
</script>
