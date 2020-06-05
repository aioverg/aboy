#### JS Promise

实例：

```javascript
const ex2 = Promise.resolve([args]) //返回一个resolved是fulfiled状态的Promise对象
const ex3 = Promise.reject([args])  //返回一个resolved是rejected状态的promise对象
const ex1 = new Promise((resolve, reject) => {
    if(true){
        resolve('成功')  //将Promise变为fulfiled的resolved状态，并返回值被then中的回调函数接收
    }
    else{
        reject('失败')  //将Promise变为rejected的resolved状态，并返回值被then中的回调函数接收
    }
}).then(  //then在当前所有的同步任务执行完后立即执行，先于计时器函数。then会在状态变为resolved时自动执行
    success => {
        console.log(a)  //打印一个不存在的变量a，使错误被catch接收
        console.log(success)  //打印resolved状态的返回值
    }, 
    error => {
        console.log(b)  //打印一个不存在的变量b，使错误被catch接收
        console.log(error)  //打印rejected状态的返回值
    }
)
.catch(error => console.log(error))  //接收代码中出现错误，也可以在then中没有接收rejected状态的回调函数的时候，接收rejected状态的返回值。
.finally(console.log("end"))  //不管状态如何都会执行，回调函数不接受任何参数

const ex4 = Promise.all([ex1, ex2, ex3])  //将多个Promise实例包装成一个，当所有的实例状态都变为fulfilled的resolved时，将所有实例的返回值组成的数组传递给then的回调函数。当有一个实例的状态变为rejected的resolved时，ex4的状态就变为rejected的resolved，将那个实例的返回值传递给ex4回调函数。

const ex5 = Promise.race([ex1, ex2, ex3])  //将多个Promise实例包装成一个，当其中一个实例的状态改变时，ex5就跟着起改变，并将这个实例的返回值传递给回调函数。

const ex6 = Promise.allSettled([ex1, ex2, ex3])  //将多个Promise实例包装成一个，当所有的实例状态都变为resolved时，将所有结果组成的数组给回调函数
```

