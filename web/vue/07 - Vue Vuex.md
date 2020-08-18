#### Vuex简介

##### 基础示例

```javascript
//创建Vuex实例
const store = new Vuex.store({//每个Vue项目仅包含一个Vuex实例
    state: {//状态，也就说数据
        one: 'hello'
    },
    getter: {//相当于Vue中的计算属性，当state中的值变化的时候会跟着更新
        two: state => {return "hello" + state.one}
    },
    mutation: {//操作状态的函数，vuex只能通过mutation操作数据，mutation只能包含同步任务
        say(state){
            console.log(state.one)
        }
    },
    actions: {//actions可以包含任意的异步任务，它用来提交mutation，也可以访问state、gettes
        fn(context){
            context.commit('say')
        }
    },
    modules: {//导入模块化的store
        a: moduleA
    }
})
store.commit('say')//执行操作状态的函数
store.dispatch('fn')//触发actions
//在组件中获取Vuex中保存的状态，首先要在根实例中注册store，这样store会注入到根实例下的所有子组件中，这时子组件都能通过this.$store访问到store。
import {mapState, mapGetters, mapMutations, map } from 'vuex'//辅助函数
const Hello = {//一个子组件
    template: `<h2>{{one}}</h2>`,
    computed: {//在计算属性中获取状态，每当store中的状态变化时，都会获得更新
        one: function(){return this.$store.state.one},//获取state中的数据
        two: function(){return this.$store.getters.two},//获取getters中的数据
    },
    methods: {
        say: function(){this.$store.commit('say')}//组件调用mutation中的函数
        fn: function(){this.$store.dispatch('fn')}//组件调用actions中的函数
    }
}
```

##### 进阶示例

```javascript
//moudleA.js 模块文件
export default moduleA = {
    namespaced: true,//默认store子模块是注册在全局命名空间的，但防止模块间的变量名冲突，可给模块赋予单独的命名空间，嵌套模块会继承父模块的命名空间
    state: {
        one: 'helloA'
    },
    getters: {
        two: function(state){return state.one+'world!'}
    },
    mutations: {
        say: function(state){alert(state.one)}
    },
    actions: {
        fn: function({state}){alert(state.one)}
    }
}
//moudleB.js 模块文件
export default moduleB = {
    namespaced: true,
    state: {
        one: 'helloA'
    },
    getters: {
        two: function(state){return state.one+'world!'}
    },
    mutations: {
        say: function(state){alert(state.one)}
    },
    actions: {
        fn: function({state}){alert(state.one)}
    }
}
//index.js主文件
import moudleA from 'url/moudleA' //导入模块
import moudleB from 'url/moudleB'
export default new Vuex.Store({
  state: {
    one: 'index'
  },
  getters: {
    two: state => {return state.one+1}
  },
  mutations: {
    say(state){alert(state.one)}
  },
  actions: {
    fn: function({state}){alert(state.one)}
  },
  modules: {
    ma: moudleA, //注入模块并命名
    mb: moudleB
  }
})
//组件使用vuex 方法一
import {mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default {
    computed: {
        ...mapState({ //引入全局中的state.one，并重新起名为indexOne
            indexOne: 'one'
        }),
        ...mapState('ma', { //引入moudleA中的state.one，并重新起名为maOne
            maOne: 'one'
        }),
        ...mapState('mb', { //引入moudleB中的state.one，并重新起名为mbOne
            mbOne: 'one'
        }),
        ...mapGetters({ //引入全局的中的getter.two，并重新起名为indexTwo
            indexTwo: 'two'
        }),
        ...mapGetters('ma',{ //引入moudleA中的getter.two，并重新起名为maTwo
            maTwo: 'two'
        }),
        ...mapGetters('mb',{ //引入moudleB中的getter.two，并重新起名为mbTwo
            mbTwo: 'two'
        }),
    },
    methods: {
        ...mapMutations({ //引入全局中的mutations.say，并重新起名为indexSay
            indexSay:'say'
        }),
        ...mapMutations('ma',{ //引入moudleA中的mutations.say，并重新起名为maSay
            maSay:'say'
        }),
        ...mapMutations('mb',{ //引入moudleB中的mutations.say，并重新起名为mbSay
            mbSay:'say'
        }),
        ...mapActions({ //引入全局中的actions.say，并重新起名为indexFn
            indexFn:'fn'
        }),
        ...mapActions('ma',{ //引入moudleA中的actions.say，并重新起名为maFn
            maFn:'fn'
        }),
        ...mapActions('mb',{ //引入moudleB中的actions.say，并重新起名为mbFn
            mbFn:'fn'
        })
    }
}
//组件使用vuex 方法二暂略
```

**概念：**Vuex是一个专为Vue.js开发的状态管理模式，采用集中式存储管理应用的组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。

##### 一个简单的Vuex实例

```javascript
const store = new Vuex.Store({
    state: {},
    getters: {},
    mutation: {},
    action: {},
    moudle: {}
})
```

##### 名词

- state：用于存储状态。相当于Vue中的data。
- getters：用于存储状态。相当于Vue中的计算属性computed。
- mutation：用于修改state，state只能使用mutation修改。且不能包含异步操作。
- action：与mutation类似，当可以包含异步操作。
- module：用于引入模块的Vuex。