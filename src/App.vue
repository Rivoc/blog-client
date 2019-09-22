<template>
  <div id="app">
    <Header id="header"></Header>
    <div class="mask"
         v-if="loading"><i class="el-icon-loading"></i> </div>
    <div id="main">

      <router-view />
    </div>
    <Footer id="footer"></Footer>
  </div>
</template>

<script>

import Header from './components/Header'
import Footer from './components/Footer'
export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  data () {
    return {
      loading: true
    }
  },
  mounted () {
    var _this = this
    this.bus.$on('changeLoading', function (val) { // 注意先把this保存起来！
      _this.loading = val
    })
  }

}
</script>

<style lang="stylus" scoped>
.mask {
  grid-row: 2;
  grid-column: 2;
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.el-icon-loading {
  color: #00afc4;
  font-size: 36px;
}

.mask::after {
  content: '拼命加载中';
  color: #999;
}

#app {
  display: grid;
  grid-template-columns: 12% auto 12%;
  grid-template-rows: auto 1fr auto;
  grid-template-areas: 'header header header' '. main .' 'footer footer footer';
  height: 100%;

  #header {
    padding-left: 12%;
    padding-right: 12%;
    grid-area: header;
  }

  #main {
    grid-area: main;
  }

  #footer {
    grid-area: footer;
    background-color: pink;
    padding: 0 12%;
  }
}
</style>
