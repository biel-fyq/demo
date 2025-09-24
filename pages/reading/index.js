Page({
    data: {
      article: {
        title: "暴雨骤降时",
        paragraphs: [
          "昨夜暴雨骤临时，我关掉了所有发光的面孔。檐角铁马叮咚，雨珠在玻璃窗上织着波斯毯。",
          "忽然明白季老师所谓的“请假”原是这般奢侈，水仙在瓷盘里舒展腰肢的响动，墨汁在宣纸上晕染晨雾的姿态，乃至茶棍在杯中缓缓站立的庄严，都在黑暗里显影成银盐相片。",
          "雨水漫过空调外机时，我听见无数个被遗忘的黄昏在排水管里凉凉流淌——那个蹲在胡同口看蚂蚁搬家的孩子，那个在图书馆抄诗抄到暮色四合的青年，原来都住在时光的褶皱里..."
        ]
      },
    },
  
    onLoad(options) {
      const articleId = options.id || 1  // 从路由参数拿文章 id
      this.fetchArticle(articleId)
    },
  
    // 模拟获取文章数据
    fetchArticle(id) {
      // 真实场景用 wx.request 调后端接口
    //   wx.request({
    //     url: `https://example.com/api/article/detail?id=${id}`,
    //     success: (res) => {
    //       this.setData({ article: res.data })
    //     },
    //     fail: () => {
    //       wx.showToast({ title: '加载失败', icon: 'none' })
    //     }
    //   })
    },
  
    toCatalog() {
      console.log(1111);
      wx.navigateTo({
        url: '/pages/catalogue/index',
      })
     
    },
    prevChapter() {
      wx.showToast({ title: '上一章', icon: 'none' })
      // 这里可以调用 this.fetchArticle(id - 1)
    },
    nextChapter() {
      wx.showToast({ title: '下一章', icon: 'none' })
      // 这里可以调用 this.fetchArticle(id + 1)
    }
  })
  