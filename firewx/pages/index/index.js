//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
   
  },
  changeMsg(){
    //改单个属性
    app.store.setState({
      msg:'罗网'
    })
  },
  
  onLoad: function () {
   
  }

})
