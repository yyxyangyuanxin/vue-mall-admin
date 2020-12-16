<template>
  <div class="wrapper">
      <!-- 搜索 -->
      <search />
      <!-- 表格 -->
  </div>
</template>

<script>
import search from '@/components/search.vue'
export default {
  components: {
    search
  }
}
</script>

<style lang='less' scoped>
.wrapper{
  height: 50px;
  display: flex;
  align-items: center;
}
</style>