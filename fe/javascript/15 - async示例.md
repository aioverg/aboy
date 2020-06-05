#### async示例

```javascript
function one(args){
    return new Promise(resolve => {
        resolve(args)
    })
}
function two(args){
    return new Promise(resolve => {
        resolve(args)
    })
}
async function example(args){
    const aa = await one(args)  //await后面是Promise对象对象时，放回该对象的结果，如果有一个Promise对象为rejected则代码停止执行；如果不是直接返回值
    const bb = await two("world")//
    return aa + bb  //return的返回值是then方法的回调函数的参数
}
example("hello")
    .then(res => console.log(res))  //async函数返回一个Promise对象
    .catch(error => console.log(res))  //捕获async内部错误
```

