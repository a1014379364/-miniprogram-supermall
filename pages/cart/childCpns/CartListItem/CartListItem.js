// pages/cart/childCpns/CartListItem/CartListItem.js
Component({
  data:{
    isActive:false
  },
  properties: {
    product:{
      type:Object,
      value:{}
    }
    // selected:{
    //   type:Object,
    //   value:false
    // }
  },
  methods:{
    handleClick(){
      this.setData({
        isActive: !this.data.isActive
      })
      this.triggerEvent('itemClick',{},{})
    }
  }
  // observers: { //监听传递过来的全选状态,当全选状态变化时，更改列表成员状态
  //   'selected': function (newValue) {
  //     this.setData({
  //       isActive:this.data.selected
  //     })
  //   }
  // }
})
