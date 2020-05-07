// components/content/TabControl/TabControl.js
Component({
  properties: {
    titles:{
      type:Array,
      value:[]
    },
    setIndex:{
      type:Number,
      value:0
    },
    pageIndex:{
      type:Number,
      value:0
    }
  },
  data: {
    activeIndex:0
  },
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
  observers: {
    pageIndex: function (newIndex) {
      // console.log("发生变化"+newIndex);
      this.setData({
        activeIndex: newIndex
      })
    }
  }
})
