const menuMixin = { // 标签切换，翻页等混入
  data: function () {
    return {
      currentMenu: 'home', // 首页
      currentMenuData: [], // 其它菜单文章列表
      currentPage: 1, // 当前页
      total: 1, // 页数总计
      pageSize: 10, // 每页条数
    }
  },
  methods: {
    switchMenu(menu) {
      sessionStorage.setItem('currentMenu', menu)
      this.currentPage = 1
      if (menu != this.currentMenu) {
        if (menu == 'home') {
          console.log('首页')
          this.currentMenu = menu
        } else {
          const menuData = articleData[menu]
          const total = Math.ceil(menuData.length / this.pageSize)
          this.total = total
          this.currentMenu = menu
          if (total <= 1) {
            this.currentMenuData = menuData
          } else {
            this.currentMenuData = menuData.slice(0, this.pageSize)
          }
        }
      }
    },
    prePage() {
      if (this.currentPage > 1) {
        this.currentPage = this.currentPage - 1
        const start = (this.currentPage - 1) * this.pageSize
        const end = this.currentPage * this.pageSize
        this.currentMenuData = articleData[this.currentMenu].slice(start, end)
        sessionStorage.setItem('currentPage', this.currentPage)
      }
    },
    nextPage() {
      if (this.currentPage < this.total) {
        this.currentPage = this.currentPage + 1
        const start = (this.currentPage - 1) * this.pageSize
        const end = this.currentPage * this.pageSize
        this.currentMenuData = articleData[this.currentMenu].slice(start, end)
        sessionStorage.setItem('currentPage', this.currentPage)
      }
    },
    changePage() {
      let currentPage = this.currentPage
      Math.ceil(currentPage)
      if (currentPage < 1) {
        currentPage = 1
      } else if (currentPage > this.total) {
        currentPage = this.total
      }
      const start = (currentPage - 1) * this.pageSize
      const end = currentPage * this.pageSize
      this.currentPage = currentPage
      this.currentMenuData = articleData[this.currentMenu].slice(start, end)
      sessionStorage.setItem('currentPage', currentPage)
    },
  },
  created: function () {//新增菜单需要在这个地方加一个判断
    const currentMenu = sessionStorage.getItem('currentMenu')
    let currentPage = Math.ceil(Number(sessionStorage.getItem('currentPage')))
    if (currentMenu) {
      if (currentMenu == 'home') {
        console.log('home')
      } else {
        const menuData = articleData[currentMenu]
        const total = Math.ceil(menuData.length / this.pageSize)
        if (1 <= currentPage && currentPage <= total) {
          // console.log(currentPage)
        } else {
          currentPage = 1
        }
        const start = (this.currentPage - 1) * this.pageSize
        const end = this.currentPage * this.pageSize

        this.total = total
        this.currentMenu = currentMenu
        this.currentPage = currentPage
        this.currentMenuData = articleData[currentMenu].slice(start, end)
      }
    }
  }
}