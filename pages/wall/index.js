Page({
    data: {
      content: '' 
    },
    
    onInput: function(e) {
      this.setData({
        content: e.detail.value
      });
    },
    
    submitContent: function() {
      const content = this.data.content.trim();
      
      if (!content) {
        wx.showToast({
          title: '请输入内容',
          icon: 'none'
        });
        return;
      }
      
      console.log('用户输入的内容:', content);
      
      wx.showToast({
        title: '提交成功',
        icon: 'success',
        duration: 2000
      });
      
      this.setData({
        content: ''
      });
      
      setTimeout(() => {
        wx.navigateBack();
      }, 2000);
    }
  });