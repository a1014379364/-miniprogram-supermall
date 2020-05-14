// pages/detail/detail.js
import {
  getDetail,
  Goods,
  Shop,
  GoodsParams,
  getRecommend
} from "../../service/detail.js";

Page({
  data: {
    iid:'',
    topImages:[],
    goods:{},
    shop:{},
    detailInfo:{},
    paramsInfo:{},
    commentInfo:{},
    recommends:{},
    paramsTop:0,
    commentTop:0,
    pageIndex:0,
    product:{}
  },
  onLoad: function (options) {
    const iid = options.iid

    //请求相关数据
    getDetail(iid).then(res =>{
      const data = res.data.result
      const goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
      const shop = new Shop(data.shopInfo)
      const detailInfo = data.detailInfo
      const paramsInfo = new GoodsParams(data.itemParams.info,data.itemParams.rule)
      let  commentInfo = {}
      if(data.rate.cRate !== 0){
        commentInfo = data.rate.list[0]
      }

      this.setData({
        iid, //保留传递过来的iid
        topImages : data.itemInfo.topImages,//获取顶部的图片轮播数据
        goods,//商品数据
        shop,//店铺数据
        detailInfo,//穿着效果
        paramsInfo,//参数数据
        commentInfo //用户评论
      })

      //汇总购物车信息
      this.getProduct()
    })
    getRecommend().then(res => {
      const recommends = res.data.data.list
      this.setData({
        recommends //相关推荐
      })
    })
  },
  getProduct(){
    const product = {}
    product.image = this.data.topImages[0]
    product.title = this.data.goods.title
    product.desc = this.data.goods.desc
    product.price = this.data.goods.realPrice
    product.iid = this.data.iid

    this.setData({
      product
    })
  },
  getTop(){
    wx.createSelectorQuery().select('#params-info').boundingClientRect(rect => {
      const paramsTop = rect.top
      this.setData({
        paramsTop //获取参数位置
      })
    }).exec()
    wx.createSelectorQuery().select('#comment-info').boundingClientRect(rect => {
      const commentTop = rect.top
      this.setData({
        commentTop //获取评论位置
      })
    }).exec()
  },
  tabClick(options){
    const activeIndex = options.detail

    //移动屏幕
    switch (activeIndex) {
      case 0 :
        this.backTop(0)
        break
      case 1 :
        this.backTop(this.data.paramsTop - 44)
        break
      case 2 :
        this.backTop(this.data.commentTop - 44)
        break
    }
  },
  backTop(scrollTop){
    wx.pageScrollTo({
      scrollTop
    })
  },
  onPageScroll(options) {
    const scrollTop = options.scrollTop

    if(0 <= scrollTop && scrollTop < this.data.paramsTop - 44 && this.data.pageIndex !== 0){//商品
      this.setData({
        pageIndex : 0
      })
    }else if (this.data.paramsTop - 44 <= scrollTop && scrollTop < this.data.commentTop - 44 && this.data.pageIndex !== 1){//参数
      this.setData({
        pageIndex : 1
      })
    }else if(this.data.commentTop - 44 <= scrollTop && scrollTop < Number.MAX_VALUE && this.data.pageIndex !== 2){
      this.setData({
        pageIndex : 2
      })
    }
  },
  onShareAppMessage: function (options) {
    return{
      title:this.data.goods.title,
      path:'/pages/detail/detail?' + this.data.iid
    }
  }
})