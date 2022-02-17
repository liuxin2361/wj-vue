<template>
  <el-menu default-active="currentPath" class="el-menu-admin" @open="handleOpen" @close="handleClose" background-color="#545c64"
           text-color="#fff" active-text-color="#ffd04b" :collapse="isCollapse" router>
    <el-submenu v-for="(item, i) in adminMenus" :key="i" :index="i.toString()">
      <template slot="title">
        <i :class="item.iconCls"></i>
        <span>{{ item.nameZh }}</span>
      </template>
      <el-menu-item-group>
        <el-menu-item v-for="child in item.children" :key="child.path" :index="child.path">
          <i :class="child.iconCls"></i>
          <span>{{ child.nameZh }}</span>
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  name: "AdminMenu",
  data() {
    // 适合设置静态值
    return {
      isCollapse: false
    }
  },
  computed: {
    adminMenus() {
      return this.$store.state.adminMenus
    },
    currentPath() {
      return this.$route.path
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped>
.el-menu-admin {
  height: 100%;
}
</style>