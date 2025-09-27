// app.js
App({
  onLaunch() {
    // 获取菜单按钮布局
    this.setWindowInfo()

    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null
  },
  setWindowInfo() {
    const windowInfo = wx.getWindowInfo()
    const capsule = wx.getMenuButtonBoundingClientRect();
    // 状态栏高度
    this.globalData.StatusBar = windowInfo.statusBarHeight;
    if (capsule) {
      this.globalData.Custom = capsule;
      this.globalData.CustomBar = capsule.bottom + capsule.top - windowInfo.statusBarHeight;
    } else {
      this.globalData.CustomBar = windowInfo.statusBarHeight + 50;
    }
  }
})
