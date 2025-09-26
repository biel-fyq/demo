Component({
  data: {
    selected: 0,
    color: '#666',
    activeColor: '#1989fa',
    // 与 app.json 的 tabBar.list 完全一致（带前导 /）
    list: [
      { pagePath: '/pages/home/index', text: '新生', iconPath: '/img/icon/1.png', selectedIconPath: '/img/icon/1.png' },
      { pagePath: '/pages/barrier/index', text: '结界', iconPath: '/img/icon/2.png', selectedIconPath: '/img/icon/2.png' },
      { pagePath: '/pages/letter/index', text: '信签', iconPath: '/img/icon/3.png', selectedIconPath: '/img/icon/3.png' },
      { pagePath: '/pages/movie/index', text: '星火', iconPath: '/img/icon/4.png', selectedIconPath: '/img/icon/4.png' },
      { pagePath: '/pages/my/index', text: '自我', iconPath: '/img/icon/5.png', selectedIconPath: '/img/icon/5.png' }
    ]
  },
  methods: {
    onChange(event) {
      // 兼容 vant 的 change 事件（detail 为索引）和自定义 dataset 触发
      const index = (event && typeof event.detail === 'number')
        ? event.detail
        : Number(event?.currentTarget?.dataset?.index || 0);
      const item = this.data.list[index];
      if (!item) return;
      const url = item.pagePath; // 已包含前导 /
      this.setData({ selected: index });
      wx.switchTab({ url });
    },
    setSelected(index) {
      if (typeof index === 'number') this.setData({ selected: index });
    }
  }
});

