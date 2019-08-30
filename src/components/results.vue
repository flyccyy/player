<template>
  <div class="result-wrapper">
    <div class="song" v-for="item in songList" :key="item.id">
      <div class="name">
        <span class="iconfont icon-play" @click="toPlay(item.id)"></span>
        <a href="" @click.prevent="toComment(item.id)">{{item.name}}</a>
        <span class="iconfont icon-editmedia" @click="mvPlay(item.mvid)" v-show="item.mvid"></span>
      </div>
      <div class="singer">{{item.artists|formatSinger}}</div>
      <div class="album">《{{item.album.name}}》</div>
      <div class="time">{{item.duration|formatDate}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      songList: []
    };
  },
  watch: {
    //   属性名要监听的data里面的属性，比如是message，直接写属性名，不用加this，所以这里也不加
    "$route.params.keywords"() {
      this.getSongs();
    }
  },
  created() {
    this.getSongs();
  },
  methods: {
    getSongs() {
      this.$axios
        .get(
          `https://autumnfish.cn/search?keywords=${this.$route.params.keywords}`
        )
        .then(res => {
          this.songList = res.data.result.songs;
        });
    },
    toPlay(id){
        this.$router.push(`/player/${id}`)
    },
    mvPlay(id){
        this.$router.push(`/video/${id}`)
    },
    toComment(id){
        this.$router.push(`/comment/${id}`)
    }
  },
  
  filters: {
    formatSinger(singer) {
      //数组的值是对象，所以遍历，拿到具体的歌手名
      var arr = [];
      for (var i = 0; i < singer.length; i++) {
        arr.push(singer[i].name);
      }
      return arr.join("|");
    },
    formatDate(d) {
      let sec = parseInt(d / 1000);
      let min = parseInt(sec / 60);
      let secLast = d % 60;
      min = min < 10 ? "0" + min : min + "";
      secLast = secLast < 10 ? "0" + secLast : secLast + "";
      return `${min}:${secLast}`;
    }
  }
};
</script>

<style>
</style>