Page({
  data: {
    content: ''
  },
  onInput(e) {
    this.setData({ content: e.detail.value });
  },
  onShareAppMessage() { return { title: '写给未来的一封信' } },
});

