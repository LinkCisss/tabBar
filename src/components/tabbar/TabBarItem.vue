<template>

  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>

    <div :style="activeStyle"><slot name="item-text"></slot></div>

    <!--    <img alt="" src="../../assets/img/03-tabbar/首页.png">-->
    <!--      <div>首页</div>-->
  </div>

</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  data() {
    return {
      // isActive: true
    }
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path)
      console.log(this.path);
    }
  },
  computed: {
    isActive() {//判断图片
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle() {
      return this.isActive ? {color: this.activeColor} : {};
    }
  }
}
</script>

<style scoped>

.tab-bar-item {
  cursor: pointer;
  text-align: center;
  flex: 1;
  height: 49px;
}

.tab-bar-item img {
  width: 67px;
  height: 55px;
}


</style>
