Page({


  data: {
    value: ''
  },


  onLoad(options) {

  },
  onBack() {
    wx.navigateBack({ delta: 1 });
  },

  onInput(e) {
    this.setData({ value: e.detail.value });
  },

  onSubmit() {
    if (!this.data.value || !this.data.value.trim()) {
      wx.showToast({ title: '请输入内容', icon: 'none' });
      return;
    }
    wx.showToast({ title: '已提交', icon: 'success' });
    setTimeout(() => wx.navigateBack({ delta: 1 }), 600);
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