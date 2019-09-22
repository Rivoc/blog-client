// 对跟认证(auth)api相关的接口路径进行封装
import request from './request.js'
const URL = {
  register: '/auth/register',
  login: '/auth/login',
  logout: '/auth/logout',
  // 判断用户是否登录
  get_info: '/auth'
}
export default {
  // 导出一组函数，函数传入api要求的参数字段后，返回封装好的request方法的执行结果，即Promise对象
  register ({ username, password }) {
    return request(URL.register, 'POST', { username, password })
  },
  login ({ username, password }) {
    return request(URL.login, 'POST', { username, password })
  },
  logout () {
    return request(URL.logout)
  },
  getInfo () {
    return request(URL.get_info)
  }
}
