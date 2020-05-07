import request from './network.js'

export function getDetail(iid) {
  return request({
    url:'/detail',
    data: {
      iid
    }
  })
}

export function getRecommend() {
  return request({
    url:'/recommend'
  })
}

export class Goods{
  constructor(itemInfo,columns,services){
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.columns = columns
    this.services = services
    this.realPrice = itemInfo.lowNowPrice
    this.discountBgColor = itemInfo.discountBgColor
  }
}

export class Shop {
  constructor(shopInfo){
    this.logo = shopInfo.shopLogo
    this.name = shopInfo.name
    this.fans = shopInfo.cFans
    this.sells = shopInfo.cSells
    this.score = shopInfo.score
    this.goodsCount = shopInfo.cGoods
    this.shopUrl = shopInfo.shopUrl
  }
}

export class GoodsParams {
  constructor(info,rule){
    //注:images可能没有值(某些商品有值，某些没值)
    this.image = info.images ? info.images[0] : ''
    this.info = info.set
    this.sizes = rule.tables
  }
}