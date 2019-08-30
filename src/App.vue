<template>
   <div id="player">
      <h2 class="title">黑云音乐</h2>
      <div class="search">
        <input type="text" v-model="keywords" @keyup.enter="searchMusic"/>
        <button @click="searchMusic">
          <span class="iconfont icon-search" ></span>
        </button>
      </div>
      <router-view></router-view>
    </div>
</template>

<script>
export default {
  data(){
    return {
      keywords:''
    }
  },
  // 输入关键字后没反应，要刷新才会执行
  methods: {
    searchMusic(){
      this.$router.push(`/results/${this.keywords}`)
    }
  },
}
</script>

<style>

</style>