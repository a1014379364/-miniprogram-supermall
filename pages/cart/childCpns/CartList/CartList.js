// pages/cart/childCpns/CartList/CartList.js
Component({
  data:{
    temp:[]
  },
  properties: {
    cartList:{
      type:Object,
      value:{}
    },
    selected:{
      type:Boolean,
      value:false
    }
  },
  methods:{
    checkClick(options){
      const temp = this.data.temp
      const activeIndex = options.currentTarget.dataset.index

      if(temp[activeIndex] != undefined){ //利用映射记录全部状态
        temp[activeIndex] = !temp[activeIndex]
      }else {
        temp[activeIndex] = true
      }

      let count = 0
      for (let item of temp){ //遍历从而判断全选状态
        if(item){
          count ++
        }
      }

      const isAll = count == this.data.cartList.length //发送全选状态
      this.triggerEvent('isAllClick',{
        isAll
      },{})

      this.setData({ //记录当前列表状态
        temp
      })

    }
  }
  // observers: { //监听传递过来的全选状态,当全选状态变化时，更改所有列表成员状态
  //   'selected': function (newValue) {
  //     const temp = this.data.temp
  //     for (let item of temp){
  //       item = newValue
  //     }
  //
  //     this.setData({
  //       temp
  //     })
  //   }
  // }
})
