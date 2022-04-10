<template>
  <div class="sff-box" :style="{'flex-direction': direction, 'justify-content': justifyContent}">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'sff-box',
  data() {
    return {
      direction: '',
      justifyContent: ''
    }
  },
  created() {
    this.direction = this.$attrs["direction"] || 'row';
    this.justifyContent = this.$attrs["justify-content"] || 'center';
  },
  mounted() {}
}
</script>

<style scoped>
.sff-box {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
}
</style>

