<template>
  <div :class="{'wrapper': true, 'max-width': $store.state.collapsed}">
    <a-button type="primary" @click="toggleCollapsed">
      <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" />
    </a-button>
    <a-page-header :breadcrumb="{ props: { routes } }" />
    <div class="user-info">
      <div class="user-info-item">
        欢迎yangyuanxin
        <div class="exit-btn">退出</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      collapsed: false,
      routes: [
        {
          path: "index",
          breadcrumbName: "商品",
        },
        {
          path: "first",
          breadcrumbName: "商品列表",
        },
      ],
    };
  },
  methods: {
    toggleCollapsed() {
      this.$store.state.collapsed = !this.$store.state.collapsed;
    },
  }
};
</script>

<style lang='less' scoped>
@import url('~@/styles/home/siderNav.less');
</style>