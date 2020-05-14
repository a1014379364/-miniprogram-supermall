// pages/cart/childCpns/BottomControl/BottomControl.js
Component({
  properties: {
    isAll:{
      type:Boolean,
      value:false
    }
  },
  methods:{
    checkClick(){
      //发送需要实现的状态
      this.triggerEvent('selectClick',{isAll:!this.data.isAll},{})
    }
  }
})
