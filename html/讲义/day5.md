## 项目五：微信小程序开发
### 5.1 项目目标
(1)了解如何个人开发者申请微信公众平台账号。  
(2)了解如何在微信公众平台后台配置微信小程序。  
(3)掌握微信小程序开发流程。    
(4)掌握利用uni-app开发跨平台应用。  
(5)掌握微信小程序发布流程。 
(6)综合应用微信小程序开技术，开发微信小程序。   
### 5.2 项目需求
![avatar](/image/项目五/首页.png)  
### 5.3 技术栈
微信小程序+uni-app
### 5.4 项目开发
#### 5.4.1 准备工作
(1) 申请微信小程序appId。  
(2) 安装微信开发者工具。  
(3) 创建新的uni-app项目。  
(4) 调试项目，通过微信开发者工具运行项目。  
#### 5.4.2 项目配置
pages.json:  
页面配置：
```
{
	"pages": [ //pages数组中第一项表示应用启动页，参考：https://uniapp.dcloud.io/collocation/pages
		{
			"path": "pages/index/index",
			"style": {
				"navigationBarTitleText": "书城小程序",
				"app-plus":{
					"titleNView": false
				}
			}
		},{
            "path" : "pages/classify/classify",
            "style" :{
                "navigationBarTitleText": "分类",
                "enablePullDownRefresh": false,
				"app-plus":{
					"titleNView": false
				}
            }
        },{
            "path" : "pages/bookshelf/bookshelf",
            "style" : {
                "navigationBarTitleText": "我的书架",
                "enablePullDownRefresh": false,
				"app-plus":{
					"titleNView": false
				}
            }
        },{
            "path" : "pages/personal/personal",
            "style": {
                "navigationBarTitleText": "个人中心",
                "enablePullDownRefresh": false,
				"app-plus":{
					"titleNView": false
				}
            }   
        },{
            "path" : "pages/list/list",
            "style" :{
                "navigationBarTitleText": "",
                "enablePullDownRefresh": false
            }
        },{
            "path" : "pages/book/book",
            "style" :{
                "navigationBarTitleText": "详情",
                "enablePullDownRefresh": false
            }
        },
		{
		    "path" : "pages/read/read",
		    "style" :{
		        "navigationBarTitleText": "",
		        "enablePullDownRefresh": false
		    }
		}
    ]
}
```
导航栏配置：
```
"globalStyle": {
	"navigationBarTextStyle": "black",
	"navigationBarTitleText": "书城小程序",
	"navigationBarBackgroundColor": "#DAA520",
	"backgroundColor": "#F8F8F8"
}
```
tabbar配置:  
```
"tabBar": {
	"color": "#bfbfbf",
	"selectedColor": "#DAA520",
	"borderStyle": "black",
	"backgroundColor": "#fff",
	"list": [{
		"pagePath": "pages/index/index",
		"iconPath": "static/images/tab/index.png",
		"selectedIconPath": "static/images/tab/selected_index.png",
		"text": "首页"
	}, {
		"pagePath": "pages/classify/classify",
		"iconPath": "static/images/tab/classify.png",
		"selectedIconPath": "static/images/tab/selected_classify.png",
		"text": "分类"
	},{
		"pagePath": "pages/bookshelf/bookshelf",
		"iconPath": "static/images/tab/bookshelf.png",
		"selectedIconPath": "static/images/tab/selected_bookshelf.png",
		"text": "书架"
	},{
		"pagePath": "pages/personal/personal",
		"iconPath": "static/images/tab/personal.png",
		"selectedIconPath": "static/images/tab/selected_personal.png",
		"text": "我的"
	}]
}
```
#### 5.4.3 书城首页实现
![avatar](/image/项目五/首页.png)     
index.vue：  

```
<template>
	<view>
		<!-- #ifdef H5 -->
		<view class="nav">
			<view class="search-box">
				<image class="search-icon" src="../../static/images/icon/search.png" mode=""></image>
				<input class="search" type="text" value="" placeholder="搜索" placeholder-style="color:#aaa"/>
			</view>
			<view class="nav-right">
				取消
			</view>
		</view>
		<!-- #endif -->
		<swiper class="swiper" indicator-color="#fff" indicator-active-color="#DAA520" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item  v-for="(item,index) in swiperPath">
				<view class="swiper-item" >
					<image mode="aspectFill" class="swiper-img" :src="item.src" ></image>
				</view>
			</swiper-item>
		</swiper>
		<view class="hot-box">
			<view class="hot-title">
				热门推荐
			</view>
			<view class="hot-list">
				<view class="item" v-for="item in list">
					<book :book="item"></book>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import book from "../../components/book.vue";
	export default {
		components:{
			book
		},
		created() {
			var url= "/book/getList.php";
			this.$request(url, {}).then(res => {
				this.list= res
			})
		},
		data() {
			return{
				swiperPath:[{
					src:"../../static/images/swiper/swiper1.jpg",
				},{
					src:"../../static/images/swiper/swiper2.jpg",
				},{
					src:"../../static/images/swiper/swiper3.jpg",
				}],
				list:[]
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped>
	/* #ifdef H5 */
	.nav{
		width: 100%;
		height: 50px;
		display: flex;
		align-items: center;
		justify-content: space-around;
		background-color: #DAA520;
		position: fixed;
		top:0;
		left: 0;
		z-index:2;
	}
	.search-box{
		width: 70%;
		margin:0 5%;
		position: relative;
	}
	.search-icon{
		width: 25px;
		height: 25px;
		margin: 2.5px;
		position: absolute;
		left: 5px;
	}
	.search{
		width: 85%;
		height: 30px;
		line-height: 30px;
		background-color: #fff;
		border-radius: 20px;
		font-size: 16px;
		padding-left:15%;
	}
	.nav-right{
		font-size: 18px;
		color:#444;
		margin:5px;
	}
	.swiper{
		margin-top:50px
	}
	/* #endif */
	
	.swiper{
		width: 100%;
		height: 120px;
	}
	.swiper-item{
		width: 100%;
		height: 120px;
	}
	.swiper-img{
		width: 100%;
		height: 120px;
	}
	.hot-title{
		font-size: 35px;
		font-weight: bold;
		font-family:"隶书";
		margin-top:10px;
		padding: 2px 10px;
		border-bottom:5px solid #DAA520;
	}
</style>
```
compontents/book.vue：
```
<template>
	<view class="box" @click="handleClick(book.id)">
		<image :src="book.imgPath" mode=""></image>
		<view class="info-box">
			<view class="name">{{book.name}}</view>
			<view class="introduce">{{book.introduce}}</view>
			<view class="author">{{book.author}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:['book'],
		data() {
			return {
			};
		},
		methods:{
			handleClick(value){
				uni.navigateTo({
					url:"/pages/book/book?id="+value
				})
			}
		}
	}
</script>

<style scoped>
.box{
	margin:10px;
	padding-bottom:10px;
	display: flex;
	justify-content: space-around;
	border-bottom:1px solid #aaa;
	box-sizing: border-box;
}
image{
	width: 120px;
	height: 120px;
	flex-shrink:0;
}
.info-box{
	position: relative;
}
.introduce{
	width: 220px;
	line-height:20px;
	height:40px;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	overflow: hidden;
	word-wrap: break-word;
	color: #999;
}
.name{
	font-size: 20px;
	font-weight: bold;
	margin: 5px 0;
}
.author{
	font-size: 16px;
	position:absolute;
	bottom: 0;
	left: 0;
}
</style>
```
编写公用函数common/request.js：  
条件编译，不同环境下请求方式不同：  
```
// #ifdef H5
const baseUrl = '/api'
// #endif

//#ifdef APP-PLUS || MP-WEIXIN
const baseUrl = 'https://www.zhonghuiqh.com'
//#endif

const request = (url = '', date = {}, type = 'GET', header = {
}) => {
    return new Promise((resolve, reject) => {
        uni.request({
            method: type,
            url: baseUrl + url,
            data: date,
            header: header,
            dataType: 'json',         
        }).then((response) => {
            setTimeout(function() {
                uni.hideLoading();
            }, 200);
            let [error, res] = response;        
            resolve(res.data);
        }).catch(error => {
            let [err, res] = error;
            reject(err)
        })
    });
}
export default request
```
#### 5.4.4 分类页面实现  
![avatar](/image/项目五/分类.png)     
classify.vue：  

```
<template>
	<view class="box">
		<view class="item" v-for="item in list" @click="handle(item.title)">
			<view class="info">
				<view class="title">{{item.title}}</view>
				<view class="lab">{{item.label}}</view>
			</view>
			<image :src="item.imgPath"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[{
						title:"青春",
						label:"校园爱情",
						imgPath:"https://img14.360buyimg.com/n0/jfs/t1/73966/15/3682/259162/5d1d95aaE4501d809/7559173c99988b77.jpg"
					},{
						title:"小说",
						label:"世界名著",
						imgPath:"https://img14.360buyimg.com/n0/jfs/t1/143688/17/18523/607547/5fd9c499E38f25bee/4c76363feeffcd8a.jpg"
					},{
						title:"文学",
						label:"文学理论",
						imgPath:"https://img14.360buyimg.com/n0/jfs/t1/131859/30/15703/621629/5faba484E5d161b27/4f59411770063e43.png"
					},{
						title:"艺术",
						label:"音乐/美术",
						imgPath:"https://img14.360buyimg.com/n0/jfs/t1/11445/1/7804/391728/5c652750Eba956e6d/87f6da89cde11058.jpg"
					},
					{
						title:"动漫",
						label:"大师画集",
						imgPath:"https://img14.360buyimg.com/n0/jfs/t1/134777/21/5604/284765/5f226ce6E313af7bf/a69d6b0b59e8eecd.jpg"
					},{
						title:"生活",
						label:"茶/养花",
						imgPath:"https://img14.360buyimg.com/n0/jfs/t1/120311/15/348/334636/5eb4a768E05832d8d/670a444565bfd7c9.jpg"
					},{
						title:"育儿/成长",
						label:"准父母读物",
						imgPath:"https://img14.360buyimg.com/n0/jfs/t1/136216/29/10430/288533/5f685fbaE24ca385c/127c1e8c10ea809f.jpg"
					},{
						title:"保健",
						label:"食疗/健身",
						imgPath:"https://img14.360buyimg.com/n0/jfs/t16690/232/297355677/472123/1dfb8000/5a693cd8N39e33d83.jpg"
					},{
						title:"婚恋",
						label:"恋爱/婚姻",
						imgPath:"https://img14.360buyimg.com/n0/jfs/t1/75389/37/6816/102685/5d4ec638E1dbdd4f7/428ccc3001ed1414.jpg"
					},{
						title:"旅游",
						label:"自然名胜",
						imgPath:"https://img14.360buyimg.com/n0/g8/M03/04/05/rBEHZ1A8RTcIAAAAAAFds-3VXc4AAA0OAE29LAAAV3L216.jpg"
					},{
						title:"娱乐时尚",
						label:"游戏/明星",
						imgPath:"https://img14.360buyimg.com/n0/jfs/t1/144221/37/7213/226947/5f4c5feeEf4edaac4/2c3268cf7cff2966.jpg"
					}
				]
			}
		},
		methods:{
			handle(value){
				uni.navigateTo({
					url: '/pages/list/list?title='+value,
				});
			}
		}
	}
</script>

<style scoped>
.box{
	display: flex;
	/* justify-content: space-around; */
	flex-wrap: wrap;
}
.item{
	width: 45%;
	background-color: #f8f8f8;
	margin:5px 2.5%;
	display: flex;
	justify-content: space-around;
}
image{
	width: 70px;
	height: 70px;
	margin:5px;
}
.title{
	margin:15px 0;
}
.lab{
	margin:15px 0;
	font-size: 14px;
	color: #aaa;
}
</style>
```
#### 5.4.5 分类书籍列表页面
![avatar](/image/项目五/列表.png)     
list.vue：  

```
<template>
	<view>
		<view v-for="item in list">
			<book :book="item"></book>
		</view>
	</view>
</template>

<script>
	import book from "../../components/book.vue"
	export default {
		onLoad(option) {
			uni.setNavigationBarTitle({
			    title: option.title
			});
			var url= "/book/getList.php";
			this.$request(url, {}).then(res => {
				this.list=res
			})
		},
		components:{
			book
		},
		data() {
			return {
				list:[]
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
```
#### 5.4.6 书籍详情页面  
![avatar](/image/项目五/详情.png)     
Book.vue：

```
<template>
	<view class="box">
		<view class="book-info">
			<image :src="book.imgPath" mode=""></image>
			<view class="info">
				<view class="book-name">
					{{book.name}}
				</view>
				<view class="book-author">作者：{{book.author}}</view>
				<view class="add" @click="handleClick(book.id)">添加到书架</view>
			</view>
		</view>
		<view class="book-introduce">
			{{book.introduce}}
		</view>
	</view>
</template>

<script>
	export default {
		onLoad(option) {
			var url= "/book/getBookInfo.php?id="+option.id;
			this.$request(url, {}).then(res => {
				this.book= res
			})
		},
		data() {
			return {
				book:{}
			}
		},
		methods: {
			handleClick(value){
				var url= "/book/addBook.php?id="+value;
				this.$request(url, {}).then(res => {
					uni.showToast({
						title:res,
						icon:"none"
					})
				})
			}
		}
	}
</script>

<style scoped>
.box{
	background-color: #f6f6f6;
	width: 100vw;
	height: 110vh;
}
.book-info{
	background-color: #fff;
	display: flex;
	padding: 20px 10px;
}
image{
	width:200px;
	height: 200px;
}
.info{
	position: relative;
}
.book-name{
	font-size: 27px;
	font-weight: bold;
	margin:10px 0;
}
.book-author{
	font-size: 18px;
}
.add{
	position: absolute;
	bottom: 30px;
	color: #ee4000;
}
.book-introduce{
	font-size: 15px;
}
</style>
```
#### 5.4.7 书架页面制作  
![avatar](/image/项目五/书架.png)   
bookshelf.vue：

```
<template>
	<view class="box">
		<view @click="handleClick" class="item" v-for="item in list" >
			<image mode="aspectFit" :src="item.imgPath" ></image>
			<view class="item-name">
				{{item.name}}
			</view>
		</view>
		<navigator url="/pages/classify/classify" open-type="switchTab" class="add-box">
			<view class="add" >添加书籍</view>
		</navigator>
	</view>
</template>

<script>
	export default {
		onShow() {
			var url= "/book/getBookshelf.php";
			this.$request(url, {}).then(res => {
				this.list= res
				console.log(this.list)
			})
		},
		data() {
			return {
				list:[]
			}
		},
		methods:{
			handleClick(){
				uni.navigateTo({
					url:"/pages/read/read"
				})
			}		
		}
	}
</script>

<style scoped>
.box{
	display: flex;
	flex-wrap: wrap;
	padding:40px 10px;
	
}
.item{
	margin:1%;
	width: 31%;
}
image{
	width:30vw;
	height:30vw;
}
.item-name{
	text-align: center;
	margin:0 auto;
}
.add-box{
	margin:2% 5% 10% 5%;
	width: 23%;
	background-color: #eee;
	display: flex;
	justify-content: center;
	align-items: center;
}
.add{
	color: #007AFF;
}
</style>
```
#### 5.4.8 阅读页面  
![avatar](/image/项目五/阅读.png)  
Read.vue：  

```
<template>
	<view class="bg" :style="'background-color:'+bgColor+';color:'+fontColor">
		<scroll-view @click="handleClick" class="scroll" scroll-y="true" lower-threshold="100" @scrolltolower="loadMore">
			<view v-for="item in list">
				<text :style="'font-size:'+chapterSize+'px'" class="chapter">{{item.chapter}}</text><br />
				<text :style="'font-size:'+contentSize+'px'">{{item.content}}</text>
			</view>
		</scroll-view>
		<view class="model" v-show="show">
			<view class="box">
				<view style="flex:1;text-align: center;">字体大小：</view>
				<view style="display: flex;flex:2">
					<button class="btn" @click="changeFont('-')">-</button>
					<button class="btn" @click="changeFont('+')">+</button>
				</view>
			</view>
			<view class="box">
				<view style="flex:1;text-align: center;">主题：</view>
				<view style="display: flex;flex:3;justify-content: space-around;">
					<view class="color-btn" @click="changeColor('black')" style="background-color: #666;"></view>
					<view class="color-btn" @click="changeColor('yellow')" style="background-color: #FFDEAD;"></view>
				</view>
			</view>
			<!-- #ifndef H5 -->
			<view class="box">
				<view style="flex:1;text-align: center;">亮度：</view>
				<slider style="flex:3" :value="screenBrightness*100" @change="sliderChange" />
			</view>
			<!-- #endif -->
		</view>
	</view>
</template>

<script>
	export default {
		onLoad() {
			uni.setNavigationBarTitle({
				title: "福尔摩斯侦探集"
			})
			// #ifndef H5
			uni.getScreenBrightness({
				success: (res) => {
					this.screenBrightness = res.value
				}
			})
			// #endif
		},
		created() {
			this.getBook(this.index);
		},
		data() {
			return {
				contentSize: 23,
				chapterSize: 28,
				bgColor:"#FFDEAD",
				fontColor:"#000",
				show: false,
				index: 1,
				list: [],
				// #ifndef H5
				screenBrightness: 0,
				// #endif
			}
		},
		methods: {
			changeColor(value){
				switch (value){
					case "yellow":
					this.bgColor="#FFDEAD";
					this.fontColor="#000";
					break;
					case "black":
					this.bgColor="#666";
					this.fontColor="#ccc";
					break;
					default:
					break;
				}
			},
			changeFont(value) {
				if (value == "-") {
					if (this.contentSize > 12) {
						this.contentSize = this.contentSize - 2
						this.chapterSize = this.chapterSize - 2
					}
				} else {
					if (this.contentSize < 38) {
						this.contentSize = this.contentSize + 2
						this.chapterSize = this.chapterSize + 2
					}
				}
			},
			// #ifndef H5
			sliderChange(e) {
				this.screenBrightness = e.detail.value / 100
				uni.setScreenBrightness({
					value: this.screenBrightness,
					success: (res) => {
						console.log(res)
					}
				})
			},
			// #endif
			handleClick() {
				this.show = !this.show
			},
			getBook(id) {
				var url= "/book/getBook.php?id="+id;
				this.$request(url, {}).then(res => {
					var chapter = res.chapter.replace(/\s/, " ").replace(/\n/, " ")
					var content = res.content.replace(/\s/, " ").replace(/\n/, " ")
					var item = {
						chapter,
						content
					}
					this.list.push(item)
				})

			},
			loadMore() {
				this.index++;
				this.getBook(this.index);
			}
		}
	}
</script>

<style scoped>
	.bg {
		height: 100vh;
		padding: 0 5px 0 10px;
	}
	.scroll {
		height: 100%;
	}
	.chapter {
		font-size: 28px;
		font-weight: bold;
	}
	.model {
		z-index: 2;
		padding: 10px 0;
		width: 100%;
		position: fixed;
		bottom: 0;
		left: 0;
		background: #fff;
		color: #000;
	}
	slider {
		width: 200px;
	}
	.box {
		display: flex;
		margin: 10px 0;
		align-items: center;
	}
	.btn {
		width: 70px;
		height: 30px;
		line-height: 30px;
	}
	.color-btn{
		width:40px;
		height:40px;
		border-radius: 50%;
	}
</style>
```
#### 5.4.9 个人界面  
![avatar](/image/项目五/个人.png)  
Personal.vue：  

```
<template>
	<view class="box">
		<view class="user-info">
			<image class="user-img" mode="aspectFill" src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202007%2F25%2F20200725214229_RsyfK.thumb.400_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1614409358&t=2ad53cbc9722ed804c714e8bcc4a9df1"></image>
			<view>王刚</view>
		</view>
		<view class="list">
			<view class="item">
				<view>我的会员</view>
				<view><image class="icon" src="../../static/images/icon/icon.png" mode=""></image></view>
			</view>
			<view class="item">
				<view>我的金币</view>
				<view><image class="icon" src="../../static/images/icon/icon.png" mode=""></image></view>
			</view>
			<view class="item">
				<view>看过的书籍</view>
				<view><image class="icon" src="../../static/images/icon/icon.png" mode=""></image></view>
			</view>
			<view class="item">
				<view>意见反馈</view>
				<view><image class="icon" src="../../static/images/icon/icon.png" mode=""></image></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		methods: {
		}
	}
</script>

<style scoped>
	.box{
		padding:5vw;
	}
	.user-info{
		width:90vw;
		padding:10px 0;
		border-radius: 4px;
		box-shadow: 3px 3px 3px 3px #ccc;
		display: flex;
		align-items: center;
		font-size:30px ;
	}
.user-img{
	width:70px;
	height:70px;
	margin:10px 20px;
	border-radius: 50%;
}
.item{
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-size: 25px;
	color: #666;
	padding:10px;
	border-bottom: 1px solid #ddd;
}
.icon{
	width: 30px;
	height: 30px;
}
.list{
	margin-top:30px;
}
</style>
```
#### 5.4.10 调试、运行程序。检查显示结果是否正确  
(1) 手机预览小程序。  
(2) 打包app手机预览。  
(3) 小程序发布。  
(4) app发布。  