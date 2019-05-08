import axios from 'axios';
import qs from 'qs';
// import store from '../store/store'
import {urlConfig} from '../../static/urlConfig'

axios.defaults.baseURL = urlConfig.baseUrl

// axios.defaults.baseURL = 'http://web.ygbxsc.com/index/'//线上
// axios.defaults.baseURL = 'http://106.37.74.50:13023'//线上


// 添加请求拦截器
axios.interceptors.request.use(config => {
  // if (config.url.indexOf('userinfo') < 0) {
  //   if (store.state.user.token && !config.headers['X-Token']) {
  //     config.headers['X-Token'] = store.state.user.token
  //   }
  // }
  return config
}, error => {
  return Promise.reject(error)
})
//添加响应拦截器
axios.interceptors.response.use(response => {
  return response
}, error => {
  return Promise.resolve(error.response)
})

//返回数据
// function Success(response) {

//   if (response.status == 1) {
//     return stringToJson(response)
//   }
//     // return {
//     //   code: -404,
//     //   message: response.statusText,
//     //   data: response.statusText,
//     // }
// }

//转字符串为JSON
function stringToJson(resData) {
  if (typeof (resData) == 'String') {
    resData = JSON.parse(resData);
  }
  return resData
}

// 请求状态错误，处理函数
// function Fail(res) {
//   // Message({
//   //   showClose: true,
//   //   message: res.message,
//   //   type: 'warning'
//   // })
//   return res
// }
let headers = {'Content-Type': 'application/x-www-form-urlencoded'};
// if(store.state.user && store.state.user.token){
//   headers = {'X-Token': store.state.user.token}
// }else{
//   headers = {'Content-Type': 'application/x-www-form-urlencoded'}
// }
export default {
  post(url, data) {
    return axios({
      method: 'post',
      url,
      data: qs.stringify(data),
      timeout: 10000,
      // headers:headers
    }).then((response) => {
      // return Success(response.data)
      return response.data
    }).catch((res) => {
      // return Fail(res)
      return res
    })
  },
  get(url, params) {
    return axios({
      method: 'get',
      url,
      params, // get 请求时带的参数
      timeout: 10000,
      // headers: headers
    }).then((response) => {
      // return Success(response.data)
      return response.data
    }).catch((res) => {
      // return Fail(res)
      return res
    })
  },

  formdataPost(url, data) {
    return axios({
      method: 'post',
      url,
      data: data,
      // timeout: 10000,
      // headers: headers
    }).then((response) => {
      // return Success(response.data)
      return response.data
    }).catch((res) => {
      // return Fail(res)
      return res
    })
  },
  delete(url, params) {
    return axios({
      method: 'delete',
      url,
      params, // delete 请求时带的参数
      timeout: 10000,
      // headers:headers
    }).then((response) => {
      // return Success(response.data)
      return response.data
    }).catch((res) => {
      // return Fail(res)
      return res
    })
  },
  put(url, data) {
    return axios({
      method: 'put',
      url,
      data: data,
      timeout: 10000,
      // headers: headers
    }).then((response) => {
      // return Success(response.data)
      return response.data
    }).catch((res) => {
      // return Fail(res)
      return res
    })
  },
}
