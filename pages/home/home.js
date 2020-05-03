// pages/home/home.js
import {
  getHomeMultidata,
  getHomeGoods
} from '../../service/home.js'

const TOP_DISTANCE = 1000

Page({
  data:{
    banners:[],
    recommends:[],
    goods:{
      'new':{page:0,list:[]},
      'pop':{page:0,list:[]},
      'sell':{page:0,list:[]}
    },
    activeType:'pop', //当前活跃的商品类别
    // activeIndex:0,
    showBackTop:false, //控制返回顶部显示
    isFixed:false,
    tabTop:0
  },
  onLoad: function (options) {
    //请求轮播图以及推荐数据
    this._getHomeMultidata()

    //初次获取商品列表数据
    this._getHomeGoods('pop')
    this._getHomeGoods('new')
    this._getHomeGoods('sell')
  },
  /*============网络请求函数============*/
  _getHomeMultidata(){//前面加下划线代表是私有函数
    getHomeMultidata().then(res => {
      this.setData({
        banners : res.data.data.banner.list,
        recommends : res.data.data.recommend.list
      })
    })
  },
  _getHomeGoods(type){
    //获取当前需要加载的页码
    const page = this.data.goods[type].page + 1

    //发送网络请求获取数据
    getHomeGoods(type,page).then(res => {
      // console.log(res);
      const list = res.data.data.list
      //第一种想法是直接push进去，但明显地会变成二维数组
      //第二种想法就是遍历list，然后逐项push进去，而ES6提供了这样拆分的方法,就是直接在数组里面加...
      // this.data.goods[type].list.push(...list)//但直接这样做，界面数据是不会发生刷新的
      const oldList = this.data.goods[type].list
      oldList.push(...list)

      //将数据设置到data的goods中
      //${}是ES6的字符串拼接语法
      const typeKey = 'goods.' + type + '.list'
      const pageKey = 'goods.' + type + '.page'
      this.setData({
        [typeKey]: oldList,
        [pageKey]: page
      })
    })
  },
  /*============事件监听函数============*/
  handleTabClick(event){
    let type = 'pop'
    switch (event.detail) {
      case 0 :
        type = 'pop'
        break
      case 1 :
        type = 'new'
        break
      case  2 :
        type = 'sell'
        break
    }
    this.setData({
      activeType:type
    })
    //状态同步
    // this.setData({
    //   activeIndex:event.detail
    // })
  },
  onReachBottom() {//刷新当前商品展列数据
    this._getHomeGoods(this.data.activeType)
  },
  onPageScroll(options) {//监听页面滚动
    const scrollTop = options.scrollTop
    const flag = scrollTop >= TOP_DISTANCE
    const isFixed = scrollTop >= this.data.tabTop

    if(flag != this.data.showBackTop){//为了不要在滚动函数中频繁调用setDate
      this.setData({
        showBackTop: flag
      })
    }

    if(isFixed != this.data.isFixed){
      this.setData({
        isFixed
      })
    }
  },
  getTop(){
    wx.createSelectorQuery().select('#tab-control').boundingClientRect(rect => {
      const top = rect.top
      this.setData({
        tabTop: top
      })
    }).exec()
  },
  onShareAppMessage(options) {
    return{
      title:'购物商场',
      path:'/pages/home/home'
    }
  }
})