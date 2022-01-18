<template>
  <el-menu default-active="1" style="width: 170px">
    <el-menu-item index="1">
        <i class="el-icon-menu"></i>
        <span>技术采用</span>
    </el-menu-item>
    <el-menu-item index="2">
      <i class="el-icon-menu"></i>
      <span slot="title">最近更新</span>
    </el-menu-item>
    <el-menu-item index="3">
      <i class="el-icon-document"></i>
      <span slot="title">下载源码</span>
    </el-menu-item>
    <el-menu-item index="4">
      <i class="el-icon-info"></i>
      <span slot="title">关于我们</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: "SideMenu"
}
</script>

<style scoped>

</style>
