<template>
  <el-menu :default-active="'/index'" router mode="horizontal" background-color="white" text-color="#222"
           active-text-color="red" style="min-width: 1300px">
    <el-menu-item v-for="(item, i) in navList" :key="i" :index="item.name">
      {{ item.navItem }}
    </el-menu-item>
    <!--    <a href="#nowhere">更多功能</a>-->
    <i class="el-icon-switch-button" v-on:click="logout"></i>
    <span>White Jotter - Your Mind Palace</span>
    <el-input placeholder="快速搜索" prefix-icon="el-icon-search" size="medium"
              style="width: 300px; position: absolute; margin-top: 10px;right: 25%" v-model="keywords"
              @keyup.enter.native="search"></el-input>
  </el-menu>
</template>

<script>
export default {
  name: "NavMenu",
  data() {
    return {
      navList: [
        {name: '/index', navItem: '首页'},
        {name: '/jotter', navItem: '笔记本'},
        {name: '/library', navItem: '图书馆'},
        {name: '/admin', navItem: '个人中心'}
      ],
      keywords: ''
    }
  },
  methods: {
    search() {
    },
    logout() {
      this.$axios.get('/logout').then(resp => {
        if (resp && resp.data.code === 200) {
          this.$store.commit('logout')
          this.$router.replace('/login')
        }
      }).catch(failResponse => {
      })
    }
  }
}
</script>

<style scoped>
span {
  pointer-events: none;
  position: absolute;
  padding-top: 20px;
  right: 43%;
  font-size: 20px;
  font-weight: bold;
}

a {
  text-decoration: none;
  color: #222;
  float: right;
  padding: 20px;
}

i {
  float: right;
  font-size: 40px;
  color: #222;
  padding: 10px;
  cursor: pointer;
  outline: 0;
}
</style>
