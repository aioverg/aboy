#### Generator示例

基本示例

```javascript
function* example(args){  //function关键字与函数名之间的*号是Generator的标志
    console.log(args)
    yield args  //yield、return关键字指定函数的内部状态，调用next()方法每次移动一个状态
    console.log('two')
    let arg = yield 'two'  //下一个yield的next传入的参数会作为本次yield的返回值，
    console.log(arg)
    yield 'thr'  //可以向next()传入参数，参数会作为上一个yield的返回值。
    return 'ending'  //next()方法走到这里终止，状态不再改变
}
const ex1 = example('one')  //传入参数，并运行Generator
ex1.next( res => {console.log(res)})  //执行一个yield之前的代码，并接受yield的返回值
ex1.next()  //向yield传参数
ex1.next('thr')  //可以向next传参，参数作为上一个yield表达式的返回值。
for(let i of ex1){console.log(i)}  //可以遍历yield执行
```

基本示例

```javascript
function* example(){
    console.log("one")
    yield 'one'
    try{
        console.log("two")
        yield 'two'
    }catch(error){
        console.log('内部捕获错误', error)
    }
    console.log("thr")
    yield 'thr'
}
const ex1 = example()
ex1.next()  //throw抛出的错误若要被Generator内部捕获，必须执行一次next()
ex1.throw('错误')  //抛出错误，会执行一次next()，且将Generator变为执行完毕。抛出错误时，若Generator内部没有try...catch代码块，错误会被外部try...catch捕获，或默认错误程序捕获。
try{  //内部不定义try...catch时外部定义的try...catch，当二者同时存在时优先被外部捕获。
    ex1.throw('错误')
}catch(error){
    console.log('外部捕获错误', error)
}
```

实现斐波那契

```javascript
function* fibonacci() {
  let [prev, curr] = [0, 1];
  for (;;) {
    yield curr;
    [prev, curr] = [curr, prev + curr];
  }
}

for (let n of fibonacci()) {
  if (n > 1000) break;
  console.log(n);
}
```

