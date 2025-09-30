const app = getApp();

Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    calendarTitle: '',
    weekTitles: ['日', '一', '二', '三', '四', '五', '六'],
    calendarGrid: [],
    checkedDays: [1, 3, 15, 16, 17, 18, 20, 21, 25, 26, 29],

    showWateringCan: false,
    showPopup: false,
    showMedal: false,
    progress: 30,
    showCalendar: false,


    flowerimgs: [
      "https://yinyan-mini.cn-heyuan.oss.aliyuncs.com/20250924/0_1758712908026.png",
      "https://yinyan-mini.cn-heyuan.oss.aliyuncs.com/20250924/1_1758712934091.png",
      "https://yinyan-mini.cn-heyuan.oss.aliyuncs.com/20250924/2_1758712954997.png",
      "https://yinyan-mini.cn-heyuan.oss.aliyuncs.com/20250924/3_1758712975564.png",
      "https://yinyan-mini.cn-heyuan.oss.aliyuncs.com/20250924/4_1758713001521.png",
      "https://yinyan-mini.cn-heyuan.oss.aliyuncs.com/20250924/5_1758713022815.png",
      "https://yinyan-mini.cn-heyuan.oss.aliyuncs.com/20250924/6_1758713088283.png",
      "https://yinyan-mini.cn-heyuan.oss.aliyuncs.com/20250924/7_1758713129426.png"
    ],
    rewardImg:[
      {
        name:'21',
        top:'https://yinyan-mini.cn-heyuan.oss.aliyuncs.com/20250930/37_1759210273912.png',
        bottom:'https://yinyan-mini.cn-heyuan.oss.aliyuncs.com/20250930/30_1759211620036.png'
      },
      {
        name:'92',
        top:'https://yinyan-mini.cn-heyuan.oss.aliyuncs.com/20250930/39_1759210345073.png',
        bottom:'https://yinyan-mini.cn-heyuan.oss.aliyuncs.com/20250930/31_1759211662852.png'
      }
    ]
  },

  waterPlant() {
    this.setData({
      showWateringCan: true
    })
  },
  showCalendar(){
    this.setData({showCalendar:true})
  },



  onLoad() {
    this.initCalendar();
  },

  // 初始化日历
  initCalendar() {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    this.buildCalendar(year, month, this.data.checkedDays);
  },

  // 构建日历
  buildCalendar(year, month, checkedDays = []) {
    // 检测连续日期
    const consecutiveGroups = this.findConsecutiveGroups(checkedDays);

    // 生成日历网格
    const firstDay = new Date(year, month - 1, 1);
    const startWeekday = firstDay.getDay();
    const days = new Date(year, month, 0).getDate();
    const grid = [];

    // 添加空白格子
    for (let i = 0; i < startWeekday; i++) {
      grid.push({
        type: 'blank'
      });
    }

    // 添加日期格子
    for (let d = 1; d <= days; d++) {
      const checked = checkedDays.includes(d);
      const consecutiveInfo = this.getConsecutiveInfo(d, consecutiveGroups);
      grid.push({
        type: 'day',
        day: d,
        checked,
        ...consecutiveInfo
      });
    }

    // 标记今天
    const today = new Date();
    const updated = grid.map(c => {
      if (c.type === 'day' && c.day === today.getDate()) {
        return {
          ...c,
          isToday: true
        };
      }
      return c;
    });

    this.setData({
      calendarTitle: `${year}年${month}月`,
      calendarGrid: updated
    });
  },

  // 检测连续日期组
  findConsecutiveGroups(checkedDays) {
    if (!checkedDays || checkedDays.length === 0) return [];

    const sorted = [...checkedDays].sort((a, b) => a - b);
    const groups = [];
    let currentGroup = [sorted[0]];

    for (let i = 1; i < sorted.length; i++) {
      if (sorted[i] === sorted[i - 1] + 1) {
        // 检查是否在同一行
        if (this.isSameRow(sorted[i - 1], sorted[i])) {
          // 连续日期且在同一行，加入当前组
          currentGroup.push(sorted[i]);
        } else {
          // 连续日期但不在同一行，结束当前组并开始新组
          if (currentGroup.length > 1) {
            groups.push(currentGroup);
          }
          currentGroup = [sorted[i]];
        }
      } else {
        // 不连续，开始新组
        if (currentGroup.length > 1) {
          groups.push(currentGroup);
        }
        currentGroup = [sorted[i]];
      }
    }

    // 添加最后一组
    if (currentGroup.length > 1) {
      groups.push(currentGroup);
    }

    return groups;
  },
  hideCalendar(){
    console.log(1111);
    this.setData({showCalendar:false})
  },

  // 判断两个日期是否在同一行
  isSameRow(day1, day2) {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;

    // 获取第一个日期在日历中的位置
    const firstDay = new Date(year, month - 1, 1);
    const startWeekday = firstDay.getDay();
    const day1Position = startWeekday + day1 - 1;
    const day2Position = startWeekday + day2 - 1;

    // 计算行号（从0开始）
    const day1Row = Math.floor(day1Position / 7);
    const day2Row = Math.floor(day2Position / 7);

    return day1Row === day2Row;
  },

  // 获取连续日期信息
  getConsecutiveInfo(day, consecutiveGroups) {
    for (let group of consecutiveGroups) {
      if (group.includes(day)) {
        const index = group.indexOf(day);
        return {
          isConsecutive: true,
          isStart: index === 0,
          isEnd: index === group.length - 1,
          isMid: index > 0 && index < group.length - 1,
          groupLength: group.length
        };
      }
    }
    return {
      isConsecutive: false,
      isStart: false,
      isEnd: false,
      isMid: false,
      groupLength: 0
    };
  },

  // 模拟更新后端数据
  updateCheckedDays(newCheckedDays) {
    this.setData({
      checkedDays: newCheckedDays
    });
    this.initCalendar();
  },


  onReady() {},


  onShow() {
    if (this.getTabBar && this.getTabBar()) {
      const tabbar = this.getTabBar && this.getTabBar();
      tabbar && tabbar.syncCurrentPage && tabbar.syncCurrentPage();
    }
  },
})