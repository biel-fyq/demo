Page({
    data: {
      content: '' // 存储用户输入的内容
    },
    
    // 输入框内容变化时触发
    onInput: function(e) {
      this.setData({
        content: e.detail.value
      });
    },
    
    // 提交按钮点击事件
    submitContent: function() {
      const content = this.data.content.trim();
      
      if (!content) {
        wx.showToast({
          title: '请输入内容',
          icon: 'none'
        });
        return;
      }
      
      // 在这里可以处理提交的内容，如发送到服务器或保存到本地
      console.log('用户输入的内容:', content);
      
      // 显示提交成功提示
      wx.showToast({
        title: '提交成功',
        icon: 'success',
        duration: 2000
      });
      
      // 清空输入框
      this.setData({
        content: ''
      });
      
      // 可选：延迟后返回上一页
      setTimeout(() => {
        wx.navigateBack();
      }, 2000);
    }
  });