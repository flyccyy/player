<template>
  <div class="player">
    <div class="left">
      <img class="disc" src="../assets/img/disc.png" alt />
      <img class="cover" :src="songDetail.al.picUrl" alt />
    </div>
    <div class="right">
      <div class="title">
        <img src="../assets/img/tag.png" alt />
        <span>{{songDetail.name}}</span>
      </div>
      <div class="singer">
        歌手:
        <span>{{songDetail.ar[0].name}}</span>
      </div>
      <div class="album">
        所属专辑:
        <span>{{songDetail.alia[0]}}</span>
      </div>
      <audio class="audio" controls :src="musicUrl"></audio>
      <ul class="lyric-container">
        <li class="lyric" v-for="(item,index) in lyricCom" :key="index">{{item}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      songDetail: {},
      musicUrl: "",
      lyricData: ""
    };
  },
  computed: {
    lyricCom() {
      var arr1 = [];
      for (var i = 0; i < this.lyricData.length; i++) {
        if (this.lyricData[i] == "[") {
          arr1.push(i);
        }
      }
      var arr2 = [];
      for (var j = 0; j < this.lyricData.length; j++) {
        if (this.lyricData[j] == "]") {
          arr2.push(j);
        }
      }
      var temp = 0; //存的应该是字符串的个数
      var geci = "";
      var newA = [];
      for (var k = 0; k < arr1.length - 1; k++) {
        temp = arr1[k + 1] - arr2[k] - 1;
        geci = this.lyricData.substr(arr2[k] + 1, temp);
        newA.push(geci);
        // console.log(str.substr(arr2[k]+1,temp))  //索引， 个数
      }
      return newA;
    }
  },
  created() {
    this.$axios
      .get(`https://autumnfish.cn/song/detail?ids=${this.$route.params.id}`)
      .then(res => {
        // console.log(res);
        this.songDetail = res.data.songs[0];
      });
    this.$axios
      .get(`https://autumnfish.cn/song/url?id=${this.$route.params.id}`)
      .then(res => {
        // console.log(res);
        this.musicUrl = res.data.data[0].url;
      });
    this.$axios
      .get(`https://autumnfish.cn/lyric?id=${this.$route.params.id}`)
      .then(res => {
        console.log(res);
        this.lyricData = res.data.lrc.lyric;
      });
  }
};
</script>

<style>
</style>