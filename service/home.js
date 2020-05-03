import request from './network.js'
import {
  baseURL
} from './config.js'

export function getHomeMultidata() {
  return request({
    url:baseURL + "home/multidata"
  })
}

export function getHomeGoods(type,page) {
  return request({
    url:baseURL + '/home/data',
    data:{
      type,
      page
    }
  })
}