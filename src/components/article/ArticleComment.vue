<template>
  <div class="blog-comment blog-comment-editor">
    <span>发表评论</span>
    <textarea name="comment"
              class="blog-comment-input"
              v-model="commentVal"></textarea>
    <el-button type="primary" @click="postComment">提交</el-button>
  </div>

</template>

<script>
export default {
  name: "ArticleComment",
  inject:['getArticleById'],

  props: {
    aid: {
      type:String
    }
  },

  data() {
    return {
      commentVal:''
    };
  },

  mounted() {},

  methods: {
    async postComment() {
      try {
        console.log(this.aid)
        await this.$api({type:'postComment',data:{aid:this.aid,content:this.commentVal}})
          this.$notify.success({
          title: '评论成功',
        })
        this.getArticleById()
      }catch(err){
          this.$notify.error({
          title: '评论失败',
          message: err
        })
      }
    }
  },
};
</script>

<style lang="stylus">
@import '../../assets/css/variable.styl'

.blog-comment
  margin: 20px 0
  & span
    font-size font-size-h * 2

.blog-comment-editor
  display: flex
  height: 200px
  flex-direction: column
  justify-content: space-evenly

.blog-comment-submit
  width: 20%
  text-align: center
  justify-self: right
  color: #fff

.blog-comment-input
  height: 70px
  line-height: 20px
  font-size 14px

</style>