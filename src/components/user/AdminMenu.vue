<template>
  <el-menu default-active="1" class="el-menu-admin" @open="handleOpen" @close="handleClose" background-color="#545c64"
           text-color="#fff" active-text-color="#ffd04b">
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
<!--    <el-submenu index="1">-->
<!--      <template slot="title">-->
<!--        <i class="el-icon-user"></i>-->
<!--        <span>用户管理</span>-->
<!--      </template>-->
<!--      <el-menu-item-group>-->
<!--        &lt;!&ndash;        <template slot="title">分组一</template>&ndash;&gt;-->
<!--        <el-menu-item index="1-1">用户信息</el-menu-item>-->
<!--        <el-menu-item index="1-2">角色配置</el-menu-item>-->
<!--      </el-menu-item-group>-->
      <!--      <el-menu-item-group title="分组2">-->
      <!--        <el-menu-item index="1-3">选项3</el-menu-item>-->
      <!--      </el-menu-item-group>-->
      <!--      <el-submenu index="1-4">-->
      <!--        <template slot="title">选项4</template>-->
      <!--        <el-menu-item index="1-4-1">选项1</el-menu-item>-->
      <!--      </el-submenu>-->
<!--    </el-submenu>-->
<!--    <el-submenu index="2">-->
<!--      <template slot="title">-->
<!--        <i class="el-icon-document"></i>-->
<!--        <span>内容管理</span>-->
<!--      </template>-->
<!--      <el-menu-item-group>-->
<!--        <el-menu-item index="2-1">图书管理</el-menu-item>-->
<!--      </el-menu-item-group>-->
<!--    </el-submenu>-->
    <!--    <el-submenu index="3">-->
    <!--      <template slot="title">-->
    <!--        <i class="el-icon-user"></i>-->
    <!--        <span>系统配置</span>-->
    <!--      </template>-->
    <!--    </el-submenu>-->
<!--    <el-menu-item index="3">-->
<!--      <i class="el-icon-setting"></i>-->
<!--      <span slot="title">系统配置</span>-->
<!--    </el-menu-item>-->
    <!--    <el-menu-item index="4" disabled>-->
    <!--      <i class="el-icon-setting"></i>-->
    <!--      <span slot="title">导航四</span>-->
    <!--    </el-menu-item>-->
  </el-menu>
</template>

<script>
export default {
  name: "AdminMenu",
  data() {
    // 适合设置静态值
    return {
      // adminMenus: this.$store.state.adminMenus
    }
  },
  computed: {
    adminMenus() {
      return this.$store.state.adminMenus
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