Component({
  data: {
    activeIndex: 0,
    safeBottomRpx: 0,
    contentBottomRpx: 0,
    items: [
      { text: '新生', iconPath: 'https://yinyan-mini.cn-heyuan.oss.aliyuncs.com/20250924/Group 1321315011_1758703383275.png', pagePath: '/pages/home/index' },
      { text: '结界', iconPath: 'https://yinyan-mini.cn-heyuan.oss.aliyuncs.com/20250924/Group 1321314835_1758703395709.png', pagePath: '/pages/barrier/index' },
      { text: '信签', iconPath: 'https://yinyan-mini.cn-heyuan.oss.aliyuncs.com/20250924/Group 1321314837_1758703407817.png', pagePath: '/pages/letter/index' },
      { text: '星火', iconPath: 'https://yinyan-mini.cn-heyuan.oss.aliyuncs.com/20250924/Group 1321314832_1758703419535.png', pagePath: '/pages/movie/index' },
      { text: '自我', iconPath: 'https://yinyan-mini.cn-heyuan.oss.aliyuncs.com/20250924/Group 1321314838_1758703432214.png', pagePath: '/pages/my/index' }
    ]
  },
  lifetimes: {
    attached() {
      try {
        const win = (wx.getWindowInfo && wx.getWindowInfo()) 
        const insets = win.safeAreaInsets || {};
        const safeArea = win.safeArea || {};
        const bottomInsetPx = (typeof insets.bottom === 'number')
          ? insets.bottom
          : Math.max(0, (win.screenHeight || 0) - (safeArea.bottom || (win.screenHeight || 0)));
        const rpxPerPx = 750 / (win.windowWidth || win.screenWidth || 375);
        const safeBottomRpx = Math.round(bottomInsetPx * rpxPerPx);
        const baseLiftRpx = -50; // 默认抬升
        const contentBottomRpx = safeBottomRpx > 0 ? (safeBottomRpx + baseLiftRpx) : 12;
        this.setData({ safeBottomRpx, contentBottomRpx });
      } catch (e) {
        this.setData({ safeBottomRpx: 0, contentBottomRpx: 12 });
      }
    }
  },
  methods: {
    // 运行期微调抬升高度（rpx）
    setLift(liftRpx = 0) {
      const safe = this.data.safeBottomRpx || 0;
      const contentBottomRpx = safe > 0 ? (safe + liftRpx) : 12;
      this.setData({ contentBottomRpx });
    },
    switchTab(index) {
      this.setData({ activeIndex: index });
    },
    onIconTap(e) {
      const index = e.currentTarget.dataset.index;
      const pagePath = this.data.items[index].pagePath;
      this.switchTab(index);
      if (pagePath) wx.switchTab ? wx.switchTab({ url: pagePath }) : wx.reLaunch({ url: pagePath });
    }
  }
});

