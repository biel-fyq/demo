const app = getApp();

Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,

    currentTab: 0,
    tabs: ['破碎清单', '再见南墙'],
    tags: [
      '狂妄自大', '毒蛇且温柔', '拾杠艺术家', '中二病患者', '铁憨憨'
    ],
    categories: [
      { title: '众生万象', subtitle: '刻画市井人物与生活场景', icon: '/img/16.png' },
      { title: '旅途拾珍', subtitle: '记录行旅见闻与地域文化', icon: '/img/16.png' },
      { title: '闲情偶寄', subtitle: '展现莳花弄草等文人雅趣', icon: '/img/16.png' },
      { title: '浮生杂忆', subtitle: '探讨生命哲学与处世智慧', icon: '/img/16.png' }
    ]
  },


  onLoad(options) {

  },
  writeEvent() {
    wx.navigateTo({
      url: '/pages/wall/index',
    })
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
  ,
  navigateToDetail(e) {
    wx.navigateTo({ url: `/pages/write-name/index` })
  },

  navigateToWall() {
    wx.navigateTo({ url: `/pages/wall/index` })
  },

  switchTab(e) {
    const index = e.currentTarget.dataset.index;
    if (this.data.currentTab !== index) {
      this.setData({
        currentTab: index
      });
    }
  },
})