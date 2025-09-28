Component({
  lifetimes: {
    ready: function() {
      const pages = getCurrentPages()
      if (pages.length > 0) {
        const index = this.data.items.findIndex(({ pagePath }) => pagePath.endsWith(pages[0]?.route))
        this.setData({ selected: index})
      }
    },
  },
  data: {
    selected: 0,
    color: '#666',
    activeColor: '#1989fa',
    // 与 app.json 的 tabBar.list 完全一致（带前导 /）
    items: [
      { pagePath: '/pages/home/index', text: '新生', iconPath:'https://yinyan-mini.cn-heyuan.oss.aliyuncs.com/20250924/Group 1321315011_1758703383275.png', selectedIconPath: 'https://yinyan-mini.cn-heyuan.oss.aliyuncs.com/20250924/Group 1321315011_1758703383275.png' },
      { pagePath: '/pages/barrier/index', text: '结界', iconPath: 'https://yinyan-mini.cn-heyuan.oss.aliyuncs.com/20250924/Group 1321314835_1758703395709.png', selectedIconPath: '/img/icon/2.pnghttps://yinyan-mini.cn-heyuan.oss.aliyuncs.com/20250924/Group 1321314835_1758703395709.png' },
      { pagePath: '/pages/letter/index', text: '信签', iconPath: 'https://yinyan-mini.cn-heyuan.oss.aliyuncs.com/20250924/Group 1321314837_1758703407817.png', selectedIconPath: 'https://yinyan-mini.cn-heyuan.oss.aliyuncs.com/20250924/Group 1321314837_1758703407817.png' },
      { pagePath: '/pages/movie/index', text: '星火', iconPath: 'https://yinyan-mini.cn-heyuan.oss.aliyuncs.com/20250924/Group 1321314832_1758703419535.png', selectedIconPath: 'https://yinyan-mini.cn-heyuan.oss.aliyuncs.com/20250924/Group 1321314832_1758703419535.png' },
      { pagePath: '/pages/my/index', text: '自我', iconPath: 'https://yinyan-mini.cn-heyuan.oss.aliyuncs.com/20250924/Group 1321314838_1758703432214.png', selectedIconPath: 'https://yinyan-mini.cn-heyuan.oss.aliyuncs.com/20250924/Group 1321314838_1758703432214.png' }
    ]
  },
  methods: {
    onChange(event) {
      // 兼容 vant 的 change 事件（detail 为索引）和自定义 dataset 触发
      const index = (event && typeof event.detail === 'number')
        ? event.detail
        : Number(event?.currentTarget?.dataset?.index || 0);
      
      if (typeof index !== 'number')
        return

      if (index > this.data.items.length)
        return

      wx.switchTab({ url: this.data.items[index]?.pagePath });
    }
  }
});

