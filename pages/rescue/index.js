Page({

  data: {

  },
  onOpenKit() {
    wx.showToast({
      title: '打开急救包',
      icon: 'none'
    })
  },
  findBag(){
    wx.navigateTo({
      url: '/pages/kit/index',
    })
  },


  onLoad(options) {

  },


  onReady() {

  },


  onShow() {

  },


  onHide() {

  },


  onUnload() {

  },


  onPullDownRefresh() {

  },


  onReachBottom() {

  },

  onShareAppMessage() {

  }
})