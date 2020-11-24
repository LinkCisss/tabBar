<template>
  <div id="tab-bar">

    <slot></slot>

  </div>

</template>

<script>
export default {
  name: "TabBar"
}
</script>

<style scoped>

#tab-bar {
  display: flex;
  background-color: lavender;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 -2px 3px lavenderblush;
}
/*@import "./src/assets/css/base.css";*/
</style>
