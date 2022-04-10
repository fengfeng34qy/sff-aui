<template>
  <div id="app">
    <sff-box direction="column" justify-content="center">sff-box1</sff-box>
    <br>
    <sff-box justify-content="flex-start">
      <sff-box class="item">sff-box2</sff-box>
      <sff-box class="item">sff-box2</sff-box>
    </sff-box>
    <br>
    <sff-box direction="column">
      <sff-box class="item">sff-box3</sff-box>
      <sff-box class="item">sff-box3</sff-box>
    </sff-box>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {}
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
.item {
  margin: 0 6px;
}
</style>
