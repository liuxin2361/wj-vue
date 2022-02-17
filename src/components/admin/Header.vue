<template>
  <el-card class="admin-header" body-style="{height: 60px;padding: 0;}">
    <a href="/index">
      <img src="../../assets/img/icon2.png" alt="" width="55px">
    </a>
    <span>个人中心</span>
    <i class="el-icon-switch-button" v-on:click="logout"></i>
  </el-card>
</template>

<script>
export default {
  name: "Header",
  methods: {
    logout() {
      this.$axios.get('/logout').then(resp => {
        if (resp && resp.data.code === 200) {
          this.$store.commit('logout')
          this.$router.replace('/login')
        }
      }).catch(failResp => {
      })
    }
  }
}
</script>

<style scoped>
.admin-header {
  background-color: white;
  margin-bottom: 10px;
  border: 0;
}

.el-icon-switch-button {
  float: right;
  font-size: 40px;
  color: #222;
  padding: 10px;
  cursor: pointer;
  outline: 0;
}

a {
  font-size: 20px;
  float: left;
  padding: 10px;
}

span {
  font-size: 30px;
  position: absolute;
  left: 60px;
  font-weight: bold;
  padding: 10px;
}
</style>