Page({
    data: {
        letterList: [
            {
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

    onLoad: function (options) {
        // 页面加载时的逻辑
        console.log('信件列表页面加载');
    },

    onShow() {
        // 页面显示时更新tabBar状态
        if (this.getTabBar && this.getTabBar()) {
            this.getTabBar().switchTab(2);
        }
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

    // 返回上一页
    goBack() {
        wx.navigateBack();
    }
});
