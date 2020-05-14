// pages/cart/cart.js
const app = getApp()

Page({
  data:{
    cartList:{},
    isAll:false,
    selected:false
  },
  onShow() {
    this.setData({
      cartList:app.globalData.cartList
    })

    //修改顶部标题
    wx.setNavigationBarTitle({
      title: '购物车[' + this.data.cartList.length + ']'
    })
  },
  listClick(options){
    this.setData({
      isAll: options.detail.isAll
    })
  },
  selectClick(options){
    const selected = options.detail.isAll //需要实现的状态
    this.setData({
      isAll: selected, //更改全选高亮状态
      selected
    })
  }
})