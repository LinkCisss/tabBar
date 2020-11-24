<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="">
      <img slot="item-icon" src="../assets/img/tabbar/首页.png">
      <img slot="item-icon-active" src="../assets/img/tabbar/首页.png">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <img slot="item-icon" src="../assets/img/tabbar/分类.png">
      <img slot="item-icon-active" src="../assets/img/tabbar/点击分类.png">
    </tab-bar-item>
    <tab-bar-item path="/surprise">
      <img slot="item-icon" src="../assets/img/tabbar/惊喜.png">
      <img slot="item-icon-active" src="../assets/img/tabbar/点击惊喜.png">
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <img slot="item-icon" src="../assets/img/tabbar/购物车.png">
      <img slot="item-icon-active" src="../assets/img/tabbar/点击购物车.png">
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img slot="item-icon" alt="我的" src="../assets/img/tabbar/我的.png">
      <img slot="item-icon-active" alt="我的" src="../assets/img/tabbar/点我.png">
    </tab-bar-item>

  </tab-bar>
</template>

<script>
import TabBar from "./tabbar/TabBar";
import TabBarItem from './tabbar/TabBarItem'

export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem
  }
}

</script>

<style scoped>

</style>
