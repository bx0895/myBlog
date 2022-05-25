<template>
  <div>
    <article class="blog-content--item">
    <h2 class="blog-content--title">{{article.title}}</h2>
    <p class="blog-content--author">{{nickname}}</p>
    <p class="blog-content--time">
      <i class="glyphicon glyphicon-time"></i>
      <i>{{article.date}}</i>
    </p>
    <img class="blog-content--pic" :src="article.cover" alt="!">
    <p class="blog-content--text">{{content}}</p>
    <p class="blog-content--tags">
      <span class="blog-tags--hit">浏览 ({{article.hit_num}})</span><span class="blog-tags--like">点赞 ({{article.like_num}})</span><span class="blog-tags--comment">评论 ({{article.comment_num}})</span>
      </p>
</article>
  </div>
</template>

<script>
export default {
  name: 'CardArticleItem',

  props:{
    article:{
      type:Object
    }
  },

  data() {
    return {
      
    };
  },

  computed: {
    content() {
      let content = this.article.content.match(/>([^<>]+)</)?.[1] 
      return content || ''
    },
    nickname() {
      return this.article.author?.nickname || '默认昵称'
    }
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>

<style lang="stylus">
@import '../../assets/css/variable.styl';

.blog-content--item
  background-color line-modifier-color
  text-align: center
  border-radius: radius-theme-size

.blog-content--title
  color: #555
  font-size 24px

.blog-content--author
  padding padding-space 0

.blog-content--pic
  width: auto
  height: 160px
  padding: padding-space 0

.blog-content--text
  padding: padding-space * 2
  text-align: left
  text-indent: 2em

.blog-content--text:hover 
  color: font-theme-color

.blog-content--tags
  text-align: right 
  padding-right: padding-space

.blog-tags--like,
.blog-tags--comment,
.blog-tags--hit
  padding: 0 padding-space
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
  height: 300px
  &.blog-item--btn
    width: 60px
  .blog-item--title
    margin-bottom: padding-space
</style>