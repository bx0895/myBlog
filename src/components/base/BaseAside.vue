<template>
  <el-aside width="100%">
    <el-card class="box-card blog-aside">
      <div class="blog-avatar">
        <img class="blog-avater--pic"
             :src="userInfo.avatar"
             alt="!">
      </div>
      <div class="blog-info">
        <p class="blog-info--nikname">{{userInfo.nickname}}</p>
        <div class="blog-info--state">
          <div class="blog-state--item">
            <a href="javascript:;"
               data-router="articles"
               data-user-id="userInfo._id">
              <span class="blog-state--name ">文章</span>
              <span class="blog-state--count">{{userInfo.articleCount}}</span>
            </a>
          </div>
          <div class="blog-state--item">
            <a href="javascript:;"
               data-router="columns">
              <span class="blog-state--name">分类</span>
              <span class="blog-state--count">{{userInfo.columnCount}}</span>
            </a>
          </div>
        </div>
        <p class="blog-info-introduce">{{userInfo.signature}}</p>
      </div>

    </el-card>
  </el-aside>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "BaseAside",

  data() {
    return {};
  },

  computed: {
    ...mapGetters(["userInfo"]),
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="stylus">
@import '../../assets/css/variable.styl'

.blog-aside
  width 80%
  min-width 220px
  margin-left: 20px
  text-align center
.blog-aside-wrap
  background-color line-modifier-color
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
  text-align: center
  border-radius: radius-theme-size

.blog-avatar
  overflow hidden
  width: 100px
  height: 100px
  margin: 0 auto
  border-radius: 50%

.blog-info
  padding-top: padding-space * 2

.blog-info--nikname
  font-size 24px
  margin: 0

.blog-info--state
  box-sizing: border-box
  display: flex;
  justify-content: center
  padding: padding-space
  
  
.blog-state--name,
.blog-state--count
  display: block
  color: font-theme-color

.blog-state--item
  padding: 0 padding-space 
  justify-self: center
  
.blog-info-introduce
  text-indent: 2em
  text-align left


</style>