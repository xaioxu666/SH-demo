<template>
  <header>
    <el-carousel indicator-position="outside" height="200px" @change="banner">
      <el-carousel-item v-for="item in 4" :key="item">
        <img
          src="/static/img/banner.webp"
          alt=""
          width="1200px"
          height="200px"
        />
      </el-carousel-item>
    </el-carousel>
  </header>
</template>

<script>
export default {
  methods: {
    async banner() {
      // 解构赋值
      var { data: res } = await this.$http.get('http://localhost:3000/goods')
      console.log(res)
    }
  }
}
</script>

<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
