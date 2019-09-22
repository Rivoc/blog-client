import auth from '../../helper/auth'
const state = {
  user: null, // 登陆后用户个人相关信息
  isLogin: false
}

const getters = {
  user: state => state.user,
  isLogin: state => state.isLogin
}
// payload可以理解为有效数据
const mutations = {
  setUser (state, payload) {
    state.user = payload.user
  },

  setLogin (state, payload) {
    state.isLogin = payload.isLogin
  }
}
// 定义actions的方法
const actions = {
  login ({ commit }, { username, password }) {
    return auth.login({ username, password })
      .then(res => {
        commit('setUser', { user: res.data })
        commit('setLogin', { isLogin: true })
      })
  },

  async register ({ commit }, { username, password }) {
    let res = await auth.register({ username, password })
    commit('setUser', { user: res.data })
    commit('setLogin', { isLogin: true })
    return res.data
  },
  // 注销就将个人信息清空
  async logout ({ commit }) {
    await auth.logout()
    commit('setUser', { user: null })
    commit('setLogin', { isLogin: false })
  },

  async checkLogin ({ commit, state }) {
    if (state.isLogin) return true
    let res = await auth.getInfo()
    commit('setLogin', { isLogin: res.isLogin })
    if (!res.isLogin) return false
    commit('setUser', { user: res.data })
    return true
  }

  /*
    this.logout().then(isLogin=>{

    })

  */
}

export default {
  state,
  getters,
  mutations,
  actions
}
