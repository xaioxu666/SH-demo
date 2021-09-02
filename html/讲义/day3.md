## 项目三：全栈式网站开发
### 3.1 项目目标
(1)掌握JavaScipt程序设计基础。  
(2)掌握JQuery操作DOM、发送HTTP请求。  
(3)掌握通过MySQL建立数据库。  
(4)掌握node.js基础。  
(5)掌握express搭建服务端程序。  
(6)掌握express连接MySQL数据库。   
(7)掌握express开发服务端接口。  
(8)综合应用JQuery、MySQL和node.js技术,实现网站全栈开发。   
### 3.2 项目需求
(1) 实现登录注册功能。  
(2) 实现数据动态渲染。  
(3) 实现分页功能。  
![avatar](/image/项目三/index.png)   
### 3.3 技术栈  
JavaScript+JQuery+Node.js+Express+MySQL  
### 3.4 项目开发
#### 3.4.1 准备工作
(1) 安装MySQL  
(2) 创建数据库  
(2) 安装node  
(3) 搭建express项目  
安装express  
```
npm install express-generator -g
```
创建项目  
```
express (项目名)
```
安装依赖  
```
npm i
```
#### 3.4.2 连接数据库
(1) 安装MySQL依赖；  
```
npm i mysql
```
(2) 创建连接  
新建conn.js  
```
//1、引入mysql模块
const mysql = require('mysql');

// 2、创建数据库连接对象
let conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'shop'
});
// 3、抛出conn数据库连接对象conn
module.exports = conn;
```
#### 3.4.3 跨域配置
(1)安装cors依赖：  
```
npm i cors
```
(2) 引入：  
```
var cors = require('cors');
app.use(cors());
```
#### 3.4.4 登录模块  
(1) 服务端接口编写：  
users.js:  
```
//引入conn.js文件
let conn = require('../public/javascripts/conn');

//conn.connect();
conn.connect(function () {
    console.log('数据库连接成功！');
});
router.get('/login', function(req, res, next) {
	var userName=req.query.userName;
	var passWord=req.query.passWord;
	conn.query(`SELECT passWord FROM USER WHERE NAME=${userName}`, function (err, rs) {
		if(rs.length>0){
			console.log("用户已存在")
			console.log(rs[0].passWord)
			if(rs[0].passWord==passWord){
				res.send({
					error_code: 0,
					data:{
						message:"登录成功！！"
					}
				});
			}
		}else{
			res.send({
				error_code: 1,
				data:{
					message:"用户不存在！！"
				}
			});
		}
	})
});
```
(2) 前端发送请求:  
```
$(document).ready(function(){
				$('button').click(function(){
					console.log(12)
					var userName=$('#username').val();
					var password=$('#password').val();
					$.get(`http://localhost:3000/users/login?userName=${userName}&passWord=${password}`,function(res){
						
						alert(res.data.message)
					})
				})
			})
```
#### 3.4.5 注册模块  
(1) 安装body-parser依赖  
```
npm i body-parser
```
(2) 引入app.js:   
```
var bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded  
app.use(bodyParser.urlencoded({ extended: false }))    
// parse application/json  
app.use(bodyParser.json()) 
```
(3) 服务端接口编写：  
```
router.post('/register', function(req, res, next) {
	var userName=req.body.userName;
	var passWord=req.body.passWord;
	var phone=req.body.phone;
	conn.query(`SELECT id FROM USER WHERE NAME=${userName}`, function (err, rs) {
		if(rs.length>0){
			console.log("用户已存在")
			res.send({
				error_code: 1,
				data:{
					message:"用户名重复！！"
				}
			});
		}else{
			conn.query(`insert into user (name,password,phone) values (${userName}, ${passWord},${phone})`, function (err,r) {
				res.send({
					error_code: 0,
					data:{
						message:"注册成功！！"
					}
				});
			})
		}
	})
});
```
(4) 前端发送请求：  
```
var register=function(){
	var userName=$("#userName").val()
	var passWord=$("#password").val()
	var phone=$("#phone").val()
	$.post('http://localhost:3000/users/register',{
		userName:userName,
		passWord:passWord,
		phone:phone
	},function(res){
		alert(res.data.message)
	})
}
```
#### 3.4.6 商品展示模块
(1) 服务端接口编写：
```
//引入conn.js文件
let conn = require('../public/javascripts/conn');

//conn.connect();
conn.connect(function () {
    console.log('数据库连接成功！');
});
router.get('/', function (req, res, next) {
	console.log(111)
    conn.query('select * from products', function (err, rs) {
		console.log(rs);
        res.send({
			error_code: 0,
			data:rs
		});
    })
});
```
(2) 前端发送请求，获取到数据够渲染页面：  
```
var data=[];
$(document).ready(function(){
	$.get('http://localhost:3000/',function(res){
		data=res.data.slice(0,7);
	});
})
var showProductList=function(val){
	var $html='';
	val.forEach(function(item){
		$html=$html+`<li>
		<a href="pro_details.html"><img src="${item.imgPath}" class="pro_img"/></a>
		<div class="pro_info">
			<p>￥${item.price}</p>
			<h4>
				<button type="button" class="cart_icon addCart" title="点我，加入购物车"></button>
				<a href="pro_details.html"> ${item.name} </a>
				<input type="hidden" value="1" />
			</h4>
			<h6>已有1.7万评价<span>2.1万人付款</span></h6>
		</div>
	</li>`
	})
	$(".productList").html($html);
}
```
#### 3.4.7 分页功能实现
(1) 服务端接口：  
```
router.get('/page', function (req, res, next) {
	console.log(req.query.page)
	var num=8*(req.query.page-1);
    conn.query(`select * from products limit ${num},8`, function (err, rs) {
		console.log(rs);
        res.send({
			error_code: 0,
			data:rs
		});
    })
});
```
(2) 前端发送请求后渲染页面；
```js
var pageNum=1;
$(document).ready(function(){
	$.get('http://localhost:3000/',function(res){
		data=res.data.slice(0,8);
		if(pageNum%8==0){
			pageNum=parseInt(data.length/8)
		}else{
			pageNum=parseInt(data.length/8)+1
		}
		showProductList(data);
		showPageList();
	});
})
var showPageList=function(){
	var $html='';
	for(var i=1;i<=pageNum;i++){
		$html=$html+`<li onclick="pageChange(${i})"><a herf="#">${i}</a></li>`
	}
	console.log($html)
	$('.pagination ol').html($html);
	$('.pagination li').eq(0).addClass("active");
};
var pageChange=function(val){
	console.log(val)
	$.get('http://localhost:3000/page?page='+val,function(res){
		data=res.data;
		showProductList(data);
	});
};
```