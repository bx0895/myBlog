<template>
  <el-row class="blog-header--wrap"
          type="flex"
          justify="center"
          align="middle">
    <el-col :span="4">
      <div class="blog-logo">
        <el-image class="blog-logo-pic"
                  :src="require('@/assets/image/logo.jpg')"
                  fit="cover">
        </el-image>
      </div>
    </el-col>

    <el-col :span="14"
            class="hidden-xs-only">
      <el-menu class="blog-header--menu"
               mode="horizontal"
               background-color="#222"
               text-color="#fff"
               default-active="/index"
               active-text-color="#fff"
               router>
        <el-menu-item index="/index">首页</el-menu-item>
        <el-menu-item index="/column">分类</el-menu-item>
        <el-menu-item index="/picture">相册</el-menu-item>
        <el-menu-item index="/case">案例</el-menu-item>
      </el-menu>
    </el-col>

    <el-col :span="4"
            :offset="2"
            class="hidden-xs-only">
      <component :is="isLoginComponent"></component>
    </el-col>
  </el-row>

</template>

<script>
import UserLogin from "@/components/user/UserLogin.vue";
import LoginAvatar from "@/components/user/LoginAvatar.vue";
import { mapGetters } from 'vuex';
export default {
  name: "VueBlogBasehead",
  components: {
    UserLogin,
    LoginAvatar,
  },

  data() {
    return {
      isShow: false,
    };
  },

  mounted() {},

  created() {
    let isLogin = this.$store.state.token;
    let nickname = this.userInfo?.nickname
    if (isLogin && !nickname) {
      this.$store.dispatch("getUserInfo");
    }
  },

  methods: {},

  computed: {
    isLoginComponent() {
      let nickname = this.userInfo?.nickname
      return this.$store.state.token && nickname ? "LoginAvatar" : "UserLogin";
    },
    ...mapGetters(['userInfo'])
  },
};
</script>

<style lang="stylus">


.blog-header--wrap 
  width: 100%

.blog-logo 
  overflow: hidden;
  width: 45px;
  height: 45px;
  margin: 0 auto;
  line-height: 0;
  border-radius: 50%

.blog-logo-pic
  width: 45px
  height: 45px

.blog-header--login
  cursor pointer

.el-menu.el-menu--horizontal.blog-head--menu
  color: #fff
  background-color #222


</style>