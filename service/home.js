import request from './network.js'

export function getHomeMultidata() {
  return request({
    url:"home/multidata"
  })
}

export function getHomeGoods(type,page) {
  return request({
    url:'/home/data',
    data:{
      type,
      page
    }
  })
}