const app = getApp();

Page({
  onShow() {
    if (this.getTabBar && this.getTabBar()) {
      const tabbar = this.getTabBar && this.getTabBar();
      tabbar && tabbar.syncCurrentPage && tabbar.syncCurrentPage();
    }
  },


  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    
    meritoriousServiceImg: [
      "https://yinyan-mini.cn-heyuan.oss.aliyuncs.com/20250922/0b38f0aef8009c93e7e5a3ed6c6e6f3427ed7491_1758553173851.png",
      "https://yinyan-mini.cn-heyuan.oss.aliyuncs.com/20250922/0b38f0aef8009c93e7e5a3ed6c6e6f3427ed7491_1758553173851.png"
    ],
    showLogoutConfirm: false


  },


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
    wx.showToast({ title: '已退出', icon: 'success' });
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