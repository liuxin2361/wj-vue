<template>
  <div class="search-bar">
    <el-input placeholder="通过书名或作者搜索..." prefix-icon="el-icon-search" v-model="keywords" size="small"
              style="width: 400px;margin-right: 10px" @keyup.enter.native="searchClick"></el-input>
    <el-button type="primary" icon="el-icon-search" size="small" @click="searchClick">搜索</el-button>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  data() {
    return {
      keywords: '',
    }
  },
  methods: {
    searchClick() {
      this.$emit('onSearch') // 自动触发父组件onSearch事件
    }
  },
}
</script>

<style scoped>
.search-bar {
  display: flex; /*弹性布局*/
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
}
</style>