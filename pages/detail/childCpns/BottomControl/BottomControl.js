// pages/detail/childCpns/BottomControl/BottomControl.js
const app = getApp()

Component({
  properties:{
    product:{
      type:Object,
      value:{}
    }
  },
  methods: {
    handlerAdd(){
      const isNew = app.globalData.addProduct(this.data.product)
      const title = isNew ? '已添加新商品' : '商品数量加一'

      wx.showToast({
        title,
        icon: 'success',
        duration: 1000
      })
    }
  }
})
