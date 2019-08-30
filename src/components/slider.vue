<template>
  <div class="slider-wrapper">
    <el-carousel>
      <el-carousel-item v-for="(item,index) in bannerList" :key="index">
        <img :src="item.imageUrl" alt="" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      bannerList: []
    }
  },
  created() {
    this.$axios.get(`/banner`).then(res => {
      // console.log(res);
      this.bannerList = res.data.banners;
    });
  }
};
</script>

<style>
.slider-wrapper {
  margin-top: 50px;
}
</style>