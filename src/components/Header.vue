<template>
  <div :class="{'no-login':!isLogin,'login':isLogin}">
    <template v-if="!isLogin">
      <h1>LET'S SHARE</h1>
      <P>精品博客汇聚</P>
      <div>
        <router-link to="/login">
          <el-button>立即登录</el-button>
        </router-link>
        <router-link to="Register">
          <el-button>注册账号</el-button>
        </router-link>
      </div>
      <div class="border"></div>
    </template>
    <template v-if="isLogin">
      <router-link to="/"
                   tag="h1"
                   class="tit-islogin">LET'S SHARE</router-link>
      <router-link to="Create"
                   tag="i"
                   class=" el-icon-plus"></router-link>
      <div class="avatar">
        <img :src="user.avatar"
             alt=""
             class="author-avatar">
      </div>
      <el-dropdown>
        <span class="el-dropdown-link">
          <i class="el-icon-arrow-down"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <router-link to="/my">
            <el-dropdown-item>我的</el-dropdown-item>
          </router-link>
          <el-dropdown-item @click.native="onLogout">注销</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </template>

  </div>

</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Header',
  computed: {
    ...mapGetters(['isLogin', 'user'])
  },
  created () {
    this.checkLogin()
  },

  methods: {
    ...mapActions([
      'checkLogin',
      'logout'
    ]),
    onLogout () {
      this.logout().then(() => {
        this.$router.path.push({ path: '/' })
      })
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/variable.styl';

.tit-islogin {
  cursor: pointer;
}

.el-icon-plus {
  cursor: pointer;
}

.el-dropdown-link {
  cursor: pointer;
  grid-column: 4;
  grid-row: 1;
}

.el-icon-arrow-down {
  font-size: 20px;
  height: 2px;
  color: #fff;
  cursor: pointer;
  margin-top: 40px;
}

.no-login {
  position: relative;
  padding-top: 3%;
  padding-bottom: 2%;
  display: grid;
  color: #fff;
  text-align: center;
  background: $themeColor url('../assets/bg.png') 0 0;
  background-size: cover;

  h1 {
    margin: 0 auto;
    font-family: Monaco, Consolas, monospace;
    font-weight: bold;
    font-size: 300%;
    border-right: 5px solid;
    width: 11ch;
    grid-column: 1 / 2;
    align-self: center;
    align-items: center;
    width: px;
    overflow: hidden;
    white-space: nowrap;
    transiton: all 1.5s ease-out;
    animation: typing 2s steps(11, end), blink-caret 0.5s step-end infinite alternate;
  }

  p {
    margin: 10px 0;
  }

  .el-button {
    margin-top: 20px;
    margin-right: 20px;
    height: 40px;
    line-height: 40px;
    padding: 0 8px;
    border-radius: 4px;
    font-size: 13px;
  }

  .border {
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 0;
    height: 7px;
    background: transparent url('../assets/border.png');
    background-size: 14px 7px;
  }
}

.login {
  height: 80px;
  position: relative;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr 40px 60px 30px;
  color: #fff;
  background: $themeColor url('../assets/bg.png') 0 0;
  background-size: cover;
  transiton: all 0.5s ease-out;
  animation: slideInDown 0.5s;

  h1 {
    align-self: center;
    grid-column: 1 / 2;
    font-family: Monaco, Consolas, monospace;
    font-weight: bold;
    font-size: 300%;
  }

  .el-icon-plus {
    align-self: center;
    justify-self: center;
    grid-row: 1;
    grid-column: 2 / 3;
    font-size: 30px;
  }

  .avatar {
    align-self: center;
    justify-self: center;
    grid-row: 1;
    grid-column: 3;
    display: grid;

    .author-avatar {
      width: 50px;
      border-radius: 50%;
      justify-self: center;
    }
  }
}

@media screen and (max-device-width: 800px) {
}
</style>
