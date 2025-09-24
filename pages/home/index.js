Page({
  data: {
    showWateringCan:false,
    showPopup:false,
    progress: 30,
    showCalendar: false,
    calendarTitle: '',
    weekTitles: ['日','一','二','三','四','五','六'],
    calendarGrid: [],
    flowerimgs:[
      "https://yinyan-mini.cn-heyuan.oss.aliyuncs.com/20250924/0_1758712908026.png",
      "https://yinyan-mini.cn-heyuan.oss.aliyuncs.com/20250924/1_1758712934091.png",
      "https://yinyan-mini.cn-heyuan.oss.aliyuncs.com/20250924/2_1758712954997.png",
      "https://yinyan-mini.cn-heyuan.oss.aliyuncs.com/20250924/3_1758712975564.png",
      "https://yinyan-mini.cn-heyuan.oss.aliyuncs.com/20250924/4_1758713001521.png",
      "https://yinyan-mini.cn-heyuan.oss.aliyuncs.com/20250924/5_1758713022815.png",
      "https://yinyan-mini.cn-heyuan.oss.aliyuncs.com/20250924/6_1758713088283.png",
      "https://yinyan-mini.cn-heyuan.oss.aliyuncs.com/20250924/7_1758713129426.png"
    ]
  },
  waterPlant(){
    this.setData({showWateringCan:true})
  },
  closePopup(){
    this.setData({ showPopup: false });
  },
  // ===== 日历 =====
  showCalendar(){
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    // 示例数据（替换为后端返回）
    const checked = [2,3,6,9,12,13,15,18,19,20,21,22,23,24];
    this.buildCalendar(year, month, checked);
    // 标记今天（仅 UI 标识，不影响分组）
    const updated = this.data.calendarGrid.map(c => {
      if (c.type === 'day' && c.day === today.getDate()) return { ...c, isToday: true };
      return c;
    });
    this.setData({ calendarGrid: updated, showCalendar: true });
  },
  hideCalendar(){ this.setData({ showCalendar: false }); },
  onHide(){},
  buildCalendar(year, month, checkedDays = [], groups = []){
    // 1) 若未传 groups，则根据 checkedDays 自动分段（连续天合并为一组）
    if (!groups || groups.length === 0) {
      const sorted = [...checkedDays].sort((a,b)=>a-b);
      const temp=[]; let seg=[];
      sorted.forEach((d,i)=>{ if(i===0||d===sorted[i-1]+1){seg.push(d);} else { temp.push(seg); seg=[d]; }});
      if(seg.length) temp.push(seg); groups=temp;
    }

    // 2) 为每个打勾的日期打上分组颜色与角色（start/mid/end/single）
    const colors = ['group-a','group-b','group-c'];
    const dayToGroup = new Map();
    groups.forEach((arr, gi) => {
      const colorCls = colors[gi % colors.length];
      if (!arr || arr.length === 0) return;
      if (arr.length === 1) {
        dayToGroup.set(arr[0], { cls: colorCls, role: 'single' });
      } else {
        arr.forEach((d, idx) => {
          let role = 'mid';
          if (idx === 0) role = 'start';
          else if (idx === arr.length - 1) role = 'end';
          dayToGroup.set(d, { cls: colorCls, role });
        });
      }
    });

    // 3) 生成日历网格
    const firstDay = new Date(year, month-1, 1);
    const startWeekday = firstDay.getDay();
    const days = new Date(year, month, 0).getDate();
    const grid=[];
    for(let i=0;i<startWeekday;i++) grid.push({type:'blank'});
    for(let d=1; d<=days; d++){
      const info = dayToGroup.get(d);
      const checked = checkedDays.includes(d);
      const groupClass = info ? `${info.cls} ${info.role}` : '';
      grid.push({ type:'day', day:d, checked, groupClass });
    }

    this.setData({ calendarTitle: `${year}年${month}月`, calendarGrid: grid });
  },

  onLoad(options) {
    // 若进入页面时就展示弹框，需要先构建当月日历数据
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    // 可替换为后端返回的勾选数据
    const checked = [];
    this.buildCalendar(year, month, checked);
    // 标记今天（不改变分组，仅 UI 标识）
    const updated = this.data.calendarGrid.map(c => {
      if (c.type === 'day' && c.day === today.getDate()) return { ...c, isToday: true };
      return c;
    });
    this.setData({ calendarGrid: updated });
  },
 
  // 供后端数据调用：渲染指定月份
  renderCalendarFromServer(payload){
    // payload: { year, month, checkedDays: number[], groups?: number[][] }
    const { year, month, checkedDays = [], groups = [] } = payload || {};
    this.buildCalendar(year, month, checkedDays, groups);
    this.setData({ showCalendar: true });
  },
  
 
  onReady() {
  },

 
  onShow() {
    if (this.getTabBar && this.getTabBar()) {
      this.getTabBar().switchTab(0);
    }
  },
})