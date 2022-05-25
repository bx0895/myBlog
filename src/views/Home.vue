<template>
  <div class="blog-page">
    <el-container class="blog-container">
      <el-header class="blog-header"
                 header="10vh">
        <BaseHead />
      </el-header>

      <el-container class="blog-middle">
        <el-row type="flex"
                justify="flex-wrap"
                align="center"
                class="blog-middle--wrap">

          <el-col :span=2>
            <BaseCircleMenu :circleMenuList="circleMenuList" />
          </el-col>          
          <el-col :sapn="20"
          :lg="{span:16}">
            <el-main class="blog-main">
              <keep-alive include="Articlelist">
                <Scroll ref="scrollView" @handle-scroll="loadMore">
                <router-view :loading="loading"></router-view>
                 </Scroll>
              </keep-alive>
            </el-main>
          </el-col>
          <el-col :span="6"
                  class="hidden-xs-only" >
            <BaseAside  v-if="$store.state.token"/>
          </el-col>
        </el-row>

      </el-container>
    </el-container>
    <BaseModal />
  </div>

</template>

<script>
// @ is an alias to /src
import BaseModal from "@/components/base/BaseModal.vue";
import BaseHead from "@/components/base/BaseHead.vue";
import BaseAside from "@/components/base/BaseAside.vue";
import BaseCircleMenu from "@/components/base/BaseCircleMenu"
import circleMenu from "@/config/circleMenu.config"
import _ from "lodash";
const TH = 200;
export default {
  name: "Home",
  components: {
    BaseModal,
    BaseHead,
    BaseAside,
    BaseCircleMenu
  },

  provide() {
    return {
      'closeLoadClock':this.closeLoadClock
    }
  },

  data() {
    return {
     scrollTop: false,
     loading:false,
     circleMenuList:[]
    };
  },

  created() {
    this.circleMenuList = circleMenu['index']?.() || []
  },

  watch: {
    $route(to) {
      this.circleMenuList = circleMenu[to.name]?.() || []
    }
  },
  activated() {
    if(this.scrollTop) {
      this.$refs['scrollView'].scrollTo({
      y:this.scrollTop
    },0)    
  }},

  computed: {},

  methods: {
      loadMore: _.throttle(
      function (vertical, horizontal, nativeEvent) {
        this.scrollTop = vertical.scrollTop;
        if (this.loading) {
          return;
        }
        let sh =
          nativeEvent.srcElement.scrollHeight -
          nativeEvent.srcElement.clientHeight;
        let st = vertical.scrollTop;
        if (st + TH > sh) {
          console.log("加载更多");
          this.loading = true;
        }
      },
      500,
      false
    ),
    closeLoadClock() {
      this.loading = false
    }
  },
};
</script>

<style lang="stylus">
.blog-container 
  overflow: hidden;
  height: 100%;

.blog-header 
  display: flex;
  align-items: center;
  background-color: #222;

.blog-middle
  padding 20px 40px
  height: 88vh
  background-color #f1f1f1

.blog-middle--wrap 
  width 100%

.blog-aside
  min-width 200px
  background-color #fafafa

.blog-header--login
  cursor pointer

.el-main.blog-main
  padding 0
  height: 100%

</style>
