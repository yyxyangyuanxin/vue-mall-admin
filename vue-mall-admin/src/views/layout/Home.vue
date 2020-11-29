<template>
  <div class="wrapper">
    <left-menu />
    <sider-nav />
  </div>
</template>
<script>
import leftMenu from './component/menu.vue';
import siderNav from './component/siderNav.vue'
export default {
  components: {
    leftMenu,
    siderNav
  },
};
</script>

<style lang='less' scoped>
@import url('~@/styles/home/index.less');
</style>