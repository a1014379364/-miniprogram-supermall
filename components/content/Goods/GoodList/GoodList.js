// components/content/Goods/GoodList/GoodList.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    goodList:{
      type:Array,
      value:[]
    }
  },
  methods:{
    handlePushDetail(event){
      const iid = event.currentTarget.dataset.iid
      wx.navigateTo({
        url:'/pages/detail/detail?iid='+iid
      })
    }
  }
})
