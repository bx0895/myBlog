<template>
  <div class="blog-header--login">
    <el-image class="blog-header--avatar"
              :src="src"
              fit="cover"></el-image>
  </div>
</template>

<script>
export default {
  name: "LoginAvatar",

  data() {
    return {};
  },

  mounted() {},

  computed: {
    src() {
      return this.$store.state.userInfo.avatar;
    },
  },

  methods: {},
};
</script>

<style lang="stylus">
.blog-header--avatar
  width: 45px
  height: 45px
  border-radius: 50%
</style>