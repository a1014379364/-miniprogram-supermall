//app.js
App({
  globalData:{
    cartList:[],
    addProduct:function (product) {
      let isNew = true
      for(let item of this.cartList){//遍历购物车列表，如果已添加，则数目加一
        if(product.iid === item.iid){
          product.count += 1
          isNew = false
          break
        }
      }

      if(isNew){//没被添加，则新增进购物车列表
        product.count = 1
        this.cartList.push(product)
      }

      return isNew //同时让isAdd作为是否新增种类的标志
    }
  }
})