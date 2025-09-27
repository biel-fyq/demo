const app = getApp();

Page({
  onShow() {
    if (this.getTabBar && this.getTabBar()) {
      const tabbar = this.getTabBar && this.getTabBar();
      tabbar && tabbar.syncCurrentPage && tabbar.syncCurrentPage();
    }
  },

  /**
   * 页面的初始数据
   */
  data: {
    StatusBar: app.globalData.StatusBar,
    
    meritoriousServiceImg: [
      "https://yinyan-mini.cn-heyuan.oss.aliyuncs.com/20250922/0b38f0aef8009c93e7e5a3ed6c6e6f3427ed7491_1758553173851.png",
      "https://yinyan-mini.cn-heyuan.oss.aliyuncs.com/20250922/0b38f0aef8009c93e7e5a3ed6c6e6f3427ed7491_1758553173851.png"
    ],
    showLogoutConfirm: false


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },
  feedBackSub() {
    wx.navigateTo({ url: '/pages/feedback/index' });


  },

  onLogoutTap() {
    this.setData({ showLogoutConfirm: true });
  },
  onCancelLogout() {
    this.setData({ showLogoutConfirm: false });
  },
  onConfirmLogout() {
    this.setData({ showLogoutConfirm: false });
    // TODO: 实际退出逻辑（清理缓存/跳转登录等）
    wx.showToast({ title: '已退出', icon: 'success' });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})