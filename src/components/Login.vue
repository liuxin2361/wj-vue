<!--登录页面组件-->
<template>
  <body id="poster">
  <el-form class="login-container" label-positon="left" label-width="0px">
    <h3 class="login_title">系统登录</h3>
    <el-form-item>
      <!--  autocomplete 原生属性，自动补全    -->
      <el-input v-model="loginForm.username" placeholder="帐号" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item>
      <el-input type="password" v-model="loginForm.password" placeholder="密码" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item style="width: 100%">
      <el-button type="primary" @click="login" style="width: 100%;background: #505458;border: none">登录</el-button>
    </el-form-item>
  </el-form>
  </body>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        username: '',
        password: '',
      },
      responseResult: []
    }
  },
  methods: {
    login() {
      var _this = this
      console.log(this.$store.state)
      this.$axios
        .post('/login', {
          username: this.loginForm.username,
          password: this.loginForm.password
        })
        .then(response => {
          if (response.data.code == 200) {
            _this.$store.commit('login', _this.loginForm)
            // this.$route当前激活的路由的信息对象  是 $router正在跳转的路由对象
            // http://localhost:8080/login?redirect=%2Findex 重定向时带有原路径参数
            var path = this.$route.query.redirect
            // this.$router：全局的 router 实例。通过 vue 根实例中注入 router 实例，然后再注入到每个子组件，从而让整个应用都有路由功能。其中包含了很多属性和对象（比如 history 对象），任何页面也都可以调用其 push(), replace(), go() 等方法。
            this.$router.replace({path: path === '/' || path === undefined ? '/index' : path})
          }
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

<style>
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

#poster {
  background: url("../assets/eva.jpg") no-repeat center;
  height: 100%;
  width: 100%;
  background-size: cover;
  position: fixed; /*元素的位置相对于浏览器窗口是固定位置。即使窗口是滚动的它也不会移动：*/
}

body{
  margin: 0; /*解决页面顶端8px空白*/
}
</style>
