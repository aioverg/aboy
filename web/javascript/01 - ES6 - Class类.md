#### Class类

##### 实例

1. 创建类

   ```javascript
   class One {  //类不存在变量提升
       args = null  //实例属性
       static a = 0  //类的静态属性，不会被类的实例继承
       constructor(args){//构造方法，每个类必须有
           this.args = args  //实例化时可以为属性args重新赋值
       }
       f(arg){ console.log(arg, this.args) }
       get g(){ console.log('get取值关键字')}
       set g(arg){ console.log('set存值关键字', arg) }
       static h(){console.log('静态方法')}  //类的静态方法，不会被类的实例继承，但能被子类继承
   }
   const ex1 = new One([1,2])  //创建One类的实例ex1
   ex1.args  //实例属性，重新赋值为[1, 2]
   ex1.f(1)  //使用实例方法
   One.prototype  //查询类的原型对象
   ex1.__proto__  //查询实例的原型对象
   One.prototype.constructor === One  //原型的constructor属性指向类本身
   One.prototype  ===  ex1.__proto__  //类的原型对象与实例的原型对象相等
   Object.keys(One.prototype)  //查询对象中所有可枚举属性的名字，类内部定义的方法都是不可枚举的，而ES5使用One.prototype.f = function(){}定义的方法是可枚举的。
   Object.getOwnPropertyNames(One.prototype)  //查询原型中所有的非继承的属性的名字
   ex1.hasOwnProperty('args')  //this定义的属性都是实例自身的属性，所以返回true
   ex1.hasOwnProperty('f')  //实例的方法定义在原型上，所以返回false，类的所有实例共享一个原型
   ex1.g  //调用get关键字定义的g()，输出：get取值关键字
   ex1.g = 33  //调用set关键字定义的g()，输出：set存值关键字
   ```

2. 继承类

   ```javascript
   class Two extends One {
       args = null  //父子同名属性父属性会被覆盖
       constructor(x, args){
           super(x)  //调用父类One的构造函数，每个继承的类必须有，super()做函数使用时指向父类的构造函数
           this.args = args
       }
       f(arg){  //父子同名方法父方法会被覆盖
           super.f(arg)  //调用父类中的f方法，super作为对象时，在普通方法中指向父类的原型对象，在静态方法中，指向父类。
           console.log(arg, this.args)
       }
   }
   const ex2 = new Two("One", "Two")  //创建One类的实例ex2
   Object.getPrototypeOf("Two")  //返回类Two的原型对象，可以判断Two是否继承自One
   Two.__proto__ === One  //子类的__proto__指向父类
   Two.prototype  //子类的原型对象
   Two.prototype.__proto__ === One.prototype  //子类的原型对象的原型对象指向父类的原型对象
   ```


##### class关键字

class：生成类，例如：

```javascript
class one{
    a = "hello";
    b = "world";
    f = function(){console.log(this.a)};
    g = function(){console.log(this.b)}
}
var ex = new one  //创建实例
ex.f()  //输出：hello
ex.g()  //输出：world
```

##### constructor 方法

`constructor` 方法是类的默认方法，通过 `new` 命令生成对象实例时，自动调用该方法。一个类必须有`constructor` 方法，如果没有显示定义，`JavaScript` 将默认创建一个空的 `constructor` 方法。

`constructor` 方法默认返回实例对象（即 `this`），完全可以指定返回另外一个对象，例如：

```javascript
class one{
    constructor(){
        return Object.create(null)
        //默认return Object.create(this)
    }
}
new one() instanceof one  //输出：false
//new one instanceof one  //输出：true
```

##### 注意

1. 类默认使用严格模式。
2. 不存在变量提升，即不能在类声明前使用类。

##### extends 继承

`extends` ：继承父类，例如：

```javascript
class parent {
    a = "hello";
    f = function(){console.log(this.a)}
}
class child extends parent {
    a = "world";
    g = function(){console.log(this.a)}
}
var ex = new child
ex.f()  //输出：world
ex.g()  //输出：world
```

##### super关键字

概述：super关键字即可以作为函数使用也可以作为对象使用。当super作为函数调用时，代表父类的构造函数。super作为对象时，在普通方法中指向父类的原型对象；在静态方法中指向父类。

##### `new.target` 属性