<template>
  <el-container id="admin-body">
    <el-header style="padding: 0;">
      <Header style="position: absolute; width: 100%"></Header>
    </el-header>
    <el-container>
      <el-aside style="width:250px;margin-top: 15px;height: 112%">
        <admin-menu></admin-menu>
      </el-aside>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>

import Header from "./Header"
import AdminMenu from './AdminMenu'

export default {
  name: "AdminIndex",
  components: {Header, AdminMenu},
}
</script>

<style scoped>
#admin-body {
  height: 88.5vh;
}
</style>