<template>
  <li class="blog-comment--item blog-line blog-line--row">
    <div class="blog-comment--avatar">
      <img :src="uid.avatar"
           alt="!">
    </div>
    <div class="blog-comment--container">
      <p class="blog-comment--nickname">{{uid.nickname}}</p>
      <p class="blog-comment--content">{{content}}</p>
      <p class="blog-comment--date">{{date}}</p>
    </div>
  </li>
</template>

<script>
export default {
  name: "CommentItem",

  props: {
    uid:{
      type:Object
    },
    date:{
      type:String
    },
    content:{
      type:String
    }
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="stylus">
@import '../../assets/css/variable.styl'
@import '../../assets/css/base.styl'

.blog-comment--item 
  display flex
  justify-content: flex-start
  padding: padding-space * 2 padding-space

.blog-comment--avatar
  overflow hidden
  width: 50px
  height: 50px
  border-radius: 50%
  margin-right: padding-space * 2
  & img 
    width: 50px
    height: auto

.blog-comment--container
  display: flex
  flex-direction: column
  width:80%

.blog-comment--nickname
  font-weight 700
  color user-nickname-color

.blog-comment--content
  padding: padding-space 0
  line-height: 20px

.blog-comment--date
  font-size 14px
  text-align: right
</style>