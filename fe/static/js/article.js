import './vue.min.js'
window.onload = function () {
  new Vue({
    el: "#app",
    data: function () {
      return {
        visiable: true
      }
    },
    template: `
    <section id="app" v-cloak v-show="visiable">
      <p @click="close">关闭</p>
      <div>文章右侧边栏，广告</div>
    </section>`,
    methods: {
      close () {
        console.log(33333, this.visiable)
        this.visiable = !this.visiable
      }
    },
  })





  
}