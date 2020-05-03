// pages/home/childCpns/Recommends/Recommends.js
Component({
  /**
   * 组件的属性列表
   */
  data:{
    count:0
  },
  properties: {
    recommends:{
      type:Array,
      value:[]
    }
  },
  methods: {
    imageLoad(){
      if(this.data.count === 0){
        this.setData({
          count : 1
        })

        this.triggerEvent('imageLoad',{},{})
      }
    }
  }
})
