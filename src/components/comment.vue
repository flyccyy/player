<template>
  <div class="comment-wrapper">
    <div class="items">
      <div class="item" v-for="item in commentList" :key="item.commentId">
        <div class="left">
          <img  :src="item.user.avatarUrl" alt />
        </div>
        <div class="right">
          <div class="top">
            <span class="user">{{item.user.nickname}}</span>
            <span
              class="content"
            >{{item.content}}</span>
          </div>
          <div class="bottom">
            <div class="time">{{item.time|formatDate}}</div>
            <div class="like-wrapper">
              <span>👍</span>({{item.likedCount}})
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      commentList: []
    };
  },
  created() {
    this.$axios
      .get(
        `https://autumnfish.cn/comment/hot?id=${this.$route.params.comment_id}&type=0`
      )
      .then(res => {
        // console.log(res);
        this.commentList = res.data.hotComments;
      });
  },
  filters: {
    formatDate(d) {
      let date = new Date(d);
      return `${date.getFullYear()}年${date.getMonth() +
        1}月${date.getDate()}日`;
    }
  }
};
</script>

<style>
</style>