import axios from 'axios'
import env from '../../build/env'
import '../global/config'
import {router} from '../router/index'
import {Notice, Message} from 'iview'

let ajaxUrl = CONFIG.server[env] || 'https://debug.url.com'

let instance = axios.create({
  baseURL: ajaxUrl,
  timeout: 3000
})

instance.interceptors.request.use(config => {
  return config
}, err => {
  Message.error({
    content: '网络有点卡，请稍后重试!'
  })
  return Promise.resolve(err)
})

instance.interceptors.response.use(res => {
  let data = res.data || {}
  if (res.status && res.status == 200 && data.status == 'error') {
    Message.error({
      content: data.msg
    })
    return
  }
  return res
}, err => {
  let response = err.response || {}
  if (response.status == 504 || response.status == 404) {
    Message.error({
      content: '服务器被吃了⊙﹏⊙∥'
    })
  } else if (response.status == 403) {
    Message.error({
      content: '权限不足,请联系管理员!'
    })
  } else {
    Message.error({
      content: response.errorDescription || '出现未知错误，请稍后重试'
    })
  }
  return Promise.resolve(err);
})

const postRequest = (url, params) => {
  return instance({
    method: 'post',
    url,
    data: params,
    transformRequest: [function (data) {
      let ret = '';
      for (let item in data) {
        ret += encodeURIComponent(item) + '=' + encodeURIComponent(data[item]) + '&';
      }
      return ret;
    }],
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
  })
}

const uploadFileRequest = (url, params) => {
  return instance({
    method: 'post',
    url,
    data: params,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}

const putRequest = (url, params) => {
  return instance({
    method: 'put',
    url,
    data: params,
    transformRequest: [function (data) {
      let ret = '';
      for (let item in data) {
        ret += encodeURIComponent(item) + '=' + encodeURIComponent(data[item]) + '&';
      }
      return ret;
    }],
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
  })
}

const deleteRequest = (url) => {
  return instance({
    method: 'delete',
    url
  })
}

const getRequest = (url) => {
  return instance({
    method: 'get',
    url
  })
}

let AXIOS = {
  post: postRequest,
  uploadFile: uploadFileRequest,
  put: putRequest,
  delete: deleteRequest,
  get: getRequest
}

export default AXIOS;
