// components/content/TabControl/TabControl.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titles:{
      type:Array,
      value:[]
    },
    setIndex:{
      type:Number,
      value:0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    activeIndex:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    tabClick(event){
      //更新当前最新活跃状态
      const activeIndex = event.currentTarget.dataset.index
      this.setData({
        activeIndex
      })

      //发出当前活跃状态
      this.triggerEvent('tabClick',activeIndex,{})
    }
  },
  // observers: {
  //   'setIndex': function (setIndex) {
  //     console.log(setIndex);
  //     // this.setData({
  //     //   activeIndex: setIndex
  //     // })
  //   }
  // }
})
