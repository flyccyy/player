<template>
  <div class="video" v-if="isInit">
    <div class="title-wrapper">
      <span class="tag">MV</span>
      <span class="title">{{mvDetail.name}}</span>
      <span class="artist">{{mvDetail.artistName}}</span>
    </div>
    <video :src="mvUrl" controls></video>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mvUrl: "",
      mvDetail: {},
      isInit:false
    };
  },
  created() {
    this.$axios
      .get(`https://autumnfish.cn/mv/detail?mvid=${this.$route.params.mvid}`)
      .then(res => {
        // console.log(res);
        this.mvUrl = res.data.data.brs["240"];
        this.mvDetail = res.data.data;
        this.isInit = true;
      });
  }
};
</script>

<style>
</style>