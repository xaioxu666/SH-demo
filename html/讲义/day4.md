## 项目四：移动应用开发
### 4.1 项目目标
(1)掌握Vue生命周期、基础语法。    
(2)掌握Vue指令、组件的使用。    
(3)掌握Vue-cli脚手架的使用。    
(4)熟练使用axios获取数据。    
(5)掌握element-ui实现页面样式布局。  
(6)掌握stylus样式预编译。  
(7)掌握Vue打包app。  
(8)综合应用Vue，开发移动端应用。     

### 4.2 项目需求  
![avatar](\image\项目四\index.png)  
页面结构：   
![avatar](/image/项目四/index1.png)  
项目功能：  
(1) 商家信息展示。  
(2) 菜品展示。  
(3) 实现两个滚动区域联动。  
(4) 添加购物车。  
(5) 显示购物车菜品列表。  

### 4.3 技术栈
vue+element-ui+stylus  
### 4.4 项目开发
#### 4.4.1 准备工作
(1) 安装node。  
(2) 通过npm安装vue脚手架vue-cli。  
```
npm install -g vue-cli
```
(3) 利用脚手架搭建项目并配置。  
```
vue init webpack (项目名)
```
(4) 安装项目所需依赖。  
```
npm install axios stylus stylus-loader@3.0.2 fastclick better-scroll element-ui --save
```
(5) 修改文件结构，在main.js中引入插件。  
```
import Vue from 'vue'
import App from './App'
import router from './router'
import FastClick from 'fastclick'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './common/stylus/index.styl'
import '../static/css/reset.css'

FastClick.attach(document.body)
Vue.prototype.$http = axios
Vue.use(ElementUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
```
#### 4.4.2 头部制作
![avatar](/image/项目四/header.png)   
(1) 创建头部组件。    
(2) 在App.vue中引入并添加。  
script：  

```
import Header from '@/components/header/Header'
export default {
  components: {
    'v-header': Header
  }
}
</script>
```
template：  
```
<header>
  <v-header></v-header>
</header>
```
(3) 制作静态头部组件  
```
<template>
  <header>
    <div class="content-wrapper">
      <div class="avatar"><img width="64" height="64" src="xxxxx" alt="xxxx"></div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">xxxxx</span>
        </div>
        <div class="description">
          xxxxxxx
        </div>
        <div class="support">
          <span class="icon" :class="classMap[seller.supports[0].type]"></span>
          <div class="text">xxxxxxx</div>
        </div>
      </div>
      <div  class="support-count" @click="showDetail">
        <span class="count">5个</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
    </div>
    <div class="bulletin-wrapper">
      <span class="bulletin-title"></span>
      <span class="bulletin-text">xxxx</span>
      <i class="icon-keyboard_arrow_right"></i>
    </div>
    <div class="background">
      <img src="xxxxx" />
    </div>
    <div class="detail" v-show="detailShow" transition="fade">
      <div class="detail-wrapper clearfix">
        <div class="detail-main">
          <h1 class="name">xxxxx</h1>
          <div class="title">
            <div class="line"></div>
            <div class="text">优惠信息</div>
            <div class="line"></div>
          </div>
          <ul class="supports">
            <li class="support-item" >
              <span class="icon" :class="classMap[seller.supports[index].type]"></span>
              <span class="text">xxxxxxx</span>
            </li>
          </ul>
          <div class="title">
            <div class="line"></div>
            <div class="text">商家公告</div>
            <div class="line"></div>
          </div>
          <div class="bulletin">
            <p class="content">xxxxxxxxx</p>
          </div>
        </div>
      </div>
      <div class="detail-close icon-close" @click="closeDetail"></div>
    </div>
  </header>
</template>
```
script：  
```
<script type="text/ecmascript-6">
export default {
  data () {
    return {
      detailShow: false
    }
  },
  created () {
    this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
  },
  methods: {
    showDetail () {
      this.detailShow = true
    },
    closeDetail () {
      this.detailShow = false
    }
  }
}
</script>
```
(4) 添加页面样式  
```
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixin.styl"
  header
    color: #ffffff
    background: rgba(7,17,27,.5)
    position: relative
    overflow: hidden
    .content-wrapper
      padding: .48rem .24rem .36rem .48rem
      font-size: 0
      position: relative
      overflow: hidden
      .avatar
        display: inline-block
      .content
        display: inline-block
        font-size: .28rem
        margin-left:.32rem
        .title
          margin:.04rem 0 .16rem 0
          .brand
            display: inline-block
            vertical-align: top
            width: .6rem
            height: .36rem
            bg-image('brand')
            background-size: .6rem .36rem
            background-repeat: no-repeat;
          .name
            margin-left: .12rem
            font-size: .32rem
            line-height: .36rem
            font-weight: bold
        .description
          margin-bottom: .2rem
          line-height: .24rem
          font-size: .24rem
        .support
          font-size: 0;
          .icon
            display: inline-block
            vertical-align: bottom
            width: .2rem
            height: .24rem
            margin-right: .08rem
            background-size: .24rem
            background-repeat: no-repeat
            &.decrease
              bg-image('decrease_1')
            &.discount
              bg-image('discount_1')
            &.special
              bg-image('special_1')
            &.invoice
              bg-image('invoice_1')
            &.guarantee
              bg-image('guarantee_1')
          .text
            font-size: .2rem
            line-height: .24rem
            display: inline-block
      .support-count
        position: absolute
        right: .24rem
        bottom: .28rem
        padding: 0 8px
        height: .48rem
        line-height: .48rem
        border-radius: .28rem
        background-color: rgba(0,0,0,.2)
        text-align: center
        .count
          font-size: .2rem
        .icon-keyboard_arrow_right
          font-size: .2rem
    .bulletin-wrapper
      position: relative
      line-height: .56rem
      padding: 0 .44rem 0 .24rem
      white-space: nowrap
      overflow: hidden
      text-overflow: ellipsis
      font-size: 0
      background: rgba(7,17,27,.2)
      .bulletin-title
        display: inline-block
        width: .44rem
        height: .24rem
        bg-image('bulletin')
        background-size: .44rem .24rem
        vertical-align: top
        margin-top: .14rem
      .bulletin-text
        margin: 0 .08rem
        vertical-align: top
        font-size: .2rem
      .icon-keyboard_arrow_right
        font-size: .2rem
        position: absolute
        right: .24rem
        top: .16rem
    .background
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 100%
      z-index: -1
      filter:blur(.2rem)
      img
        width: 100%
        height:100%
    .detail
      position: fixed
      top: 0
      left: 0
      z-index: 100
      width: 100%
      height: 100%
      overflow: auto;
      background:rgba(7,17,27,.8)
      transition: all 1s
      backdrop-filter: blur(.2rem)//背景模糊 ios上才能实现
      &.fade-transition
        opacity: 1
        background: rgba(7,17,27,.8)
      &.fade-enter,&.fade-leave
        opacity: 0
        background: rgba(7,17,27,0)
      .detail-wrapper
        width: 100%
        min-height: 100%
        .detail-main
          margin-top: 1.28rem
          padding-bottom: 1.28rem
          .name
            line-height: .32rem
            text-align: center
            font-size: .32rem
            font-weight: 700
          .title
            display: flex
            width: 80%
            margin: .36rem auto .48rem auto
            .line
              flex: 1
              position: relative
              top: -.12rem
              border-bottom: 1px solid rgba(255,255,255,.2)
            .text
              padding: 0 .24rem
              font-size: .28rem
              font-weight: 700
          .supports
            padding-left: .7rem;
            .support-item
              padding: 0 .24rem
              margin-bottom:.24rem
              font-size: 0
              &:last-child
                margin-bottom: 0
              .icon
                display: inline-block
                width: .32rem
                height: .32rem
                vertical-align: top
                margin-right: .12rem
                background-size: .32rem .32rem
                background-repeat: no-repeat
                &.decrease
                  bg-image('decrease_2')
                &.discount
                  bg-image('discount_2')
                &.special
                  bg-image('special_2')
                &.invoice
                  bg-image('invoice_2')
                &.guarantee
                  bg-image('guarantee_2')
              .text
                line-height: .24rem
                font-size: .32rem
          .bulletin
            width: 80%
            margin: 0 auto
            .content
              padding: 0 .24rem
              line-height: .48rem
              font-size: .24rem
      .detail-close
        position: relative
        width: .64rem
        height: .64rem
        margin: -1.28rem auto 0 auto
        clear:both
        font-size: .64rem
        cursor: pointer
</style>

```
(5) 在App.vue中通过axios获取数据  
script：    
```
data () {
    return {
      seller: {},
      ratings:{}
    }
  },
  created () {
    this.$http.get('/static/data/data.json').then((res) => {
      let data = res.data
	this.seller = data.seller
	this.ratings = data.ratings
    })
  },
```
修改template动态传值：  
```
<v-header :seller="seller"></v-header>
```
(6) 在头部组件中接受数据并动态渲染页面  
```
<template>
  <header>
    <div class="content-wrapper">
      <div class="avatar"><img width="64" height="64" :src="seller.avatar" alt=""></div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{ seller.name }}</span>
        </div>
        <div class="description">
          {{ seller.description }}
        </div>
        <div v-if="seller.supports" class="support">
          <span class="icon" :class="classMap[seller.supports[0].type]"></span>
          <div class="text">{{ seller.supports[0].description }}</div>
        </div>
      </div>
      <div v-if="seller.supports" class="support-count" @click="showDetail">
        <span class="count">{{ seller.supports.length }}个</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
    </div>
    <div class="bulletin-wrapper">
      <span class="bulletin-title"></span>
      <span class="bulletin-text">{{ seller.bulletin }}</span>
      <i class="icon-keyboard_arrow_right"></i>
    </div>
    <div class="background">
      <img :src="seller.avatar" />
    </div>
    <div class="detail" v-show="detailShow" transition="fade">
      <div class="detail-wrapper clearfix">
        <div class="detail-main">
          <h1 class="name">{{ seller.name }}</h1>
          <div class="title">
            <div class="line"></div>
            <div class="text">优惠信息</div>
            <div class="line"></div>
          </div>
          <ul class="supports">
            <li class="support-item" v-for="(item,index) in seller.supports" :key="index">
              <span class="icon" :class="classMap[seller.supports[index].type]"></span>
              <span class="text">{{ seller.supports[index].description }}</span>
            </li>
          </ul>
          <div class="title">
            <div class="line"></div>
            <div class="text">商家公告</div>
            <div class="line"></div>
          </div>
          <div class="bulletin">
            <p class="content">{{ seller.bulletin }}</p>
          </div>
        </div>
      </div>
      <div class="detail-close icon-close" @click="closeDetail"></div>
    </div>
  </header>
</template>
<script type="text/ecmascript-6">
export default {
  props: {
    seller: {
      type: Object
    }
  },
  data () {
    return {
      detailShow: false
    }
  },
  created () {
    this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
  },
  methods: {
    showDetail () {
      this.detailShow = true
    },
    closeDetail () {
      this.detailShow = false
    }
  }
}
</script>
```
#### 4.4.3 导航栏制作
![avatar](G:\昆明暑期培训\讲义\讲义/image/项目四/nav.png)     
(1) 创建组件并配置路由  
router/index.js：  

```
import Vue from 'vue'
import Router from 'vue-router'
import goods from '@/components/goods/goods'
import ratings from '@/components/ratings/ratings'
import seller from '@/components/seller/seller'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: '/goods'
    },
    {
      path: '/goods',
      name: 'goods',
      component: goods
    },
    {
      path: '/seller',
      name: 'seller',
      component: seller
    },
    {
      path: '/ratings',
      name: 'ratings',
      component: ratings
    }
  ]
})

```
(2) 在App.vue中添加导航栏布局    
```
 <ul class="tabs border-1px">
      <li class="tabs-item">
        <router-link to="/goods">商品</router-link>
      </li>
      <li class="tabs-item">
        <router-link to="/ratings">评价</router-link>
      </li>
      <li class="tabs-item">
        <router-link to="/seller">商家</router-link>
      </li>
    </ul>
```
(3) 添加导航栏样式  
```
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "common/stylus/mixin.styl"
  .tabs
    width: 100%
    display: flex
    font-size: .28rem
    //border-bottom: 1px solid rgba(7,17,27,.1)
    border-1px(rgba(7,17,27,.1))
    .tabs-item
      flex:1
      line-height: .8rem
      text-align: center
      a
        color:rgb(77,85,93)
        &.active
          color:rgb(240,20,20)
</style>
```
#### 4.4.3 商品列表制作
![avatar](G:\昆明暑期培训\讲义\讲义/image/项目四/products.png)   
(1) 在App.vue中添加router-view组件  

```
<router-view :seller="seller" :ratings="ratings"></router-view>
```
(2) 利用获取到的数据，实现页面布局  
template：  
```
<template>
  <div class="goods">
    <div class="menu-wrapper" ref="menuWrapper">
      <ul>
        <li class="menu-item" :class="{'current':currentIndex === index}" @click="selectMenu(index,$event)" v-for="(item,index) of goods" :key="index">
          <span class="text border-1px">
            <span v-show="item.type>0" :class="classMap[item.type]" class="icon"></span>
            {{ item.name }}
          </span>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper" ref="foodsWrapper">
      <ul>
        <li v-for="(item,index) of goods" class="foods-list foods-list-hook" :key="index">
          <h1 class="title">{{ item.name }}</h1>
          <ul>
            <li class="foods-item border-1px" v-for="foods of item.foods" :key="foods.id">
              <div class="icon"  @click="selectFoodsEv(foods,$event)">
                <img width="57" height="57" :src="foods.icon">
              </div>
              <div class="content">
                <h2 class="name">{{ foods.name }}</h2>
                <p class="desc">{{ foods.description }}</p>
                <div class="extra">
                  <span class="count">月售{{ foods.sellCount }}份</span>
                  <span>好评率{{ foods.rating }}%</span>
                </div>
                <div class="price">
                  <span class="now">￥{{ foods.price }}</span>
                  <span class="old" v-show="foods.oldPrice">{{ foods.oldPrice }}</span>
                </div>
                <div class="cartcontrol-wrapper">
                 
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>
```
script：   
利用better-scroll实现两个列表滚动效果  
```
<script type="text/ecmascript-6">
import BScroll from 'better-scroll'

const ERR_OK = 0
export default {
  props: {
    seller: {
      type: Object
    }
  },
  data () {
    return {
      goods: [],
      listHeight: [],
      scrollY: 0,
      selectedFoods: {}
    }
  },
  computed: {
    currentIndex () {
      for (let i = 0; i < this.listHeight.length; i++) {
        let height1 = this.listHeight[i]
        let height2 = this.listHeight[i + 1]
        if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
          return i
        }
      }
      return 0
    },
    selectFoods () {
      let foods = []
      this.goods.forEach((item) => {
        item.foods.forEach(v => {
          if (v.count) {
            foods.push(v)
          }
        })
      })
      return foods
    }
  },
  created () {
    this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
    this.$http.get('/static/data/data.json').then((res) => {
      console.log(res)
        this.goods = res.data.goods
        // console.log(this.goods)
      
      /*
      * 在created()钩子函数执行的时候DOM 其实并未进行任何渲染，而此时进行DOM操作无异于徒劳，
      * 所以此处一定要将DOM操作的js代码放进Vue.nextTick()的回调函数中。与之对应的就是mounted()钩子函数，
      * 因为该钩子函数执行时所有的DOM挂载和渲染都已完成，此时在该钩子函数中进行任何DOM操作都不会有问题 。
      * */
      this.$nextTick(() => {
        this._initScroll()
        this._calculateheight()
      })
    })
  },
  methods: {
    _initScroll () {
      this.menuScroll = new BScroll(this.$refs.menuWrapper, {
        click: true
      })
      this.foodsScroll = new BScroll(this.$refs.foodsWrapper, {
        probeType: 3,

        // 当 probeType 为 1 的时候，会非实时（屏幕滑动超过一定时间后）派发scroll 事件；
        // 当 probeType 为 2 的时候，会在屏幕滑动的过程中实时的派发 scroll 事件；
        // 当 probeType 为 3 的时候，不仅在屏幕滑动的过程中，而且在 momentum 滚动动画运行过程中实时派发 scroll 事件。
        click: true
      })

      this.foodsScroll.on('scroll', pos => {
        this.scrollY = Math.abs(Math.round(pos.y))
        // console.log(this.scrollY)
      })
    },
    _calculateheight () {
      let foodsList = this.$refs.foodsWrapper.getElementsByClassName('foods-list-hook')
      let height = 0
      this.listHeight.push(height)
      for (let i = 0; i < foodsList.length; i++) {
        let item = foodsList[i]
        height += item.clientHeight
        this.listHeight.push(height)
      }
    },
    selectMenu (idx, e) {
      /* 注意：1）better-scroll会将点击事件去掉，如果滚动部分需要有点击事件，需要在参数里加上click：true。同时，在PC上或某些手机端，由于未成功将touchend事件move掉，点击事件会执行两次。
      2）better-scroll派发的event事件和原生js的event有属性上的区别，其中有一个属性为event._constructed。better-scroll派发的事件中event._constructed为true，原生点击事件中没有这个属性。 */
      if (!e._constructed) { // 如果不存在这个属性,则为原生点击事件，不执行下面的函数
        return
      }

      // console.log(idx)
      let foodsList = this.$refs.foodsWrapper.getElementsByClassName('foods-list-hook')
      let el = foodsList[idx]
      this.foodsScroll.scrollToElement(el, 300)
    },
    selectFoodsEv (foods, e) {
      if (!e._constructed) {
        return
      }
      this.selectedFoods = foods
      this.$refs.showFoodsDetails.show()
    }
  },
}
</script>
```
stylus：  
```
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixin.styl"
  .goods
    position: absolute
    top: 174px
    bottom: 46px
    width: 100%
    display: flex
    overflow: hidden
    .menu-wrapper
      flex: 0 0 80px
      width: 80px
      background: #f3f5f7
      .menu-item
        display: table
        height: 54px
        width: 56px
        line-height: 14px
        padding: 0 12px
        &:nth-child(1)
          text-align: center
        &.current
          position: relative
          z-index: 10
          margin-top: -1px
          background: #fff
          font-weight: 700
          .text
            border-none()
            color:red
        .text
          display: table-cell
          width: 56px
          vertical-align: middle
          font-size: 12px
          border-1px(rgba(7,17,27,.1))
          .icon
            display: inline-block
            vertical-align: bottom
            width:12px
            height:12px
            margin-right:2px
            -webkit-background-size: 12px
            background-size: 12px
            background-repeat: no-repeat
            &.decrease
              bg-image('img/decrease_3')
            &.discount
              bg-image('img/discount_3')
            &.special
              bg-image('img/special_3')
            &.invoice
              bg-image('img/invoice_3')
            &.guarantee
              bg-image('img/guarantee_3')
    .foods-wrapper
      flex:1
      .title
        padding-left: 14px
        height: 26px
        line-height: 26px
        border-left: 2px solid #d9dde1
        font-size: 12px
        color:rgb(147,153,159)
        background: #f3f5f7
      .foods-item
        display: flex
        margin: 18px
        border-1px(rgba(7,17,27,.1))
        padding-bottom: 18px
        cursor:pointer
        &:last-child
          border-none()
          margin-bottom: 0
        .icon
          flex:0 0 57px
          margin-right: 10px
        .content
          flex: 1
          .name
            margin: 2px 0 8px 0
            height: 14px
            line-height: 14px
            font-size: 14px
            color:rgb(7,17,27)
          .desc,.extra
            line-height: 14px
            font-size: 10px
            color:rgb(17,153,159)
          .desc
            margin-bottom: 8px
          .extra
            &.count
              margin-right: 12px
          .price
            font-weight: 700
            line-height: 24px
            .now
              margin-right: 8px
              font-size: 14px
              color:rgb(240,20,20)
            .old
              text-decoration: line-through
              font-size: 10px
              color:rgb(147,153,159)
          .cartcontrol-wrapper
            position: absolute
            right: 0
            bottom: 12px
</style>

```
#### 4.4.3 按钮组件制作
![avatar](G:\昆明暑期培训\讲义\讲义/image/项目四/btn.png)  
(1) 创建购物车组件  
(2) 在商品列表组件中引入并在底部添加组件  

```
import cartcontrol from '../cartcontrol/cartcontrol'
 components: {
    cartcontrol
  }
```
template:  
```
<div class="cartcontrol-wrapper">
  <cartcontrol :foods="foods"></cartcontrol>
</div>
```
(3) 完成组件布局及样式  
```
<template>
  <div class="cartcontrol">
    <transition name="move">
      <div class="cart-decrease" @click="decrease" v-show="foods.count>0">
          <span class="inner icon-remove_circle_outline"></span>
      </div>
    </transition>
    <div class="cart-count" v-show="foods.count>0">{{ foods.count }}</div>
    <div class="cart-add icon-add_circle" @click="add($event)"></div>
  </div>
</template>
<script type="text/ecmascript-6">
import Vue from 'vue'
export default {
  props: {
    foods: {
      type: Object
    }
  },
  methods: {
    add (e) {
      /* if(!e._constructed){
        return;
      } */
      // console.log('click');
      if (!this.foods.count) {
        // this.foods.count = 1;
        Vue.set(this.foods, 'count', 1)
      } else {
        this.foods.count++
      }
      // this.$dispatch('cart.add',e.target)
      this.$emit('cart.add', e.target)
    },
    decrease () {
      if (this.foods.count) {
        this.foods.count--
      }
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .cartcontrol
    font-size: 0
    .cart-decrease
      display: inline-block
      padding: 6px
      transition:all .4s linear
      &.move-enter-active, &.move-leave-active
        opacity:1
        transform:translate3d(0,0,0)
        .inner
          transform:rotate(0)
      .inner
        display: inline-block
        line-height: 24px
        font-size: 24px
        color:rgb(0,160,220)
        transition:all .4s linear
      &.move-enter,&.move-leave-to
        opacity: 0
        transform:translate3d(24px,0,0)
        .inner
          transform:rotate(180deg)
    .cart-count
      display: inline-block
      font-size: 10px
      vertical-align: top
      width: 12px
      padding-top: 6px
      line-height: 24px
      text-align: center
      color:rgb(147,153,159)
    .cart-add
      display: inline-block
      padding: 6px
      line-height: 24px
      font-size: 24px
      color:rgb(0,160,220)
</style>

```
#### 4.4.4 购物车组件制作
![avatar](G:\昆明暑期培训\讲义\讲义/image/项目四/cart.png)    
(1) 创建购物车组件  
(2) 在商品列表组件中引入并在底部添加组件  

```
import shopcart from '../shopcart/shopcart'
 components: {
    shopcart,
  }
```
(3) 完成组件布局及样式  
```
<template>
  <div>
    <div class="shopcart">
      <div class="content" @click="toggleList">
        <div class="content-left">
          <div class="logo-wrapper">
            <div class="logo" :class="{'high-light':totalCount>0}">
              <span class="icon-shopping_cart" :class="{'high-light':totalCount>0}"></span>
            </div>
            <div class="num" v-show="totalCount>0">{{ totalCount }}</div>
          </div>
          <div class="price" :class="{'high-light':totalPrice>0}">￥{{ totalPrice }}</div>
          <div class="desc">另需配送费{{ deliveryPrice }}元</div>
        </div>
        <div class="content-right">
          <div class="pay" :class="{'high-light':payDesc === '去结算'}">
            {{ payDesc }}
          </div>
        </div>
      </div>
      <transition name="fold">
        <div class="shopcart-list" v-show="listShow">
          <div class="list-header">
            <h2 class="title">购物车</h2>
            <span class="empty" @click="empty">清空</span>
          </div>
          <div class="list-content" ref="listcontent">
            <ul>
              <li class="foods" v-for="foods in selectFoods" :key="foods.id">
                <span class="name">{{ foods.name }}</span>
                <div class="price">
                  <span>￥{{ foods.price * foods.count }}</span>
                </div>
                <div class="cartcontrol-wrapper">
                  <cartcontrol :foods="foods"></cartcontrol>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </transition>
    </div>
    <transition name="mask">
      <div class="list-mask" v-show="listShow" @click="hide"></div>
    </transition>
  </div>
</template>
<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
import cartcontrol from '../cartcontrol/cartcontrol'
export default {
  props: {
    selectFoods: {
      type: Array,
      default () {
        return [

          /* {
            price:19.9,
            count:2
          } */
        ]
      }
    },
    deliveryPrice: {
      type: Number,
      default: 0
    },
    minPrice: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      fold: true,
      scroll: ''
    }
  },
  computed: {
    totalPrice () {
      let total = 0
      this.selectFoods.forEach((foods) => {
        total += foods.price * foods.count
      })
      return total
    },
    totalCount () {
      let count = 0
      this.selectFoods.forEach((foods) => {
        count += foods.count
      })
      return count
    },
    payDesc () {
      if (this.totalPrice === 0) {
        return `￥${this.minPrice}元起送`
      } else if (this.totalPrice < this.minPrice) {
        let diff = (this.minPrice - this.totalPrice).toFixed(2)
        return `还差￥${diff}元起送`
      }
      return '去结算'
    },
    listShow () {
      if (!this.totalCount) {
        // this.fold = true
        return false
      } else {
        let show = !this.fold
        if (show) {
          this.$nextTick(() => {
            if (!this.scroll) {
              var scroll = new BScroll(this.$refs.listcontent, {
                click: true
              })
              console.group(scroll.x)
            }
          })
        }
        return show
      }
    }
  },
  methods: {
    toggleList () {
      if (!this.totalCount) {
        return
      }
      this.fold = !this.fold
    },
    empty () {
      this.selectFoods.forEach((foods) => {
        foods.count = 0
      })
    },
    hide () {
      this.fold = true
    }
  },
  components: {
    cartcontrol
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixin.styl"
  .shopcart
    position: fixed
    left: 0
    bottom: 0
    z-index: 50
    width: 100%
    height: 48px
    .content
      display: flex
      background: #141d27
      font-size: 0
      color:rgba(255,255,255,.4)
      .content-left
        flex: 1
        .logo-wrapper
          display: inline-block
          position: relative
          top: -10px
          margin: 0 12px
          padding: 6px
          width: 56px
          height: 56px
          box-sizing:border-box
          vertical-align: top
          -webkit-border-radius: 50%
          -moz-border-radius: 50%
          border-radius: 50%
          background: #141d27
          .logo
            width: 100%
            height: 100%
            -webkit-border-radius: 50%
            -moz-border-radius: 50%
            border-radius: 50%
            background: #2b343c
            &.high-light
              background: rgb(0,160,220)
            .icon-shopping_cart
              line-height: 44px
              font-size: 24px
              color: #80858a
              margin-left: 10px
              &.high-light
                color:#fff
          .num
            position: absolute
            top: 0
            right: 0
            width: 24px
            line-height: 16px
            text-align: center
            -webkit-border-radius: 16px
            -moz-border-radius: 16px
            border-radius: 16px
            font-size: 9px
            font-weight: 700
            color:#fff;
            background: rgb(240,20,20)
            box-shadow:  0 4px 8px 0 rgba(0,0,0,.4)
        .price
          display: inline-block
          vertical-align: top
          margin-top: 12px
          line-height: 24px
          padding-right: 12px
          box-sizing:border-box
          border-right: 1px solid rgba(255,255,255,.1)
          font-size: 16px
          font-weight: 700
          &.high-light
            color:#fff
        .desc
          display: inline-block
          vertical-align: top
          line-height: 24px
          margin: 12px 0 0 12px
          font-size: 10px
      .content-right
        flex:0 0 105px
        width: 105px
        .pay
          height: 48px
          line-height: 48px
          text-align: center
          font-size: 12px
          font-weight: 700
          background: #2b333b
          &.high-light
            background-color: #00b43c
            color:#fff
    .shopcart-list
      position: absolute
      left: 0
      bottom: 48px
      z-index: -1
      width: 100%
      &.fold-enter-active, &.fold-leave-active
        transition:all .5s
        transform:translate3d(0,-100%,0)
      &.fold-enter,&.fold-leave-to
        transform:translate3d(0,0,0)
        transition:all .5s
      .list-header
        height: 40px
        line-height: 40px
        padding: 0 18px
        background: #f3f5f7
        border-bottom: 1px solid rgba(7,17,27,.1)
        .title
          float: left
          font-size: 14px
          color:rgb(7,17,27)
        .empty
          float: right
          font-size: 12px
          color:rgb(0,160,220)
      .list-content
        padding: 0 18px
        max-height: 217px
        overflow: hidden
        background: #fff
        .foods
          padding: 12px 0
          box-sizing:border-box
          height: 50px
          border-1px(rgba(7,17,27,.1))
          .name
            line-height: 24px
            font-size: 14px
            color:rgb(7,17,27)
            position: relative
            top: -21px
          .price
            position: absolute
            right: 90px
            bottom: 12px
            line-height: 24px
            font-size: 14px
            color:rgb(240,20,20)
          .cartcontrol-wrapper
            position: absolute
            bottom: 6px
            right: 0
  .list-mask
    position: fixed
    top: 0
    left: 0
    width: 100%
    height: 100%
    z-index: 40
    backdrop-filter: blur(10px)
    background: rgba(7,17,27,.6)
    transition:all .5s
  .mask-enter-active, .mask-leave-active
    opacity: 0;
    background: rgba(7,17,27,.6)
  .mask-enter,.mask-leave-to
    opacity: 1;
    background: rgba(7,17,27,0)
</style>

```
template:  
```
<shopcart :select-foods="selectFoods" :delivery-price="seller.deliveryPrice" :min-price="seller.minPrice"></shopcart>
```
#### 4.4.4 购物车列表组件制作
![avatar](G:\昆明暑期培训\讲义\讲义/image/项目四/cart_List.png)   
(1) 创建购物车组件  
(2) 在商品列表组件中引入并在底部添加组件  

```
import foods from '../foods/foods'
 components: {
    foods
  }
```
template:  
```
<foods :foods="selectedFoods" ref="showFoodsDetails"></foods>
```
(3) 完成组件布局及样式  
```vue
<template>
  <transition name="move">
    <div v-show="showFlag" class="foods" ref="foods">
      <div class="foods-content">
        <div class="image-header">
          <img :src="foods.image">
          <div class="back" @click="hide">
            <i class="icon-arrow_lift"></i>
          </div>
        </div>
        <div class="content">
          <h1 class="title">{{foods.name}}</h1>
          <div class="detail">
            <span class="sell-count">月售{{foods.sellCount}}份</span>
            <span class="rating">好评率{{foods.rating}}%</span>
          </div>
          <div class="price">
            <span class="now">￥{{foods.price}}</span><span class="old" v-show="foods.oldPrice">￥{{foods.oldPrice}}</span>
          </div>
          <div class="cartcontrol-wrapper">
            <cartcontrol @add="addFood" :foods="foods"></cartcontrol>
          </div>
          <transition name="fade">
            <div @click.stop.prevent="addFirst" class="buy" v-show="!foods.count || foods.count===0">
              加入购物车
            </div>
          </transition>
        </div>
        <split v-show="foods.info"></split>
        <div class="info" v-show="foods.info">
          <h1 class="title">商品信息</h1>
          <p class="text">{{foods.info}}</p>
        </div>
        <split></split>
        <div class="rating">
          <h1 class="title">商品评价</h1>
          <ratingselect @select="selectRating" @toggle="toggleContent" :selectType="selectType"
                        :onlyContent="onlyContent" :desc="desc"
                        :ratings="foods.ratings"></ratingselect>
          <div class="rating-wrapper">
            <ul v-show="foods.ratings && foods.ratings.length">
              <li v-show="needShow(rating.rateType,rating.text)" v-for="rating in foods.ratings"
                  class="rating-item border-1px">
                <div class="user">
                  <span class="name">{{rating.username}}</span>
                  <img class="avatar" width="12" height="12" :src="rating.avatar">
                </div>
                <div class="time">{{rating.rateTime | formatDate}}</div>
                <p class="text">
                  <span :class="{'icon-thumb_up':rating.rateType===0,'icon-thumb_down':rating.rateType===1}"></span>{{rating.text}}
                </p>
              </li>
            </ul>
            <div class="no-rating" v-show="!foods.ratings || !foods.ratings.length">暂无评价</div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll';
  import Vue from 'vue';
  import {formatDate} from '@/common/js/date';
  import cartcontrol from '../cartcontrol/cartcontrol';
  import ratingselect from '../ratingselect/ratingselect';
  import split from '../split/split';

  const ALL = 2;

  export default {
    props: {
      foods: {
        type: Object
      }
    },
    data() {
      return {
        showFlag: false,
        selectType: ALL,
        onlyContent: true,
        desc: {
          all: '全部',
          positive: '推荐',
          negative: '吐槽'
        }
      };
    },
    methods: {
      show() {
        this.showFlag = true;
        this.selectType = ALL;
        this.onlyContent = true;
        this.$nextTick(() => {
          if (!this.scroll) {
            this.scroll = new BScroll(this.$refs.foods, {
              click: true
            });
          } else {
            this.scroll.refresh();
          }
        });
      },
      hide() {
        this.showFlag = false;
      },
      addFirst(event) {
        if (!event._constructed) {
          return;
        }
        this.$emit('add', event.target);
        Vue.set(this.foods, 'count', 1);
      },
      needShow(type, text) {
        if (this.onlyContent && !text) {
          return false;
        }
        if (this.selectType === ALL) {
          return true;
        } else {
          return type === this.selectType;
        }
      },
      addFood(target) {
        this.$emit('add', target);
      },
      selectRating(type) {
        this.selectType = type;
        this.$nextTick(() => {
          this.scroll.refresh();
        });
      },
      toggleContent() {
        this.onlyContent = !this.onlyContent;
        this.$nextTick(() => {
          this.scroll.refresh();
        });
      }
    },
    filters: {
      formatDate(time) {
        let date = new Date(time);
        return formatDate(date, 'yyyy-MM-dd hh:mm');
      }
    },
    components: {
      cartcontrol,
      ratingselect,
      split
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  .foods
    position: fixed
    left: 0
    top: 0
    bottom: 48px
    z-index: 30
    width: 100%
    background: #fff
    transform: translate3d(0, 0, 0)
    &.move-enter-active, &.move-leave-active
      transition: all 0.2s linear
    &.move-enter, &.move-leave-active
      transform: translate3d(100%, 0, 0)
    .image-header
      position: relative
      width: 100%
      height: 0
      padding-top: 100%
      img
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 100%
      .back
        position: absolute
        top: 10px
        left: 0
        .icon-arrow_lift
          display: block
          padding: 10px
          font-size: 20px
          color: #fff

    .content
      position: relative
      padding: 18px
      .title
        line-height: 14px
        margin-bottom: 8px
        font-size: 14px
        font-weight: 700
        color: rgb(7, 17, 27)
      .detail
        margin-bottom: 18px
        line-height: 10px
        height: 10px
        font-size: 0
        .sell-count, .rating
          font-size: 10px
          color: rgb(147, 153, 159)
        .sell-count
          margin-right: 12px
      .price
        font-weight: 700
        line-height: 24px
        .now
          margin-right: 8px
          font-size: 14px
          color: rgb(240, 20, 20)
        .old
          text-decoration: line-through
          font-size: 10px
          color: rgb(147, 153, 159)
      .cartcontrol-wrapper
        position: absolute
        right: 12px
        bottom: 12px
      .buy
        position: absolute
        right: 18px
        bottom: 18px
        z-index: 10
        height: 24px
        line-height: 24px
        padding: 0 12px
        box-sizing: border-box
        border-radius: 12px
        font-size: 10px
        color: #fff
        background: rgb(0, 160, 220)
        opacity: 1
        &.fade-enter-active, &.fade-leave-active
          transition: all 0.2s
        &.fade-enter, &.fade-leave-active
          opacity: 0
          z-index: -1
    .info
      padding: 18px
      .title
        line-height: 14px
        margin-bottom: 6px
        font-size: 14px
        color: rgb(7, 17, 27)
      .text
        line-height: 24px
        padding: 0 8px
        font-size: 12px
        color: rgb(77, 85, 93)
    .rating
      padding-top: 18px
      .title
        line-height: 14px
        margin-left: 18px
        font-size: 14px
        color: rgb(7, 17, 27)
      .rating-wrapper
        padding: 0 18px
        .rating-item
          position: relative
          padding: 16px 0
          border-1px(rgba(7, 17, 27, 0.1))
          .user
            position: absolute
            right: 0
            top: 16px
            line-height: 12px
            font-size: 0
            .name
              display: inline-block
              margin-right: 6px
              vertical-align: top
              font-size: 10px
              color: rgb(147, 153, 159)
            .avatar
              border-radius: 50%
          .time
            margin-bottom: 6px
            line-height: 12px
            font-size: 10px
            color: rgb(147, 153, 159)
          .text
            line-height: 16px
            font-size: 12px
            color: rgb(7, 17, 27)
            .icon-thumb_up, .icon-thumb_down
              margin-right: 4px
              line-height: 16px
              font-size: 12px
            .icon-thumb_up
              color: rgb(0, 160, 220)
            .icon-thumb_down
              color: rgb(147, 153, 159)

        .no-rating
          padding: 16px 0
          font-size: 12px
          color: rgb(147, 153, 159)
</style>
```