Page({

  data: {
    categories: [
      { title: '众生万象', subtitle: '刻画市井人物与生活场景', icon: '/img/16.png' },
      { title: '旅途拾珍', subtitle: '记录行旅见闻与地域文化', icon: '/img/16.png' },
      { title: '闲情偶寄', subtitle: '展现莳花弄草等文人雅趣', icon: '/img/16.png' },
      { title: '浮生杂忆', subtitle: '探讨生命哲学与处世智慧', icon: '/img/16.png' }
    ]
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
  ,
  navigateToDetail(e){
    const { category } = e.currentTarget.dataset;
    console.log('catalogue go to', category);
  }
})