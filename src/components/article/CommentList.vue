<template>
  <div class="blog-comment blog-comment--list">
    <span>评论列表</span>
    <ul v-if="hasComment">
      <CommentItem v-for="comment in comments"
                   :key="comment.id" 
                   :uid="comment.uid"
                   :content="comment.content"
                   :date="comment.date" />
    </ul>
    <!-- <p class="blog-commnet-null"
       v-if="!hasComment">暂无评论，快去发表吧</p> -->
  </div>
</template>

<script>
import CommentItem from "@/components/article/CommentItem";
export default {
  name: "CommentList",

  props: {
    comments: {
      type: Array,
    },
  },

  components: {
    CommentItem,
  },

  data() {
    return {};
  },

  computed: {
    hasComment() {
      return this.comments;
    },
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="stylus">
@import '../../assets/css/variable.styl'
.blog-comment
  & span
    font-size font-size-h * 2

.blog-commnet-null
  padding: padding-space * 3 0
  text-align: center

.blog-comment--list
  padding-bottom: 40px

</style>