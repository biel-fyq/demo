Page({
  data: {
    sealPopupModal: false,
    showLetterListModal: false,
    days: 91, // 给多少天后的自己写信
    name: '夏～', // 收信人昵称
    date: '2025-09-11', // 日期
    time: '15:23', // 时间
    letterList: [{
        date: '2025.6.7',
        preview: '和我讨厌的人拜拜信...',
        content: '和我讨厌的人拜拜信，希望我们永远不要再见面了。'
      },
      {
        date: '2025.6.7',
        preview: '和我讨厌的人拜拜信...',
        content: '和我讨厌的人拜拜信，希望我们永远不要再见面了。'
      },
      {
        date: '2025.6.7',
        preview: '和我讨厌的人拜拜信...',
        content: '和我讨厌的人拜拜信，希望我们永远不要再见面了。'
      }
    ]
  },

  onLoad: function () {
    // 这里可以添加页面加载时的逻辑
    // 例如从缓存中获取用户设置或信件数据
  },
  onShow() {
    if (this.getTabBar && this.getTabBar()) {
      this.getTabBar().switchTab(2);
    }
  },
  openLetter() {
    this.setData({
      sealPopupModal: true
    })

  },
  writeLetter() {
    wx.navigateTo({
      url: '/pages/letter/view-letter/index',
    })
  },
  onConfirm() {
    this.setData({
      sealPopupModal: false
    })
  },

  // 显示信件列表
  showLetterList() {
    this.setData({
      showLetterListModal: true
    });
  },

  // 隐藏信件列表
  hideLetterList() {
    this.setData({
      showLetterListModal: false
    });
  },

  // 查看信件
  viewLetter(e) {
    const index = e.currentTarget.dataset.index;
    const letter = this.data.letterList[index];
    wx.showModal({
      title: '信件内容',
      content: letter.content,
      showCancel: false,
      confirmText: '确定'
    });
  },

  // 点击右上角信件列表按钮
  goToMailList: function () {
    wx.navigateTo({
      url: '/pages/mailList/mailList'
    });
  },

  // 打开全屏信件阅读页
  openViewLetter() {
    wx.navigateTo({
      url: '/pages/letter/view-letter/index'
    });
  },

  // 点击信封进入写信页面
  writeToLetter: function () {
    wx.navigateTo({
      url: '/pages/writeLetter/writeLetter'
    });
  },

  // 页面初始化时注册事件监听
  onReady: function () {
    // 给信封添加点击事件
    this.envelopeCtx = wx.createSelectorQuery().select('.envelope')
    this.envelopeCtx.on('tap', this.writeToLetter).exec()

    // 给导航按钮添加点击事件
    this.mailIconCtx = wx.createSelectorQuery().select('.mail-icon')
    this.mailIconCtx.on('tap', this.goToMailList).exec()
  }
})