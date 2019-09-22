// 封装axios
import axios from 'axios'
import { Message } from 'element-ui'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.baseURL = 'http://blog-server.hunger-valley.com'
// 设置请求携带cookie
axios.defaults.withCredentials = true
// 导出一个函数,这个函数返回一个Promise对象
// 不传参默认为get请求，不带参数
export default function request (url, type = 'get', data = {}) {
  return new Promise((resolve, reject) => {
    // axios以配置的形式发起请求,根据请求方法设置不同的配置参数
    let options = {
      url,
      method: type
    }
    if (type.toLowerCase() === 'get') {
      options.params = data
    } else {
      options.data = data
    }
    console.log(options)
    axios(options).then((res) => {
      if (res.data.status === 'ok') {
        resolve(res.data)
      } else {
        Message.error(res.data.msg)
        reject(res.data)
      }
    }).catch((err) => {
      Message.error('网络异常' + err)
      reject(err)
    })
  })
}
