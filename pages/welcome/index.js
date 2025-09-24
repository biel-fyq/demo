// pages/welcome/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hasUserInfo: true,
    showIconPage: true,
    showWelcomePage: false,
    showLoginPage: false,
    currentStep: 1 // 1: 图标页面, 2: 欢迎页面, 3: 隐藏, 4: 再次显示, 5: 隐藏, 6: 登录页面
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.startPageSequence();
  },

  /**
   * 开始页面切换序列
   */
  startPageSequence() {
    // 第一步：显示图标页面2秒
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

      // 2秒后隐藏欢迎页面
      setTimeout(() => {
        this.setData({
          showWelcomePage: false,
          currentStep: 4
        });

        setTimeout(() => {
          setTimeout(() => {
            this.setData({
              showLoginPage: true,
              currentStep: 6
            });
          }, 500); // 短暂延迟后显示登录页面
        }, 500); // 隐藏1秒后再次显示

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