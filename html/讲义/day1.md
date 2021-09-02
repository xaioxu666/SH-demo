# 讲义
##  项目一：电商官网
### 1.1 项目目标
(1) 掌握切图技术，基于UI设计图开发静态网页。  
(2) 掌握HTML文本标签、头部标记、超链接、创建表单的功能 。  
(3) 掌握HTML5新增语义化标签的使用方法。  
(4) 掌握CSS的选择器、单位、字体样式、文本样式、颜色、背景、区块、网页布局属性等功能。   
(5) 了解CSS3新增选择器、边框新特性、新增颜色和字体的功能、新增特性、弹性布局的实用方法。  
(6) 具备开发、调试、维护等能力，综合应用网页设计和制作技术，建设电商官网网站。  
### 1.2 项目需求
PC版页面布局要求，所有内容区域都需要放置在1200居中（width：1200；margin：0 auto）的模块中。图片除外。但是为了让图片不会出现横向滚动条，所以需要设置图片的最大宽度为 容器的宽度（max-width：100%）。  
#### 1.2.1 页头和页脚
我们可以看到我们的设计稿，头部和尾部每个页面都是一样的。所以针对一样的内容我们可以使用公共样式。  
页头：
![avatar](/image/项目一/head.png)  
页脚：
![avatar](/image/项目一/foot.png)  
#### 1.2.2 侧栏
除了首页，其它页面都可以看到侧栏。所有的侧栏的样式都是一样的，除了文本不同。  
![avatar](/image/项目一/left.png)  

#### 1.2.3 首页布局实战
将首页当做一个大容器，我们容器中多少个盒子，每个盒子代表什么都需要分析透彻。
![avatar](/image/项目一/index_page.png)  
![avatar](/image/项目一/index1.png)  
#### 1.2.4 新闻页面布局实战
![avatar](/image/项目一/news_page.png)  
![avatar](/image/项目一/news1.png)  
### 1.3 技术栈
HTML/HTML5+CSS/CSS3  
### 1.4 项目开发
### 1.4.1 准备工作
(1) 创建项目。   
(2) 准备项目所需图片资源。   
(3) 创建首页index.html。  
(4) 创建通用样式文件public.css。  
(5) 创建首页样式文件index.css。  
(6) 创建new页面文件。  
![avatar](/image/项目一/file.png)  
### 1.4.2 通用样式制作
#### 1.4.2.1 实现步骤  
```
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  /*继承父元素字体*/
  font: inherit;
  /*元素放在父元素基线上*/
  vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
  display: block;
}

body {
  line-height: 1;
}

ol, ul {
  list-style: none;
}

blockquote, q {
  quotes: none;
}

blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

body {
  min-width: 1200px;
  font-family: 微软雅黑;
}

a {
  text-decoration: none;
  color: #000000;
}
```
### 1.4.3 头部实现 
#### 1.4.3.1 效果图
![avatar](/image/项目一/head.png) 
#### 1.4.3.2 实现思路
由三部分组成：LOGO+菜单+语言版本。  
(1) 需要创建一个1200居中的容器。  
(2) LOGO需要添加超级链接并链接到首页（index.html）。  
(3) 菜单需要默认选中首页。（首页文本为蓝色，有下划线）。  
(4) 菜单的选择需要添加hover效果。（文本蓝色，有下划线）。  
(5) 语言版本默认选择CN，hover的时候EN也能出现边框。  
#### 1.4.3.3 实现步骤
html：  
```
<!--导航栏-->
<header>
	<a href="home/index.html"><img src="home/images/logo.png" class="logo" /></a>
	<ul class="nav">
		<li class="nav-active"><a class="active" href="home/index.html">企业首页</a></li>
		<li><a href="about/about.html">关于我们</a></li>
		<li><a href="news/news.html">新闻中心</a></li>
		<li><a href="product/product.html">产品中心</a></li>
		<li><a href="service/service.html">客户服务</a></li>
		<li><a href="concat/concat.html">联系我们</a></li>
	</ul>
	<ul class="language">
		<li class="cn">CN</li>
		<li>EN</li>
	</ul>
</header>
```
css：  
```
/*导航栏*/
header {
  width: 1200px;
  height: 80px;
  line-height: 80px;
  margin: 0 auto;
}
header .logo {
  width: 80px;
  height: 40px;
  margin: 20px 200px 0 50px;
  float: left;
}
header .nav {
  overflow: hidden;
  float: left;
}
header .nav li {
  float: left;
  font-size: 16px;
  margin-right: 56px;
}
.nav-active, header .nav li:hover {
  border-bottom: 4px solid #01a1ff;
}
header .nav li a {
  color: #333;
}
.active {
  color: #01a1ff!important;
}
header .nav li:hover a {
  color: #01a1ff;
}
header .language {
  float: right;
}
header .language li {
  float: left;
  width: 47px;
  height: 50px;
  line-height: 50px;
  border: 1px solid transparent;
  text-align: center;
  margin-top: 15px;
  cursor: pointer;
}
header .language li:first-child {
  border: 1px solid #ccc;
}
header .language li:hover {
  border: 1px solid #ccc;
}
```
### 1.4.4 首页-轮播实现  
#### 1.4.4.1 效果图
![avatar](/image/项目一/swiper.png)
#### 1.4.4.2 实现思路
(1) 根据设计稿获取title的宽度。  
(2) 设置title的宽度并居中显示。  
(3) 定义因为标题（注意使用h2-h6标签）。  
(4) 定义文字说明（建议使用p标签）。   
#### 1.4.5.3 实现步骤
html：  
```
<!--banner-->
<div class="banner">
	<ul class="imgs">
		<li><a href="home/index.html"><img src="home/images/banner_01.jpg" alt="banner" /></a></li>
		<li><a href="home/index.html"><img src="home/images/banner_02.jpg" alt="banner" /></a></li>
		<li><a href="home/index.html"><img src="home/images/banner_03.jpg" alt="banner" /></a></li>
	</ul>
	<div class="prev"></div>
	<div class="next"></div>
	<ul class="count">
		<li class="on"></li>
		<li></li>
		<li></li>
	</ul>
</div>
```
css：  
```
/*banner*/
.banner{
  width: 100%;
  height: 400px;
  position: relative;
  overflow: hidden;
}
.banner .imgs{
  width: 1000%;
  position: absolute;
}
.banner li{
  float: left;
}
.banner img{
  width: 100%;
  height: 400px;
}
.prev, .next{
  width: 32px;
  height: 32px;
  position: absolute;
  top: 184px;
  z-index: 10;
}
.prev{
  background: url("./images/index-xb2.png") no-repeat;
  left: 40px;
}
.prev:hover{
  background: url("./images/index-xb4.png") no-repeat;
}
.next{
  background: url("./images/index-xb1.png") no-repeat;
  right: 40px;
}
.next:hover{
  background: url("./images/index-xb3.png") no-repeat;
}
.banner .count{
  width: 100%;
  height: 10px;
  position: absolute;
  left: 50%;
  bottom: 10px;
  margin-left: -22.5px;
}
.banner .count li{
  float: left;
  width: 10px;
  height: 10px;
  background-color: #000;
  opacity: .2;
  filter: alpha(opacity=20);
  /*-webkit---chrome、safari
-moz----firefox
-ms----IE*/
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  margin-right: 5px;
  cursor: pointer;
}
.banner .count .on{
  background-color:#01a1ff;
  opacity: 1;
  filter: alpha(opacity=100);
}
```
### 1.4.5 首页-标题实现：  
#### 1.4.5.1 效果图
![avatar](/image/项目一/welcome.png)  
#### 1.4.5.2 实现思路
(1) 大容器定义1200居中。  
(2) title使用公共的title即可。  
(3) 内容区域使用ul li列表布局。  
#### 1.4.5.3 实现步骤  
html：  
```
<!--welcome-->
<div class="welcome">
	<h2 class="title">welcome to newman</h2>
	<p class="index-p">纽曼公司创立于1996年，现有员工2000余人，是一家集研发、制造、销售、服务为一体的中国高新技术企业。公司研发及生产体系健全，拥有湖南、北京和深圳三大中心。经过17年的发展，凭借强大的研发力量及资源整合能力，纽曼已拥有目前中国数码行业较为完整产品体系。产品跨越专业及消费数码产品领域。</p>
	<ul class="classic">
		<li>
			<img src="./images/index-cultural01.png" alt="classic">
			<h3>cultural</h3>
			<h4>企业文化</h4>
			<p>优秀的企业文化能给企业注入蓬勃的活力，是企业的灵魂。纽曼十分注重自身企业文化建设，将企业文化的精髓传递给每一位员工。</p>
		</li>
		<li>
			<img src="./images/index-cultural02.png" alt="classic">
			<h3>honour</h3>
			<h4>企业荣誉</h4>
			<p>纽曼历年来坚持不懈地努力，以品质求生存，以创新谋发展，从而打造出众多经典产品，得到了用户以及行业媒体的普遍肯定与褒奖。</p>
		</li>
		<li>
			<img src="./images/index-cultural03.png" alt="classic">
			<h3>qualification</h3>
			<h4>企业认证</h4>
			<p>纽曼长期以来将科学化管理放在首位，并将产品质量视为企业命脉，经过长期不懈的系统化学习和实践，逐步通过了ISO9001质量管理体系认证。</p>
		</li>
		<li>
			<img src="./images/index-cultural04.png" alt="classic">
			<h3>research</h3>
			<h4>研究开发</h4>
			<p>纽曼一直以来把产品技术研发创新作为产品的核心竞争力，组建了一支专业的、国际化的研发团队，拥有专业研发技术人员近300名。</p>
		</li>
	</ul>
</div>
```
css：  
```
/*标题公共样式*/
.title{
  font: 34px "Franklin Gothic Medium";
  text-transform: uppercase;/*字母全部大写*/
  text-align: center;
  position: relative;
  margin-bottom: 44px;
}
.title:after{
  content: '';
  display: block;
  width: 42px;
  border-bottom: 4px solid #01a1ff;
  position: absolute;
  left: 50%;
  margin-left: -21px;
  bottom: -3px;
}
/*首页p样式*/
.index-p{
  width: 1200px;
  font: 14px 微软雅黑;
  color: #666;
  padding: 0 70px;
  line-height: 24px;
  text-align: center;
  box-sizing: border-box;
  margin: 0 auto;
}
/*welcome*/
.welcome{
  width: 1200px;
  margin: 55px auto 120px;
}
.welcome .classic{
  width: 1200px;
  display: flex;
  margin-top: 105px;
  padding: 0 15px;
  justify-content: space-around;
}
.welcome .classic li{
  flex: 0 0 227px;
  text-align: center;
}
.welcome h3{
  font-size: 20px;
  color: #333;
  text-transform: uppercase;
  margin-top: 44px;
  font-weight: 900;
}
.welcome h4{
  font-size: 14px;
  color: #666;
  margin-bottom: 29px;
  font-weight: 800;
}
.welcome .classic p{
  font-size: 12px;
  color: #999;
  line-height: 24px;
}
```
### 1.4.6 首页-商品实现：  
#### 1.4.6.1 效果图  
![avatar](/image/项目一/product.png)  
#### 1.4.6.2 实现思路  
(1) 大容器定义100%8  
(2) title使用公共的title即可。  
(3) 内容区域使用ul li列表布局(建议每一个li使用百分比布局)。  
#### 1.4.6.3 实现步骤
html：  
```
<!--production center-->
		<div class="pro-center">
			<h2 class="title">PRODUCTION CENTER</h2>
			<p class="index-p"></p>
			<ul class="pro-list">
				<li>
					<a href="#">
						<img src="home/images/pro-center1.jpg" alt="product">
						<span class="pro-title">
							<span>微波炉-MA323BFS</span>
							<span class="add">+</span>
						</span>
					</a>
				</li>
				<li>
					<a href="#">
						<img src="home/images/pro-center2.jpg" alt="product">
						<span class="pro-title">
							<span>饮水机-NC-ZA1</span>
							<span class="add">+</span>
						</span>
					</a>
				</li>
				<li>
					<a href="#">
						<img src="home/images/pro-center3.jpg" alt="product">
						<span class="pro-title">
							<span>电饭锅-RC-10ZWH</span>
							<span class="add">+</span>
						</span>
					</a>
				</li>
				<li>
					<a href="#">
						<img src="home/images/pro-center4.jpg" alt="product">
						<span class="pro-title">
							<span>迷你音响-RS-168</span>
							<span class="add">+</span>
						</span>
					</a>
				</li>
				<li>
					<a href="#"><img src="home/images/pro-center5.jpg" alt="product">
						<span class="pro-title">
							<span>空气净化器-FES-547</span>
							<span class="add">+</span>
						</span>
					</a>
				</li>
				<li>
					<a href="#"><img src="home/images/pro-center6.jpg" alt="product">
						<span class="pro-title">
							<span>电热水器-ARC-1</span>
							<span class="add">+</span>
						</span>
					</a>
				</li>
			</ul>
			<div class="prev"></div>
			<div class="next"></div>
		</div>
```
css：  
```
/*production center*/
.pro-center{
  margin-bottom: 120px;
  position: relative;
}
.pro-list{
  width: 100%;
  margin-top: 50px;
  overflow: hidden;
}
.pro-list li{
  float: left;
  width: 16.666%;
  position: relative;
}
.pro-list li img{
  width: 100%;
}
.pro-list li:hover .pro-title{
  background-color: #01a1ff;
  color: #fff;
}
.pro-list li:hover .pro-title .add{
  background-color: #fff;
  color: #01a1ff;
}
.pro-center .pro-title{
  width: 100%;
  height: 50px;
  display: block;
  background-color: #e5e5e5;
  line-height: 50px;
  font-size: 14px;
  color: #333;
  position: relative;
  margin-top: -2px;
}
.pro-center .pro-title span:first-child{
  padding-left: 20px;
}
.pro-center .pro-title span.add{
  position: absolute;
  width: 15px;
  height: 15px;
  line-height: 15px;
  display: block;
  background-color: #999999;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  top: 17.5px;
  right: 15px;
  color: #fff;
  text-align: center;
  font-weight: 900;
}
.pro-center .prev{
  top: 270px;
  left: 270px;
}
.pro-center .next{
  top: 270px;
  right: 270px;
}
```
### 1.4.8 首页-新闻实现：
#### 1.4.8.1 效果图
![avatar](/image/项目一/news.png)  
#### 1.4.8.2 实现思路
(1) 大容器1200居中布局。  
(2) title使用公共的title即可。  
(3) 内容区域分为左右结构。  
(4) 左边为图文部分。  
(5) 右边为列表。  
#### 1.4.8.3 实现步骤
html：  
```
<!--news center-->
<div class="news-center">
	<h2 class="title">NEWS CENTER</h2>
	<p class="index-p">
		纽曼品牌数年来培育了数千万忠实用户，特别是得到了中国广大年轻用户的喜爱和认可，纽曼公司拥有一大批经验丰富的市场和品牌推广团队，每年拥有数千万的市场和品牌推广资金。
	</p>
	<div class="news-show">
		<div class="news-left">
			<img src="home/images/news01.png" alt="news" />
			<p>AWE2016开幕，企业巨头竞相争艳，大咖云集</p>
			<ul>
				<li></li>
				<li class="news-active"></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>
		</div>
		<div class="news-right">
			<div class="news-detail">
				<div class="clear"></div>
				<ul class="news-list">
					<li><a href="#"><i>·</i>三大“黑科技”锁定中国消费者的心 <small>2016-03-15</small></a></li>
					<li><a href="#"><i>·</i>正品控宣言：让商品拥有独一无二的身份证 <small>2016-03-15</small></a></li>
					<li><a href="#"><i>·</i>2016AWE：方太最全智能嵌入式厨电套系亮相 <small>2016-03-15</small></a></li>
					<li><a href="#"><i>·</i>美的焖香鼎釜IH智能电饭煲全球首发 <small>2016-03-15</small></a></li>
					<li><a href="#"><i>·</i>AWE2016盛大开幕 释放家电业“引力波” <small>2016-03-14</small></a></li>
					<li><a href="#"><i>·</i>2016年中国家电发展高峰论坛文字实录 <small>2016-03-14</small></a></li>
				</ul>
			</div>
		</div>
	</div>
</div>
```
css:  
```
/*news center*/
.news-center{
  width: 1200px;
  margin: 0 auto 120px;
}
.news-show{
  margin-top: 50px;
  overflow: hidden;
  position: relative;
}
.news-left{
  float: left;
}
.news-left p{
  width: 543px;
  height: 37px;
  line-height: 37px;
  font-size: 18px;
  text-transform: uppercase;
  color: #fff;
  position: absolute;
  background-color: #01a1ff;
  bottom: 13px;
  left: 0;
  padding-left: 10px;
}
.news-left li{
  width: 110.6px;
  height: 5px;
  float: left;
  background-color: #fff;
  margin-top: -2px;
}
li.news-active{
  background-color: #01a1ff;
}
.news-right{
  width: 605px;
  float: right;
}
.news-detail{
  overflow: hidden;
}
.news-date{
  float: left;
  margin: 0 10px 10px 0;
  display: block;
}
.news-date span:first-child{
  display: block;
  width: 70px;
  height: 57px;
  line-height: 57px;
  text-align: center;
  border: 1px solid #01a1ff;
  color: #01a1ff;
  font: 40px Tahoma;
}
.news-date span:last-child{
  display: block;
  width: 70px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  border: 1px solid #01a1ff;
  color: #fff;
  font: 14px Tahoma;
  background-color: #01a1ff;
}
.news-content{
  float: left;
  width: 523px;
  display: block;
  margin-bottom: 10px;
}
.news-content .h2{
  font-size: 18px;
  color: #01a1ff;
  margin: 10px 0 15px;
  font-weight: 900;
  display: block;
}
.news-content .p{
  font-size: 12px;
  color: #999;
  line-height: 20px;
  display: block;
}
.clear{
  clear: both;
}
.news-list{
  font-size: 14px;
  color: #666;
}
.news-list li{
  padding: 13px 0 10px;
  border-top: 1px dotted #ccc;
  position: relative;
}
.news-list li:last-child{
  border-bottom: 1px dotted #ccc;
}
.news-list i{
  font-weight: 900;
  margin-right: 10px;
}
.news-list small{
  font-size: 12px;
  position: absolute;
  right: 0;
}
```
### 1.4.8 首页-视频实现：  
#### 1.4.8.1 效果图
![avatar](/image/项目一/video.png)  
#### 1.4.8.2 实现思路
(1) 大容器1200居中布局。  
(2) title使用公共的title即可。  
(3) 内容区域使用列表（ul,li）。  
#### 1.4.8.3 实现步骤
html:  
```
<!--video center-->
		<div class="video-center">
			<h2 class="title">video center</h2>
			<p class="index-p">
				纽曼现已成为目前中国家电行业最知名的品牌之一，先后获得包括中央电视台、《财经时报》、新浪网、网易、品牌中国等国内几十家专业媒体及权威评奖机构所评出的近百个大奖。
			</p>
			<ul class="video-list">
				<li><a href="#"><img src="home/images/video_06.jpg" alt="video">
						<span class="play"></span>
						<span class="video-title">享受生活,从饮水开始！</span>
						<span class="video-desc">双层过滤滤芯，使饮水更加安全、放心。</span>
					</a></li>
				<li><a href="#"><img src="home/images/video_08.jpg" alt="video">
						<span class="play"></span>
						<span class="video-title">把时间留在最美一刻！</span>
						<span class="video-desc">RFE-326三门冰箱，特大存储容量，更节能。</span>
					</a></li>
				<li><a href="#"><img src="home/images/video_11.jpg" alt="video">
						<span class="play"></span>
						<span class="video-title">RS-197，给你一份净土。</span>
						<span class="video-desc">RS-197采用全新技术，高效净化空气。</span>
					</a></li>
				<li><a href="#"><img src="home/images/video_13.jpg" alt="video">
						<span class="play"></span>
						<span class="video-title">纽曼咖啡机，诠释生活真理。</span>
						<span class="video-desc">精致外观与健全的功能，居家的明早选择！</span>
					</a></li>
			</ul>
			<div class="prev"></div>
			<div class="next"></div>
		</div>
```
css:  
```
/*video center*/
.video-center{
  width: 1200px;
  margin: 0 auto;
  position: relative;
}
.video-list{
  margin: 54px 0 144px;
  padding: 4px;
  overflow: hidden;
}
.video-list li{
  float: left;
  width: 252px;
  margin-right: 53px;
  text-align: center;
  position: relative;
  overflow: hidden;
}
.video-list li:last-child{
  margin-right: 0;
}
.video-list img{
  width: 260px;
  height: 195px;
  display: block;
}
.video-list .play{
  display: block;
  width: 45px;
  height: 45px;
  border: 3px solid #fff;
  background-color: rgba(0,0,0,.5);
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  position: absolute;
  left: 102px;
  top: 75px;
}
.video-list .play:after{
  content: '';
  display: block;
  border: 15px solid transparent;
  border-left-color: #fff;
  position: absolute;
  left: 18px;
  top: 8px;
}
.video-list .video-title{
  margin: 25px 0 10px;
  color: #333;
  font-weight: bold;
  font-size: 16px;
  display: block;
}
.video-list .video-desc{
  font-size: 12px;
  color: #999;
}
.video-list li:hover {
  box-shadow: 3px 3px 3px #01a1ff, -3px -3px 3px #01a1ff;
}
.video-list li:hover .video-title{
  color: #01a1ff;
}
.video-list li:hover .play{
  width: 54px;
  height: 54px;
  border: 3px solid #01a1ff;
  background-color: rgba(255,255,255,.5);
  left: 100px;
  top: 73px;
}
.video-list li:hover .play:after{
  border-left-color: #01a1ff;
  left: 21px;
  top: 11px;
}
.video-center .prev{
  left: -50px;
  top: 270px;
}
.video-center .next{
  right: -22px;
  top: 270px;
}
```
### 1.4.10 页脚实现：
#### 1.4.10.1 效果图
![avatar](/image/项目一/foot.png)  
#### 1.4.10.2 实现思路
(1) 需要一个大容器，宽度为百分百的，添加背景颜色蓝色。  
(2) 将大容器分为上下结构。  
(3) 上半部分1200居中，内容为左右结构。  
(4) 上半部分-左边，建议使用dl dt dd 布局。  
(5) 上半部分-右边，使用form标签。  
(6) 下半部分使用一个百分百盒子，内容居中即可。  
#### 1.4.10.3 实现步骤
html:  
```html
<!--footer-->
		<footer>
			<div class="footer">
				<div class="footer-content">
					<div class="footer-nav">
						<dl>
							<dt><a href="#">关于我们</a></dt>
							<dd><a href="#">公司简介</a></dd>
							<dd><a href="#">企业文化</a></dd>
							<dd><a href="#">企业荣誉</a></dd>
							<dd><a href="#">资格认证</a></dd>
							<dd><a href="#">研发生产</a></dd>
						</dl>
						<dl>
							<dt><a href="#">产品中心</a></dt>
							<dd><a href="#">饮水机</a></dd>
							<dd><a href="#">冰箱</a></dd>
							<dd><a href="#">洗衣机</a></dd>
							<dd><a href="#">空调</a></dd>
							<dd><a href="#">其他产品</a></dd>
						</dl>
						<dl>
							<dt><a href="#">新闻中心</a></dt>
							<dd><a href="#">热点聚焦</a></dd>
							<dd><a href="#">企业新闻</a></dd>
							<dd><a href="#">行业新闻</a></dd>
							<dd><a href="#">热点聚焦</a></dd>
						</dl>
						<dl>
							<dt><a href="#">客户服务</a></dt>
							<dd><a href="#">招商网加盟</a></dd>
							<dd><a href="#">购买流程</a></dd>
							<dd><a href="#">售后服务</a></dd>
							<dd><a href="#">技术支持</a></dd>
							<dd><a href="#">常见问题</a></dd>
						</dl>
						<dl>
							<dt><a href="#">联系我们</a></dt>
							<dd><a href="#">在线留言</a></dd>
							<dd><a href="#">网上咨询</a></dd>
							<dd><a href="#">联系我们</a></dd>
						</dl>
					</div>
					<form action="#" class="footer-concat">
						<p>
							<input type="text" placeholder="请输入您的姓名" />
							<input type="tel" placeholder="请输入您的联系方式" />
						</p>
						<p>
							<textarea cols="30" rows="10" placeholder="请输入您的留言"></textarea>
						</p>
						<p>
							<input type="button" value="提交">
						</p>
					</form>
				</div>
			</div>
			<p class="copyright">
				Copyright&copy;2030 teacherhou.com All Rights Reserved Design by WenCun 粤ICP备13005446号-1
			</p>
		</footer>
```
css:  
```css
/*footer*/
footer{
  width: 100%;
  background-color: #01a1ff;
}
.footer{
  width: 100%;
  border-bottom: 1px solid #fff;
  color: #fff;
}
footer a{
  color: #fff;
}
.footer-content{
  width: 1200px;
  margin: 0 auto;
  padding: 50px 0;
  overflow: hidden;
}
.footer-nav{
  float: left;
}
footer dl{
  float: left;
  margin-right: 100px;
}
footer dl:last-child{
  margin-right: 0;
}
footer dl dt{
  font-size: 16px;
  padding-bottom: 10px;
  border-bottom: 1px solid #fff;
}
footer dl dd{
  font-size: 12px;
  margin-top: 20px;
}
.footer-concat{
  float: right;
}
.footer-concat input, .footer-concat textarea{
  outline: none;
  border: 1px solid #fff;
  background-color: #01a1ff;
  color: #fff;
}
.footer-concat input{
  width: 134px;
  height: 30px;
  padding: 0 5px;
}
.footer-concat input::-webkit-input-placeholder, .footer-concat textarea::-webkit-input-placeholder{
  color: #fff;
}
.footer-concat input::-ms-input-placeholder ,.footer-concat textarea::-ms-input-placeholder{
  color: #fff;
}
.footer-concat input:first-child{
  margin-right: 17px;
}
.footer-concat textarea{
  width: 302px;
  height: 95px;
  margin: 10px 0;
  padding: 5px;
}
.footer-concat input[type=button]{
  width: 110px;
  height: 30px;
}
footer .copyright{
  height: 40px;w110
  line-height: 40px;
  text-align: center;
  color: #fff;
  font-size: 12px;
}
```
### 1.4.10 新闻页面banner制作
#### 1.4.10.1 效果图
![avatar](/image/项目一/banner.png)
#### 1.4.10.2 实现步骤
html:  
```html
<!--banner-->
<div class="banner">
    <a href="../home/index.html">
        <img class="banner-img" src="../about/images/about-banner.png" alt="banner" />
    </a>
</div>
```
css:  
```css
/*banner*/
.banner{
  width: 100%;
  height: 400px;
  position: relative;
  overflow: hidden;
}
.banner .imgs{
  width: 1000%;
  position: absolute;
}
.banner li{
  float: left;
}
.banner img{
  width: 100%;
  height: 400px;
}
```
### 1.4.11 新闻页面-侧边栏制作
### 1.4.11.1 效果图
![avatar](/image/项目一/left.png) 
#### 1.4.11.2 实现2骤
html：  
```html
<aside>
	<div class="aside-title">
		<h2 class="title">news center</h2>
		<p>新闻中心</p>
	</div>
	<ul class="aside-nav">
		<li class="aside-active"><a href="#"><i>·</i>最新动态 >></a></li>
		<li><a href="#"><i>·</i>企业新闻 >></a></li>
		<li><a href="#"><i>·</i>行业新闻 >></a></li>
		<li><a href="#"><i>·</i>热点聚焦 >></a></li>
	</ul>
</aside>
```
css：  
```css
/*侧边栏*/
aside{
  float: left;
  width: 200px;
  margin-right: 45px;
  border: 1px solid #01a1ff;
}
aside .aside-title{
  padding: 30px 0 24px;
  background-color: #01a1ff;
  text-align: center;
  color: #fff;
}
aside .title{
  padding-bottom: 10px;
  margin-bottom: 15px;
  font-size: 26px;
}
aside .aside-title p{
  font-size: 14px;
}
aside .title:after{
  border-color: #fff;
}
aside .aside-nav{
  padding: 9px 14px 14px;
  font-size: 18px;
}
aside .aside-nav li{
  width: 172px;
  text-align: center;
  padding: 8px 0;
  margin-bottom: 20px;
}
aside .aside-nav li:hover{
  background-color: #01a1ff;
  -webkit-border-radius: 15px;
  -moz-border-radius: 15px;
  border-radius: 15px;
}
aside .aside-nav li:hover a{
  color: #fff;
}
aside .aside-nav li:last-child{
  margin-bottom: 0px;
}
aside .aside-nav a{
  color: #666;
}
aside .aside-nav i{
  font-weight: bold;
  margin-right: 3px;
}
.aside-active{
  background-color: #01a1ff;
  -webkit-border-radius: 15px;
  -moz-border-radius: 15px;
  border-radius: 15px;
}
.aside-active a{
  color: #fff!important;
}
.aside{
  float: left;
}
.aside aside{
  clear: both;
}
.aside aside:first-child{
  margin-bottom: 40px;
}
.aside .search{
  position: relative;
  overflow: hidden;
}
.aside .search input{
  width: 137px;
  height: 36px;
  display: block;
  margin: 9px 13px;
  padding: 0 25px 0 10px;
  color: #333333;
}
.aside .search span{
  color: #01a1ff;
  position: absolute;
  right: 16px;
  top: 23px;
}
```
### 1.4.12 新闻页面-新闻区制作
### 1.4.12.1 效果图
![avatar](/image/项目一/newsList.png) 
#### 1.4.12.2 实现步骤
html：  
```h
 <div class="container-content">
     <div class="content-title">
         <h3>新闻中心 <span>news center</span></h3>
         <div class="crumbs-nav">
             您当前的位置&nbsp;&nbsp;&gt;&nbsp;&nbsp;<a href="../index.html">首页</a>
             &nbsp;&nbsp;&gt;&nbsp;&nbsp;<span>新闻中心</span>
         </div>
     </div>
     <ul class="news-list">
         <li>
             <div class="news-item-date">
                 <span class="day">12</span>
                 <span class="year-month">2030-03</span>
             </div>
             <div class="news-item-content">
                 <h2 class="news-h2">正品控宣言：让商品拥有独一无二的身份证</h2>
                 <p class="news-p">今天，中国家电及消费电子博览会(Appliance&electronics World Expo，简称AWE)圆满落幕，展会吸引了包括消费电子、智能家电、白色家电、厨房电器、生活电器、环境家电及家电配件等多品类的家电制造商参加，也......</p>
             </div>
         </li>
         <li>
             <div class="news-item-date">
                 <span class="day">12</span>
                 <span class="year-month">2030-03</span>
             </div>
             <div class="news-item-content">
                 <h2 class="news-h2">2016年中国家电发展高峰论坛文字实录</h2>
                 <p class="news-p">马洪涛：尊敬的各位家电行业的大佬，尊敬的各位媒体同行，尊敬的各位来宾，大家下午好，我是中央电视台财经频道的主持人马洪涛，非常高兴能够再一次为大家主持中国家电发展高峰论坛。今天是2016年，首先要代表......</p>
             </div>
         </li>
         <li>
             <div class="news-item-date">
                 <span class="day">12</span>
                 <span class="year-month">2030-03</span>
             </div>
             <div class="news-item-content">
                 <h2 class="news-h2">正品控宣言：让商品拥有独一无二的身份证</h2>
                 <p class="news-p">今天，中国家电及消费电子博览会(Appliance&electronics World Expo，简称AWE)圆满落幕，展会吸引了包括消费电子、智能家电、白色家电、厨房电器、生活电器、环境家电及家电配件等多品类的家电制造商参加，也......</p>
             </div>
         </li>
         <li>
             <div class="news-item-date">
                 <span class="day">12</span>
                 <span class="year-month">2030-03</span>
             </div>
             <div class="news-item-content">
                 <h2 class="news-h2">正品控宣言：让商品拥有独一无二的身份证</h2>
                 <p class="news-p">今天，中国家电及消费电子博览会(Appliance&electronics World Expo，简称AWE)圆满落幕，展会吸引了包括消费电子、智能家电、白色家电、厨房电器、生活电器、环境家电及家电配件等多品类的家电制造商参加，也......</p>
             </div>
         </li>
         <li>
             <div class="news-item-date">
                 <span class="day">12</span>
                 <span class="year-month">2030-03</span>
             </div>
             <div class="news-item-content">
                 <h2 class="news-h2">正品控宣言：让商品拥有独一无二的身份证</h2>
                 <p class="news-p">今天，中国家电及消费电子博览会(Appliance&electronics World Expo，简称AWE)圆满落幕，展会吸引了包括消费电子、智能家电、白色家电、厨房电器、生活电器、环境家电及家电配件等多品类的家电制造商参加，也......</p>
             </div>
         </li>
         <li>
             <div class="news-item-date">
                 <span class="day">12</span>
                 <span class="year-month">2030-03</span>
             </div>
             <div class="news-item-content">
                 <h2 class="news-h2">正品控宣言：让商品拥有独一无二的身份证</h2>
                 <p class="news-p">今天，中国家电及消费电子博览会(Appliance&electronics World Expo，简称AWE)圆满落幕，展会吸引了包括消费电子、智能家电、白色家电、厨房电器、生活电器、环境家电及家电配件等多品类的家电制造商参加，也......</p>
             </div>
         </li>
         <li>
             <div class="news-item-date">
                 <span class="day">12</span>
                 <span class="year-month">2030-03</span>
             </div>
             <div class="news-item-content">
                 <h2 class="news-h2">正品控宣言：让商品拥有独一无二的身份证</h2>
                 <p class="news-p">今天，中国家电及消费电子博览会(Appliance&electronics World Expo，简称AWE)圆满落幕，展会吸引了包括消费电子、智能家电、白色家电、厨房电器、生活电器、环境家电及家电配件等多品类的家电制造商参加，也......</p>
             </div>
         </li>
     </ul>
     <ul class="pages">
         <li>&lt;&nbsp;上一页</li>
         <li>1</li>
         <li>2</li>
         <li>3</li>
         <li>4</li>
         <li>5</li>
         <li>...</li>
         <li>下一页&nbsp;&gt;</li>
     </ul>
 </div>
```
css：  
```css
/*container*/
.container{
  width: 1218px;
  margin: 60px auto 90px;
  overflow: hidden;
}
.container-content{
  width: 970px;
  float: left;
}
.pages{
  position: relative;
  left: 287px;
}
.pages li{
  width: 30px;
  height: 30px;
  line-height: 30px;
  display: inline-block;
  background-color: #e5e5e5;
  text-align: center;
  color: #999999;
}
.pages li:nth-child(2), .pages li:hover{
  background-color: #01a1ff;
  color: #fff;
}
.pages li:first-child, .pages li:last-child{
  width: 92px;
}
```

