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
.wrapper {
  width: calc(100vw - 180px);
  border-bottom: 1px #ececec solid;
  height: 50px;
  line-height: 50px;
  position: fixed;
  top: 0;
  right: 0;
  &.max-width{
    width: calc(100vw - 64px);
  }
  .ant-page-header {
    float: left;
    &.has-breadcrumb {
      padding-top: 14px;
    }
  }
  .user-info {
    position: fixed;
    right: 30px;
    .user-info-item {
      cursor: pointer;
      .exit-btn {
        display: none;
        width: 100%;
        text-align: center;
      }
      &:hover .exit-btn {
        display: block;
      }
    }
  }
}
</style>