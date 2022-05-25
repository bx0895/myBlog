<template>
  <div class="blog-header--login">
    <span @click="refreshModal('login')">登录</span>/ <span @click="refreshModal('register')">注册</span>
  </div>
</template>

<script>
import MIXIN from '@/core/mixin'
export default {
  name: "UserLogin",
  mixins: [MIXIN],

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="stylus">
.blog-header--login
  color: #fff
</style>