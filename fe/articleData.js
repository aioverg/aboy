//标签数据与目录数据中的标签值要相等。

const menuData = [
    { key: 'home', value: '首页'},
    { key: 'html', value: 'HTML' },
    { key: 'css', value: 'CSS' },
    { key: 'javascript', value: 'JavaScript' },
    { key: 'http', value: 'HTTP' },
    { key: 'git', value: 'Git' },
    { key: 'node', value: 'Node' },
    { key: 'react', value: 'React' },
    { key: 'vue', value: 'Vue' },
    { key: 'web', value: 'Web' },

]

const articleData = { //目录
    html: [
	    {
            name: "注意",
            path: "./fe/html/01.html"
        },
        {
            name: "网页三要素",
            path: "./fe/html/02.html"
        },
        {
            name: "meta元素",
            path: "./fe/html/03.html"
        },
        {
            name: "src与href",
            path: "./fe/html/04.html"
        },
        {
            name: "在html中引入SVG的几种方法",
            path: "./fe/html/05.html"
        },
		{
            name: "组件属性",
            path: "./fe/html/06.html"
        },
        

    ],
    css:[
        {
            name: "注意",
            path: "./fe/css/01.html"
        },
        {
            name: "选择器",
            path: "./fe/css/02.html"
        },
        {
            name: "计量单位、关键字、函数",
            path: "./fe/css/03.html"
        },
        {
            name: "元素属性",
            path: "./fe/css/04.html"
        },
        {
            name: "字体、文本、排列、内容属性",
            path: "./fe/css/05.html"
        },
        {
            name: "背景属性",
            path: "./fe/css/06.html"
        },
        {
            name: "弹性盒子",
            path: "./fe/css/07.html"
        },
        {
            name: "定位、布局属性",
            path: "./fe/css/08.html"
        },
        {
            name: "动画属性",
            path: "./fe/css/09.html"
        },
        {
            name: "列表、表格属性",
            path: "./fe/css/10.html"
        },
        {
            name: "计数器",
            path: "./fe/css/11.html"
        },
        {
            name: "网格属性",
            path: "./fe/css/12.html"
        },
        {
            name: "其他属性",
            path: "./fe/css/13.html"
        },
        {
            name: "基线、中线、顶线、底线",
            path: "./fe/css/14.html"
        },
        {
            name: "媒体查询",
            path: "./fe/css/15.html"
        },
        {
            name: "屏幕适配",
            path: "./fe/css/16.html"
        },
        {
            name: "适配移动端示例",
            path: "./fe/css/17.html"
        },
        {
            name: "图片轮换示例",
            path: "./fe/css/18.html"
        },
        {
            name: "响应式与自适应",
            path: "./fe/css/19.html"
        },

    ],
    javascript: [
        {
            name: "ES6 - Class类",
            path: "./fe/javascript/01.html"
        },
        {
            name: "ES6 - Iterator遍历器",
            path: "./fe/javascript/02.html"
        },
        {
            name: "ES6 - let与const",
            path: "./fe/javascript/03.html"
        },
        {
            name: "ES6 - Module模块",
            path: "./fe/javascript/04.html"
        },
        {
            name: "ES6 - 对象扩展",
            path: "./fe/javascript/05.html"
        },
        {
            name: "ES6 - 函数扩展",
            path: "./fe/javascript/06.html"
        },
        {
            name: "ES6 - 解构赋值",
            path: "./fe/javascript/07.html"
        },
        {
            name: "ES6 - 新增数据结构",
            path: "./fe/javascript/08.html"
        },
        
        {
            name: "async示例",
            path: "./fe/javascript/15.html"
        },
        {
            name: "Generator示例",
            path: "./fe/javascript/16.html"
        },
        {
            name: "hash与history",
            path: "./fe/javascript/17.html"
        },
        {
            name: "PromisesA+规范",
            path: "./fe/javascript/18.html"
        },
        {
            name: "Promise使用示例",
            path: "./fe/javascript/19.html"
        },
        {
            name: "this 详解",
            path: "./fe/javascript/20.html"
        },
        {
            name: "web存储方式",
            path: "./fe/javascript/21.html"
        },
        {
            name: "XMLHttpRequest对象",
            path: "./fe/javascript/22.html"
        },
        {
            name: "闭包",
            path: "./fe/javascript/23.html"
        },
        {
            name: "词法作用域与动态作用域",
            path: "./fe/javascript/24.html"
        },
        {
            name: "定时器",
            path: "./fe/javascript/25.html"
        },
        {
            name: "堆内存和栈内存",
            path: "./fe/javascript/26.html"
        },
        {
            name: "对象的数据属性和访问器属性",
            path: "./fe/javascript/27.html"
        },
        {
            name: "防抖与节流",
            path: "./fe/javascript/28.html"
        },
        {
            name: "构造函数",
            path: "./fe/javascript/29.html"
        },
        {
            name: "观察者模式与订阅发布模式",
            path: "./fe/javascript/30.html"
        },
        {
            name: "函数",
            path: "./fe/javascript/31.html"
        },
        {
            name: "检测变量类型",
            path: "./fe/javascript/32.html"
        },
        {
            name: "垃圾回收机制",
            path: "./fe/javascript/33.html"
        },
        {
            name: "事件冒泡和事件捕获",
            path: "./fe/javascript/34.html"
        },
        {
            name: "手写代码",
            path: "./fe/javascript/35.html"
        },
        {
            name: "同源策略",
            path: "./fe/javascript/36.html"
        },
        {
            name: "文件上传",
            path: "./fe/javascript/37.html"
        },
        {
            name: "虚拟DOM",
            path: "./fe/javascript/38.html"
        },
        {
            name: "异步编程",
            path: "./fe/javascript/39.html"
        },
        {
            name: "原型与原型链",
            path: "./fe/javascript/40.html"
        }
    ],
    http: [
        {
            name: "网络基础",
            path: "./fe/http/01.html"
        },
        {
            name: "HTTP协议",
            path: "./fe/http/02.html"
        },
        {
            name: "URI与URL",
            path: "./fe/http/03.html"
        },
        {
            name: "三次握手和四次挥手",
            path: "./fe/http/04.html"
        },
        {
            name: "Axios概览",
            path: "./fe/http/05.html"
        }
    ],
    git: [
        {
            name: "常用命令",
            path: "./fe/git/01.html"
        },
		{
            name: "概念",
            path: "./fe/git/02.html"
        },
		{
            name: "从远程仓库拉取版本",
            path: "./fe/git/03.html"
        },
		{
            name: "几种常见的合作开发模式",
            path: "./fe/git/04.html"
        },
    ],
    node: [
        {
            name: "npm简介",
            path: "./fe/node/01.html"
        },
        {
            name: "webpack使用",
            path: "./fe/node/01.html"
        },
    ],
    react: [
        {
            name: "基本使用",
            path: "./fe/react/01.html"
        },
        {
            name: "JSX",
            path: "./fe/react/03.html"
        },
        {
            name: "组件",
            path: "./fe/react/04.html"
        },
        {
            name: "State",
            path: "./fe/react/05.html"
        },
        {
            name: "事件处理中this指向",
            path: "./fe/react/07.html"
        },
        {
            name: "条件渲染",
            path: "./fe/react/08.html"
        },
        {
            name: "遍历渲染和key",
            path: "./fe/react/09.html"
        },
        {
            name: "React与Vue的异同",
            path: "./fe/react/10.html"
        },
    ],
    vue: [
        {
            name: "key属性与可复用",
            path: "./fe/vue/01.html"
        },
        {
            name: "name属性及动态组件",
            path: "./fe/vue/02.html"
        },
        {
            name: "render h = h(App)有什么用",
            path: "./fe/vue/03.html"
        },
        {
            name: "Vue CLI基础",
            path: "./fe/vue/04.html"
        },
        {
            name: "Vue Loader基础",
            path: "./fe/vue/05.html"
        },
        {
            name: "Vue Router及其原理",
            path: "./fe/vue/06.html"
        },
        {
            name: "Vue Vuex",
            path: "./fe/vue/07.html"
        },
        {
            name: "构造器、组件、new Vue()的关系",
            path: "./fe/vue/08.html"
        },
        {
            name: "计算属性和侦听属性",
            path: "./fe/vue/09.html"
        },
        {
            name: "键码keyCodes",
            path: "./fe/vue/10.html"
        },
        {
            name: "权限路由",
            path: "./fe/vue/11.html"
        },
        {
            name: "生命周期",
            path: "./fe/vue/12.html"
        },
        {
            name: "双向绑定原理",
            path: "./fe/vue/13.html"
        },
        {
            name: "跳转页面并传值",
            path: "./fe/vue/14.html"
        },
        {
            name: "性能优化",
            path: "./fe/vue/15.html"
        },
        {
            name: "组件间通信",
            path: "./fe/vue/16.html"
        },
    ],
    web: [
        {
            name: "Chrome开发者工具",
            path: "./fe/web/01.html"
        },
        {
            name: "浏览器缓存和本地存储",
            path: "./fe/web/02.html"
        },
        {
            name: "浏览器页面呈现",
            path: "./fe/web/03.html"
        },
        {
            name: "针对Web的攻击",
            path: "./fe/web/04.html"
        },
        {
            name: "重绘与回流",
            path: "./fe/web/05.html"
        },
    ]
}