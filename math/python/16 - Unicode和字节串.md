#### Unicode和字节串

##### 字符串对象类型

1. `str` ：表示解码的 `Unicode` 文本（包括 `ASCII` )
2. `bytes` ：表示二进制数据（包括编码的文本）
3. `bytearray` ：一种可变的 `bytes` 类型

##### 文本文件和二进制文件

1. 文本文件：当一个文件以文本模式打开的时候，读取其数据会自动将其内容解码，并将解码的内容返回为一个 `str` ，写入内容需要一个 `str` ，并且在将其传输到文件之前自动编码它。
2. 二进制文件：通过向内置 `open` 调用的模式字符串参数添加一个 `b` ，以二进制模式打开一个文件，此时读取其数据不会以任何方式解码它，而是直接返回其未经修改的元素内容并将其作为一个 `bytes` 对象，写入二进制数据类似地需要一个 `bytes` 对象，并将其未经修改地传送到文件中。二进制模式文件也接受一个 `bytearray` 对象作为写入到文件中的内容。

由于语言在 `str` 和 `bytes` 之间的差距，因此需要确定数据是文本还是二进制，并且在脚本中相应地使用 `str` 或 `bytes` 对象来表示其内容。最终以何种模式打开一个文件将决定脚本使用何种类型的对象来表示其内容：

1. 如果处理图像文件、经网络传输的数据、必须解压的打包二进制数据，或者一些设备数据流，则使用 `bytes` 和二进制模式文件处理更合适。但如果想要更新数据而不在内存中产生副本，也可以选择使用 `bytearray` 。
2. 如果要处理的内容本质是文本化的，例如程序输出、HTML、电子邮件内容或 `CSV` 或 `XML` 文件，则可能要使用 `str` 和 文本模式文件。

##### 相关函数

1. **`open(args)`** ：打开文件。参数的第二个字母表示以什么模式操作文件，`b` 表示二进制模式， `t` 表示文本模式，默认是 `t` 。
2. **`write(args)`**：向文件中写入内容，如果文件是以二进制模式打开的，写入的内容必须是二进制内容，即 `b'内容'` ；若文件是以文本模式打开的，写入内容必须是文本模式，即 `'内容'` 。

##### 文本文件基础

文件 I/O（输入输出）示例：

```python
file = open("temp", "w") #以写入属性打开文件 temp，没有的话创建 temp 文件
size = file.write('abc\n') #在文件中写入 abc 和一个换行符
file.close() #关闭文件并保存

file = open("temp") #打开文件 temp
text = file.read() #读取文件内容
text #输出：'abc\n'
print(text) #打印文件内容，输出：abc
```

##### 使用 Unicode 文件

手动编码字符串示例：

```python
s = "A\xc4B\xe8C"
s #输出：'AÄBèC'
len(s) #输出：5

L = s.encode('latin-1') #以 latin-1 的方式编码字符串 s
L #输出：b'A\xc4B\xe8C'
len(L) #输出：5

U = s.encode('utf-8') #以 utf-8 的方式编码字符串 s
U #输出：b'A\xc3\x84B\xc3\xa8C'
len(U) #输出：7
```

文件 I/O （输入输出）编码/解码 示例：

```python
s = "A\xc4B\xe8C"
#将 s 以 latin-1 编码格式写入 latindata 文件
open("latindata", "w", encoding="latin-1").write(s)

#将 s 以 utf-8 编码格式写入 utf8data 文件
open("utf8data", "w", encoding="utf-8").write(s)

#使用 latin-1 格式解码读取 latindata 文件
open("latindata", "r", encoding="latin-1").read()

#使用 utf-8 格式解码读取 uft8data 文件
open("utf8data", "r", encoding="utf-8").read()
```

