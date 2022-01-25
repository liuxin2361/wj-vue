<template>
  <div id="paper">
    <el-form class="login-container" label-positon="left" label-width="0px" v-loading="loading" :rules="rules">
      <h3 class="login_title">用户注册</h3>
      <el-form-item>
        <!--  autocomplete 原生属性，自动补全    -->
        <el-input v-model="loginForm.username" placeholder="帐号" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input type="password" v-model="loginForm.password" placeholder="密码" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item style="width: 100%">
        <el-button type="primary" @click="register" style="width: 100%;background: #505458;border: none">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      rules: {
        username: [{required: true, message: '用户名不能为空', trigger: 'blur'}],
        password: [{required: true, message: '密码不能为空', trigger: 'blur'}]
      },
      loginForm: {
        username: '',
        password: '',
      },
      loading: false,
    }
  },
  methods: {
    register() {
      this.$axios.post("/register", {
        username: this.loginForm.username,
        password: this.loginForm.password
      }).then(resp => {
        if (resp.data.code === 200) {
          this.$alert('注册成功', '提示', {
            confirmButtonText: '确定'
          })
          this.$router.replace('/login')
        } else {
          this.$alert(resp.data.message, '提示', {
            confirmButtonText: '确定'
          })
        }
      }).catch(failResp => {
      })
    },
  }
}
</script>

<style scoped>
#paper {
  background: url("../assets/eva.jpg") no-repeat center;
  height: 100%;
  width: 100%;
  background-size: cover;
  position: fixed; /*元素的位置相对于浏览器窗口是固定位置。即使窗口是滚动的它也不会移动：*/
}

.login-container {
  border-radius: 15px; /*边框圆角 */
  width: 350px;
  background: #fff;
  border: solid 1px #eaeaea; /*边框*/
  box-shadow: 0 0 25px #cac6c6;
  margin: 90px auto; /*上下90px，左右auto*/
  padding: 35px 35px 15px 35px; /*上，右， 下 ，左*/
  background-clip: padding-box; /*背景绘制在衬距方框内（剪切成衬距方框）。*/
}

.login_title {
  margin: 0px auto 40px auto;
  text-align: center;
  color: #505458;
}
</style>