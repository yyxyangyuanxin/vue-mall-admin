<template>
  <div :class="{'wrapper': true, 'max-width': $store.state.collapsed}">
    <a-button type="primary" @click="toggleCollapsedActions()">
      <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" />
    </a-button>
    <a-page-header :breadcrumb="{ props: { routes } }" />
    <div class="user-info">
      <div class="user-info-item">
        {{ $store.state.user.username }}
        <div class="exit-btn" @click="exitLoginActions()">退出</div>
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
    toggleCollapsedActions(){
      this.$store.dispatch('toggleCollapsed');
    },
    exitLoginActions(){
      this.$store.dispatch('exitLogin');
      this.$router.push('/login');
    }
  }
};
</script>

<style lang='less' scoped>
@import url('~@/styles/home/siderNav.less');
</style>