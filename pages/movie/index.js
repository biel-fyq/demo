const app = getApp();

Page({
  data: {
    StatusBar: app.globalData.StatusBar,

    currentIndex: 1, // 默认中间那张是选中
    showBookModal: false,
    selectedBook: {},
    posters: [
      {
        src: 'https://yinyan-mini.cn-heyuan.oss.aliyuncs.com/20250922/Mask group (2)_1758550910272.png'
      },
      {
        src: 'https://yinyan-mini.cn-heyuan.oss.aliyuncs.com/20250922/04da6e85daa638cbda4483e3a42840bd6a8ff74e_1758550999261.png'
      },

      {
        src: 'https://yinyan-mini.cn-heyuan.oss.aliyuncs.com/20250922/image 224_1758550945650.png'
      },
    ],
    bookimgs: [
      "https://yinyan-mini.cn-heyuan.oss.aliyuncs.com/20250922/3dc58dd3194288c3a0d4ab40a91b240c55be0915_1758547917576.png",
      "https://yinyan-mini.cn-heyuan.oss.aliyuncs.com/20250922/f1b4cf21b08adbc27a4724f3af543cd5a031b63f_1758552015669.png", "https://yinyan-mini.cn-heyuan.oss.aliyuncs.com/20250922/92fe890b710b7ddc9cad76723f30f6313904aa6b_1758552077354.png", "https://yinyan-mini.cn-heyuan.oss.aliyuncs.com/20250922/cb4c9d6bbe7eb09cd6f8660a03479dec2a500dfa_1758552095015.png"
    ],
    books: [{
      cover: "https://yinyan-mini.cn-heyuan.oss.aliyuncs.com/20250922/3dc58dd3194288c3a0d4ab40a91b240c55be0915_1758547917576.png",
      title: "偶尔向生活 请个假",
      author: "季羡林",
      description: "写的是季羡林的生活,世间万物,百态人生,这个世界都是可爱的。读季羡林的散文,给自己的 生活增添一些平静和希望。"
    },

    {
      cover: "https://yinyan-mini.cn-heyuan.oss.aliyuncs.com/20250922/f1b4cf21b08adbc27a4724f3af543cd5a031b63f_1758552015669.png",
      title: "活着",
      author: "余华",
      description: "人是为了活着本身而活着，而不是为了活着之外的任何事物而活着。"
    },
    {
      cover: "https://yinyan-mini.cn-heyuan.oss.aliyuncs.com/20250922/92fe890b710b7ddc9cad76723f30f6313904aa6b_1758552077354.png",
      title: "百年孤独",
      author: "加西亚·马尔克斯",
      description: "生命中真正重要的不是你遭遇了什么，而是你记住了哪些事，又是如何铭记的。"
    },
    {
      cover: "https://yinyan-mini.cn-heyuan.oss.aliyuncs.com/20250922/cb4c9d6bbe7eb09cd6f8660a03479dec2a500dfa_1758552095015.png",
      title: "平凡的世界",
      author: "路遥",
      description: "生活不能等待别人来安排，要自己去争取和奋斗。"
    }
    ]
  },

  onShow() {
    if (this.getTabBar && this.getTabBar()) {
      const tabbar = this.getTabBar && this.getTabBar();
      tabbar && tabbar.syncCurrentPage && tabbar.syncCurrentPage();
    }
  },

  handlePosterTap(e) {
    const index = e.currentTarget.dataset.index;
    this.setData({
      currentIndex: index
    });
  },

  playVideo() {
    wx.navigateTo({
      url: '/pages/play-the-video/index',
    })
  },

  // 显示书籍弹框
  showBookModal(e) {
    const index = e.currentTarget.dataset.index;
    const selectedBook = this.data.books[index];
    this.setData({
      showBookModal: true,
      selectedBook: selectedBook
    });
  },

  // 隐藏书籍弹框
  hideBookModal() {
    this.setData({
      showBookModal: false,
      selectedBook: {}
    });
  },

  // 去阅读
  goToRead() {
    wx.navigateTo({
      url: '/pages/reading/index',
    })
    this.hideBookModal();
  }
})