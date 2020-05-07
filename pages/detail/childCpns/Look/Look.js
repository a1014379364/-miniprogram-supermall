// pages/detail/childCpns/Look/Look.js
// import {debounce} from '../../../../utils/util.js'

Component({
  data:{
    count:0
  },
  properties: {
    detailInfo:{
      type:Object,
      value:{}
    }
  },
  methods:{
    loadImage() {
      this.setData({
        count : this.data.count + 1
      })
      if(this.data.count === this.data.detailInfo.detailImage[0].list.length){
        this.triggerEvent('imageLoad', {}, {})
      }
    }
  }
})
