// pages/catalogue/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    categories: [
      { title: '众生万象', subtitle: '刻画市井人物与生活场景', icon: '/img/16.png' },
      { title: '旅途拾珍', subtitle: '记录行旅见闻与地域文化', icon: '/img/16.png' },
      { title: '闲情偶寄', subtitle: '展现莳花弄草等文人雅趣', icon: '/img/16.png' },
      { title: '浮生杂忆', subtitle: '探讨生命哲学与处世智慧', icon: '/img/16.png' }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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
  ,
  navigateToDetail(e){
    const { category } = e.currentTarget.dataset;
    console.log('catalogue go to', category);
  }
})