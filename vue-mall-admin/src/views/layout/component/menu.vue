<template>
  <div :class="{ wrapper: true, 'min-width': $store.state.collapsed }">
    <a-menu
      :default-selected-keys="[$router.currentRoute.matched[1] ? 
      $router.currentRoute.matched[1].name : '']"
      :default-open-keys="[$router.currentRoute.matched[0].name]"
      mode="inline"
      theme="dark"
      :inline-collapsed="$store.state.collapsed"
    >
      <template v-for="route in $store.state.menuRoutes">
        <a-sub-menu :key="route.name" v-if="route.meta.show">
          <span slot="title"
            ><a-icon :type="route.meta.icon" />
            <span>{{ route.meta.title }}</span>
          </span>
          <a-menu-item v-for="child in route.children" :key="child.name">
            <router-link class="router-link" :to="{ name: child.name }">
              <a-icon :type="child.meta.icon" />
              <span>{{ child.meta.title }}</span>
            </router-link>
          </a-menu-item>
        </a-sub-menu>
      </template>
    </a-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created(){
    console.log(this.$router)
  }
};
</script>

<style lang='less'>
@import url("~@/styles/home/menu.less");
</style>