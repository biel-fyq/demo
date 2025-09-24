Page({
    data: {
      name: '雪山下的老黑',
      newDefect: '',
      defects: ['毒舌且温柔', '抬杠艺术家'],
      tagList: [
        '间歇性高冷', '心理年龄只有三岁', '铁憨憨',
        '抬杠艺术家', '中二病患者', '完美主义',
        '行走的解忧杂货店', '毒舌且温柔', '铁憨憨',
        '社恐自闭小孩', '懒癌晚期患者',
        '国家一级', '实践废柴'
      ],
      selectedTags: ['毒舌且温柔']
    },
  
    // 输入名称
    inputName(e) {
      this.setData({
        name: e.detail.value
      });
    },
  
    // 删除名称
    deleteName() {
      this.setData({
        name: ''
      });
    },
  
    // 添加缺点
    inputNewDefect(e) {
      this.setData({
        newDefect: e.detail.value
      });
    },
  
    // 提交新缺点
    addDefect() {
      const { newDefect, defects } = this.data;
      if (newDefect && !defects.includes(newDefect)) {
        this.setData({
          defects: [...defects, newDefect],
          newDefect: ''
        });
      }
    },
  
    // 删除缺点
    deleteDefect(e) {
      const index = e.currentTarget.dataset.index;
      const defects = this.data.defects;
      defects.splice(index, 1);
      this.setData({ defects });
    },
  
    // 选择标签
    selectTag(e) {
      const tag = e.currentTarget.dataset.tag;
      const { selectedTags } = this.data;
      
      if (selectedTags.includes(tag)) {
        // 取消选择
        this.setData({
          selectedTags: selectedTags.filter(t => t !== tag)
        });
      } else {
        // 选择标签
        this.setData({
          selectedTags: [...selectedTags, tag]
        });
      }
    },
  
    // 确定按钮
    confirm() {
      console.log('名称:', this.data.name);
      console.log('缺点:', this.data.defects);
      console.log('选择标签:', this.data.selectedTags);
      
      wx.showToast({
        title: '保存成功',
        icon: 'success'
      });
    }
  })