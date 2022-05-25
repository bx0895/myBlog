<template>
  <div class="blog-article-msg">
      <span class="blog-tags--author blog-tags">作者：{{info.author}}</span>
      <span class="blog-tags--time blog-tags"><i class="glyphicon glyphicon-time"></i> {{info.date}}</span>
      <span class="blog-tags--column blog-tags">分类:{{info.column}}</span>      
      <span class="blog-tags--hit"><i class="el-icon-view"></i> {{info.hit_num}} </span>
      <span class="blog-tags--like"><i class="el-icon-star-off"></i> {{info.like_num}} </span>
      <span class="blog-tags--comment"><i class="el-icon-chat-square"></i> {{info.comment_num}} </span>
  </div>
</template>

<script>
export default {
  name: 'ArticleInfo',
  props: {
    info: {
      type: Object
    }
  },

  data() {
    return {
      
    };
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>

<style lang="stylus">

@import '../../assets/css/variable.styl'
@import '../../assets/css/base.styl'

.blog-tags
  padding-left: padding-space

.blog-article-msg
  display: grid
  grid-template-columns: repeat(3,33.3%)
  grid-template-rows: 30px 30px
  margin: 20px 0
  padding 0 padding-space
  background-color: bg-theme-color
  border-radius: radius-theme-size
  justify-items: center
  align-items: center
  @media screen and (max-width:768px)
    grid-template-columns: repeat(1,100%)
    grid-template-rows: repeat(4,30px)
    justify-items: start

.blog-tags--like,
.blog-tags--comment,
.blog-tags--hit
  color: font-modifier-color

.blog-tags--like:hover,
.blog-tags--comment:hover,
.blog-tags--hit:hover
  color: font-theme-color

.blog-content--time
  color: font-theme-color

.blog-content-never
  display: flex
  text-align: center
  flex-direction: column
  justify-content: center
  align-items: center
  height: 400px
  &.blog-item--btn
    width: 60px
  .blog-item--title
    margin-bottom: padding-space * 2
/* article end*/


</style>