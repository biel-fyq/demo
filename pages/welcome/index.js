const app = getApp();
Page({

  data: {
    CustomBar: app.globalData.CustomBar,
    hasUserInfo: true,
    showIconPage: true,
    showWelcomePage: true,
    showLoginPage: false,
    currentStep: 1 // 1: 图标页面, 2: 欢迎页面, 3: 隐藏, 4: 再次显示, 5: 隐藏, 6: 登录页面
  },


  onLoad(options) {
    this.startPageSequence();
  },


  startPageSequence() {
    this.setData({
      showIconPage: true,
      showWelcomePage: false,
      showLoginPage: false,
      currentStep: 1
    });

    // 2秒后显示欢迎页面
    setTimeout(() => {
      this.setData({
        showIconPage: false,
        showWelcomePage: true,
        currentStep: 2
      });

      // 2秒后切换到登录页面（去掉中间空白等待）
      setTimeout(() => {
        this.setData({
          showWelcomePage: false,
          showLoginPage: true,
          currentStep: 6
        });

      }, 2000); // 显示2秒

    }, 2000); // 图标页面显示2秒
  },

  /**
   * 微信登录
   */
  onWechatLogin() {
    wx.navigateTo({
      url: "/pages/index/index",
    });
  },

  /**
   * 取消登录
   */
  onCancel() {
    wx.showToast({
      title: '已取消登录',
      icon: 'none'
    });
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