<template>
  <div class="blog-circleMenu">
    <el-button circle
               v-for="(item,id) in circleMenuList"
               :key="id"
               :icon="item.icon" 
               @click="clickMenu(item)"
               class="blog-menu--item">
    </el-button>
  </div>
</template>

<script>
export default {
  name: "",

  components: {},

  props: {
    cardList: {
      type: Array,
      default: function () {
        return [
          {
            icon: "el-icon-edit-outline",
            router: "/editor",
          },
        ];
      },
    },
    circleMenuList: {
      type: Array,
    },
  },

  data() {
    return {};
  },

  watch: {},

  computed: {},

  methods: {
    clickMenu(item) {
      this.$router.push(item.router)
    }
  },
};
</script>
<style lang='stylus'>
.blog-circleMenu
  display: flex
  flex-direction: column
  justify-content: center

.blog-circleMenu .blog-menu--item
  width: 50px
  height: 50px
  font-size 24px

.blog-circleMenu .blog-menu--item + .blog-circleMenu .blog-menu--item
  margin 10px 0
</style>