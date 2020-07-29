#### 安装和API示例

### 环境：`window` + `Python3.X`

##### 创建虚拟环境

创建 `myflask` 文件夹，在此文件夹下安装虚拟环境。

- `mkdir myflask`
- `cd myflask`
- `py -3 -m venv venv`

##### 激活虚拟环境

`venv\Scripts\activate`

##### 安装 Flask

`pip install Flask`

##### 安装 flask-cors 解决浏览器跨域问题

`pip install flask-cors`

##### 在 `mlflask` 目录下创建 `api.py` 文件，作为响应文件

```python
from flask import Flask
from flask import jsonify
from flask_cors import * #解决跨域问题

app = Flask(__name__)
CORS(app, resources=r'/*') #解决跨越问题

@app.route('/api') #监听 /api 路由
def login():
    print("监听响应 /login 路由")
    return jsonify({
        "age": 20,
        "name": "aioverg",
    })
```

##### 运行 `api.py` 文件

```python
set FLASK_APP=api.py #设置文件
set FLASK_ENV=develpoment #设置文件变动时服务器自动重启
flask run #启动服务器，默认的地址是：http://127.0.0.1:5000
```

##### 创建 web.html 文件发起请求

```html
<button onClick="get()">请求数据</button>
<script>
    function get(){
	    var xmlhttp=new XMLHttpRequest()
		xmlhttp.onreadystatechange=function(){
		    if(xmlhttp.readyState==4 && xmlhttp.status==200){
		        console.log(xmlhttp.response)
		    }
	    }
	    xmlhttp.open("GET", "http://127.0.0.1:5000/login")
	    xmlhttp.setRequestHeader("content-type","application/json;charset=UTF-8")
	    xmlhttp.send()
	}
</script>
```



### 环境： `Linux` + `Python3.X` (没有调试好)

##### 下载、安装 `Python`

```python
#解压安装包
tar -zxvf Python-3.X.tgz

#安装
cd Python-3.X.tgz
./configure --prefix=/usr/local/python3
make && make install

#建立软连接
ln -s /usr/local/python3/bin/python3.8 /usr/bin/python3
ln -s /usr/local/python3/bin/pip3.8 /usr/bin/pip3

#测试是否安装成功
python3
pip3
```

##### 创建虚拟环境

- `mkdir myflask`
- `cd myflask`
- `pthon3 -m venv venv`

##### 激活虚拟环境

- `. venv/bin/activate`

##### 安装 Flask

- `pip install Flask`

##### 安装 flask-cors 解决浏览器跨域问题

`pip install flask-cors`

##### 在 `mlflask` 目录下创建 `api.py` 文件，作为响应文件

```python
from flask import Flask
from flask import jsonify
from flask_cors import * #解决跨域问题

app = Flask(__name__)
CORS(app, resources=r'/*') #解决跨越问题

@app.route('/api') #监听 /api 路由
def login():
    print("监听响应 /login 路由")
    return jsonify({
        "age": 20,
        "name": "aioverg",
    })
```

##### 运行 `api.py` 文件

```python
export FLASK_APP=api.py #设置文件
export FLASK_ENV=develpoment #设置文件变动时服务器自动重启
flask run #启动服务器，默认的地址是：http://127.0.0.1:5000
```

##### 创建 web.html 文件发起请求

```html
<button onClick="get()">请求数据</button>
<script>
    function get(){
	    var xmlhttp=new XMLHttpRequest()
		xmlhttp.onreadystatechange=function(){
		    if(xmlhttp.readyState==4 && xmlhttp.status==200){
		        console.log(xmlhttp.response)
		    }
	    }
	    xmlhttp.open("GET", "http://127.0.0.1:5000/login")
	    xmlhttp.setRequestHeader("content-type","application/json;charset=UTF-8")
	    xmlhttp.send()
	}
</script>
```

