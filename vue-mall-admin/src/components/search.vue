<template>
  <a-form-model
    layout="inline"
    :model="searchForm"
    @submit="handleSubmit"
    @submit.native.prevent
  >
    <a-form-model-item label="搜索关键字">
      <a-input v-model="searchForm.search" placeholder="请输入关键字" style="width: 180px;">
        <a-icon
          slot="prefix"
          type="search"
          style="color: rgba(0, 0, 0, 0.25)"
        />
      </a-input>
    </a-form-model-item>
    <a-form-model-item label="商品类目">
      <a-select
        show-search
        placeholder="请选择商品类目"
        style="width: 150px"
        @change="handleChange"
      >
        <a-select-option value="">{{  }}</a-select-option>
      </a-select>
    </a-form-model-item>
    <a-form-model-item>
      <a-button type="primary" html-type="submit"> 搜索 </a-button>
    </a-form-model-item>
  </a-form-model>
</template>
<script>
import api from '@/api/category.js';
export default {
  data() {
    return {
      searchForm: {
        search: "",
        password: ""
      },
      categoryList: []
    };
  },
  created(){
    api.list().then(result => {
      console.log(result)
    })
  },
  methods: {
    handleSubmit(e) {
      console.log(this.searchForm);
    },
    handleChange(value) {
      console.log(`selected ${value}`);
    },
  },
};
</script>
<style lang='less' scoped>
.ant-form {
  .ant-form-item{
    padding-left: 30px;
  }
}
</style>