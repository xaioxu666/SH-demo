## 项目二：响应式静态网站
### 2.1 项目目标
(1)掌握Bootstrap栅格布局的使用方法，响应移动端和PC端。  
(2)掌握Bootstrap基本样式的使用方法，如.m－、.p-。  
(3)掌握Bootstrap中组件的使用方法，如导航栏组件、列表组件、媒体对象组件和分页组件。  
(4)掌握Bootstrap插件的使用方法，如下拉插件。  
(5)掌握Bootstrap响应式导航栏和移动端折叠导航栏的使用方法。 
(6)掌握ECharts图表插件的用法
(7)综合应用Bootstrap，开发响应式静态网站。   
### 2.2 项目需求
后台首页界面由后台导航、内容区域、底部版权区域组成，内容区域又由后台安全提示、网站数据统计、网站热帖、访客统计、服务器状态、团队留言板等六个部分组成。  
![avatar](/image/项目二/index.png)  
页面结构：  
![avatar](/image/项目二/index1.png)  
### 2.3 技术栈
HTML+CSS+bootstarp+javascript+jquery+echarts.js
### 2.4 项目开发
#### 2.4.1 准备工作
(1) 创建项目及文件。  
(2) 引入项目所需css文件及js文件（bootstarp.css、jquery.js、bootstarp.js等）。  
css：  
```
<link href="https://cdn.bootcss.com/twitter-bootstrap/3.3.7/css/bootstrap.css" rel="stylesheet">
<link rel="stylesheet" href="css/style.css">
```
js：  
```
<script src="https://cdn.bootcss.com/jquery/3.3.1/jquery.js"></script>
<script src="https://cdn.bootcss.com/twitter-bootstrap/3.3.7/js/bootstrap.js"></script>
<script src="https://cdn.bootcss.com/echarts/4.7.0/echarts.js"></script>
```
#### 2.4.2 首页导航栏制作
![avatar](/image/项目二/导航.png) 
```html
<!--导航栏-->
<nav class="navbar navbar-default">
  <div class="container">
    <div class="navbar-header">
      <!--小屏幕导航按钮-->
      <button class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <!--logo-->
      <a href="index.html" class="navbar-brand">求知讲堂后台管理系统</a>
    </div>
    <!--导航-->
    <div class="navbar-collapse collapse">
      <ul class="nav navbar-nav">
        <li class="active"><a href="index.html"><span class="glyphicon glyphicon-home"></span>&nbsp;后台首页</a></li>
        <li><a href="user.html"><span class="glyphicon glyphicon-user"></span>&nbsp;用户管理</a></li>
        <li><a href="content.html"><span class="glyphicon glyphicon-list-alt"></span>&nbsp;内容管理</a></li>
        <li><a href="tag.html"><span class="glyphicon glyphicon-tags"></span>&nbsp;标签管理</a></li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li class="dropdown">
          <a id="dLabel" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Admin
            <span class="caret"></span>
          </a>
          <ul class="dropdown-menu" aria-labelledby="dLabel">
            <li><a href="#"><span class="glyphicon glyphicon-screenshot"></span>&nbsp;前台首页</a></li>
            <li><a href="#"><span class="glyphicon glyphicon-user"></span>&nbsp;个人主页</a></li>
            <li><a href="#"><span class="glyphicon glyphicon-cog"></span>&nbsp;个人设置</a></li>
            <li><a href="#"><span class="glyphicon glyphicon-credit-card"></span>&nbsp;帐户中心</a></li>
            <li><a href="#"><span class="glyphicon glyphicon-heart"></span>&nbsp;我的收藏</a></li>
          </ul>
        </li>
        <li><a href="javascript:close();"><span class="glyphicon glyphicon-off"></span>&nbsp;退出</a></li>
      </ul>
    </div>
  </div>
</nav>
```
js：
```js
// 点击小屏幕菜单时跳转完后立即关闭该菜单
		$('.navbar-collapse a').click(function() {
			$('.navbar-collapse').collapse('hide');
		});
```
#### 2.4.3 首页后台安全提示区制作
![avatar](/image/项目二/后台安全.png) 
栅格布局：

```
<div class="container">
  <div class="row">
    <!--警告框-->
    <!--网站数据统计-->
    <!--网站热帖-->
    <!--今日访客统计-->
    <!--服务器状态-->
    <!--团队留言板-->
  </div>
</div>
```
安全提示：
```html
 <!--警告框-->
    <div class="col-md-12">
      <div class="alert alert-danger alert-dismissible fade in" role="alert">
        <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span>
        </button>
        <h4>网站程序有漏洞，急需修复！</h4>
        <p>当前版本程序(V1.22)存在严重安全问题，容易造成攻击，请即可修复！</p>
        <p>
          <button type="button" class="btn btn-danger">立即修复</button>
          <button type="button" data-dismiss="alert" class="btn btn-default">稍候处理</button>
        </p>
      </div>
    </div>
```
#### 2.4.4 首页网站数据统计区制作
![avatar](/image/项目二/网站数据统计.png) 
```html
<!--网站数据统计-->
    <div class="col-md-6">
      <div class="panel panel-default">
        <div class="panel-heading">网站数据统计</div>
        <div class="panel-body">
          <table class="table table-hover">
            <thead>
            <tr>
              <th>统计项目</th>
              <th>今日</th>
              <th>昨日</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <th>注册会员</th>
              <td>300</td>
              <td>11400</td>
            </tr>
            <tr>
              <th>登录会员</th>
              <td>200</td>
              <td>400</td>
            </tr>
            <tr>
              <th>今日发帖</th>
              <td>200</td>
              <td>400</td>
            </tr>
            <tr>
              <th>转载次数</th>
              <td>200</td>
              <td>400</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
```
#### 2.4.5 首页网站热帖区制作
![avatar](/image/项目二/网站热帖.png) 
```html
 <!--网站热帖-->
    <div class="col-md-6">
      <div class="panel panel-default">
        <div class="panel-heading">网站热帖</div>
        <ul class="list-group site">
          <li class="list-group-item"><a href="#"><span class="glyphicon glyphicon-list-alt"></span>&nbsp;泛Mooc职业教育， 效果和就业为王<small class="pull-right">2020/08/08</small></a></li>
          <li class="list-group-item"><a href="#"><span class="glyphicon glyphicon-list-alt"></span>&nbsp;泛Mooc职业教育， 效果和就业为王<small class="pull-right">2020/08/08</small></a></li>
          <li class="list-group-item"><a href="#"><span class="glyphicon glyphicon-list-alt"></span>&nbsp;泛Mooc职业教育， 效果和就业为王<small class="pull-right">2020/08/08</small></a></li>
          <li class="list-group-item"><a href="#"><span class="glyphicon glyphicon-list-alt"></span>&nbsp;泛Mooc职业教育， 效果和就业为王<small class="pull-right">2020/08/08</small></a></li>
          <li class="list-group-item"><a href="#"><span class="glyphicon glyphicon-list-alt"></span>&nbsp;泛Mooc职业教育， 效果和就业为王<small class="pull-right">2020/08/08</small></a></li>
          <li class="list-group-item"><a href="#"><span class="glyphicon glyphicon-list-alt"></span>&nbsp;泛Mooc职业教育， 效果和就业为王<small class="pull-right">2020/08/08</small></a></li>
        </ul>
      </div>
    </div>
```
css:
```
/*网站热帖*/
.site .list-group-item {
  padding: 9.5px 15px;
}
```
#### 2.4.6 首页访客统计区制作
![avatar](/image/项目二/访客统计.png) 
```
 <!--今日访客统计-->
    <div class="col-md-6">
      <div class="panel panel-default">
        <div class="panel-heading">今日访客统计</div>
        <div class="panel-body">
          <!--图表-->
          <div id="main" style="width: 600px;height:300px;"></div>
        </div>
      </div>
    </div>
```
模拟数据：
```js
// echarts图表
		var myChart = echarts.init(document.getElementById('main'));

		// 指定图表的配置项和数据
		option = {
			tooltip: {
				trigger: 'axis',
				axisPointer: {
					type: 'cross',
					label: {
						backgroundColor: '#ff3ac4'
					}
				}
			},
			color: ['#f00', '#0f0', '#00f'],
			xAxis: [{
				type: 'category',
				boundaryGap: false,
				data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
			}],
			yAxis: [{
				type: 'value'
			}],
			series: [{
					type: 'line',
					stack: '访客总量',
					areaStyle: {},
					data: [300, 555, 655, 714, 899, 905, 1000],
					smooth: true
				},
				{
					type: 'line',
					stack: '关注总量',
					areaStyle: {},
					data: [314, 455, 755, 814, 999, 905, 1000],
					smooth: true
				},
				{
					type: 'line',
					stack: '点赞总量',
					areaStyle: {},
					data: [114, 255, 455, 414, 599, 605, 500],
					smooth: true
				}
			]
		};

		// 使用刚指定的配置项和数据显示图表。
		myChart.setOption(option);
```
#### 2.4.7 首页服务器状态区制作
![avatar](/image/项目二/服务器状态.png) 
```html
 <!--服务器状态-->
    <div class="col-md-6">
      <div class="panel panel-default">
        <div class="panel-heading">服务器状态</div>
        <div class="panel-body">
          <!--进度条-->
          <p>内存使用率：40%</p>
          <div class="progress">
            <div class="progress-bar progress-bar-success progress-bar-striped" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%">
              <span class="sr-only">40% Complete (success)</span>
            </div>
          </div>
          <p>数据库使用率：20%</p>
          <div class="progress">
            <div class="progress-bar progress-bar-info progress-bar-striped" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 20%">
            </div>
          </div>
          <p>磁盘使用率：60%</p>
          <div class="progress">
            <div class="progress-bar progress-bar-warning progress-bar-striped" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%">
            </div>
          </div>
          <p>CPU使用率：80%</p>
          <div class="progress">
            <div class="progress-bar progress-bar-danger progress-bar-striped" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width: 80%">
            </div>
          </div>
        </div>
      </div>
    </div>
```
css:
```
/*进度条*/
.progress{
  margin-bottom: 25px;
}
```
#### 2.4.8 首页团队留言板区制作
![avatar](/image/项目二/留言板.png) 
```html
<!--团队留言板-->
	<div class="col-md-12">
		<div class="panel panel-default">
			<div class="panel-heading">团队留言板</div>
			<div class="panel-body">
				<div class="col-md-7">
					<div class="media well">
						<div class="media-left">
							<a href="#">
								<img class="media-object wh64" src="images/a.png" alt="卓大哥">
							</a>
						</div>
						<div class="media-body">
							<h4 class="media-heading">卓大哥</h4>
							技术大哥，今晚请把网站程序升级一下哈，现在的系统有漏洞，安全起见！
						</div>
					</div>
					<div class="media well">
						<div class="media-body text-right">
							<h4 class="media-heading">技术大哥</h4>
							收到，今晚凌晨2点准时升级！
						</div>
						<div class="media-right">
							<a href="#">
								<img class="media-object wh64" src="images/b.png" alt="技术大哥">
							</a>
						</div>
					</div>
					<div class="media well">
						<div class="media-body text-right">
							<h4 class="media-heading">技术大哥</h4>
							你先在站点发布一下通知哈！
						</div>
						<div class="media-right">
							<a href="#">
								<img class="media-object wh64" src="images/b.png" alt="技术大哥">
							</a>
						</div>
					</div>
					<div class="media well">
						<div class="media-left">
							<a href="#">
								<img class="media-object wh64" src="images/a.png" alt="卓大哥">
							</a>
						</div>
						<div class="media-body">
							<h4 class="media-heading">卓大哥</h4>
							好嘞。
						</div>
					</div>
				</div>
				<div class="col-md-5">
					<form action="#">
						<label for="contact">输入留言内容</label>
						<textarea id="contact" cols="10" rows="5" class="form-control" placeholder="输入留言内容"></textarea>
						<button type="submit" class="btn btn-default contact">留言</button>
					</form>
					<div class="panel panel-default">
						<div class="panel-heading">团队联系手册</div>
						<div class="panel-body">
							<ul class="list-group">
								<li class="list-group-item">站长(李小龙)：<span class="glyphicon glyphicon-phone"></span>&nbsp;13134848615</li>
								<li class="list-group-item">技术(大牛哥)：<span class="glyphicon glyphicon-phone"></span>&nbsp;13456127694</li>
								<li class="list-group-item">推广(张二哥)：<span class="glyphicon glyphicon-phone"></span>&nbsp;13457815482</li>
								<li class="list-group-item">客服(王女士)：<span class="glyphicon glyphicon-phone"></span>&nbsp;13134567782&nbsp;&nbsp;<span
									 class="
glyphicon glyphicon-phone-alt"></span>&nbsp; 0371-61171272</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
```
css:  
```
/*媒体对象图像*/
.wh64{
  width: 64px;
  height: 64px;
  border-radius: 50%;
}
/*contact*/
.contact{
  margin: 22px 0;
}
```
#### 2.4.9 首页底部版权区制作
![avatar](/image/项目二/版权.png) 
```
<!--footer-->
	<footer>
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<p>&copy; Copyright 2010-2030 求知讲堂在线教育 深ICP备14041383号 版权所有</p>
				</div>
			</div>
		</div>
	</footer>
```
css：
```
/*footer*/
footer{
  text-align: center;
  margin-top: 15px;
}
```