<template>
  <div>
    <div id="login">
      <h4>用户名</h4>
      <el-input type="text"
                placeholder="用户名"
                v-model="userName"></el-input>
      <h4>密码</h4>
      <el-input placeholder="请输入密码"
                show-password
                v-model="passWord"></el-input>
      <el-button @click="onRegister">立即注册</el-button>
      <p class="notice">已有账号？
        <router-link to="Login"><span>立即登录</span></router-link>
      </p>
    </div>

  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'Register',
  data () {
    return {
      userName: '',
      passWord: ''
    }
  },

  methods: {
    ...mapActions(['register']),
    onRegister () {
      this.register({ username: this.userName, password: this.passWord })
        .then(() => {
          this.$message({
            message: '注册成功',
            type: 'success'
          })
          this.$router.push({ path: '/Create' })
        })
    }

  }
}
</script>
<style lang="stylus" scoped>
#login {
  margin: 30px auto;
  width: 30%;
  display: grid;
  grid-template-rows: auto auto auto auto auto auto;

  h4 {
    margin: 5px 0;
  }

  .el-input {
    margin-bottom: 5px;
  }

  .el-button {
    margin-top: 20px;
    width: 25%;
    padding: 8px 10px;
    font-size: 12px;
  }

  .notice {
    margin-top: 30px;
    font-size: 12px;
    color: #999;
    text-align: center;

    span {
      color: #00afc4;
    }
  }
}
</style>
