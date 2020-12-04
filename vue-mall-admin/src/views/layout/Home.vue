<template>
  <div class="wrapper">
    <div class="left-menu">
      <left-menu />
    </div>
    <div class="right-container">
      <sider-nav />
      <div class="router-view">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import leftMenu from "./component/menu.vue";
import siderNav from "./component/siderNav.vue";
export default {
  components: {
    leftMenu,
    siderNav,
  },
};
</script>

<style lang='less' scoped>
@import url("~@/styles/home/index.less");
</style>