const homeMixin = {
  data: function(){
    return {
      nowDate: '',
			day: '',
			homeData: [], // 首页菜单数据列表
    }
  },
  methods: {
    getDate() {
      let nowDate = new Date() // 当前时间
      let endDate = new Date("dec 1 2025 00:00:00") // 结束时间2025-12-1
      let endTime = endDate.getTime() // 结束时间毫秒数
      let nowTime = nowDate.getTime() // 当前时间毫秒数
      this.day = Math.floor(((endTime - nowTime) / (60 * 60 * 24 * 1000))) // 剩余天数
      let date = nowDate.toLocaleDateString().replace(/\//g, '-') // 获取当前时间日期
      let time = nowDate.toLocaleTimeString() // 获取当前时间时间
      if (time.includes('上午')) {
        let hour = 0
        if (Number(time.slice(2, 4)) == 12) {
          hour = Number(time.slice(2, 4)) - 12 + '0'
        } else {
          hour = '0' + Number(time.slice(2, 3))
        }
        time = time.replace(/上午[0-9][0-9]/, hour)
        this.nowDate = date + " " + time
        return
      }
      if (time.includes('下午')) {
        let hour = Number(time.split(':')[0].slice(2)) + 12 + ''
        time = time.replace(/下午[0-9]{1,2}/, hour)
        this.nowDate = date + " " + time
        return
      }
    },
  },
  //页面加载时调用
  created: function () {//新增菜单需要在这个地方加一个判断
    this.getDate()
    setInterval(() => {
      this.getDate()
    }, 1000)
  }
}