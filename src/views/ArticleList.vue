<template>
  <div class="blog-article--wrap"
       v-if="articles">
      <el-card v-for="item in articles"
               :key="item.id" class="blog-article--item">
        <router-link :to="{name:'article',params:{id:item.id}}">
          <ArticleItem :article="item" />
        </router-link>        
      </el-card>
  </div>
</template>

<script>
import ArticleItem from "@/components/article/ArticleItem";

export default {
  name: "Articlelist",

  components: {
    ArticleItem,
  },

  inject:['closeLoadClock'],

  props:{
    loading:{
      type:Boolean,
      default:false
    }
  },

  data() {
    return {
      articles: [],
      size: 4,
      page: 1,
    };
  },

  created() {
    this.getArticles();
  },

  computed: {},
  watch:{
    loading(load) {
      if(load) {
        this.getArticles()
      }
    }
  },

  mounted() {},

  methods: {
    getArticles() {
    this.$api({ type: "articles", data:{size: this.size, page: this.page }}).then((result) => {
        if (this.articles.length >= result.total) {
          console.log("没有更多了");
          return;
        }
        this.articles.push(...result.list);
        this.closeLoadClock()
        this.page++;
      }).catch((err) => {
        this.$notify.error({
          title: "错误",
          message: err,
        });
      });
  },
  },

};
</script>

<style lang="stylus">
.blog-article--wrap
  overflow hidden
  height 100%

.blog-article--item
  margin-bottom: 16px
</style>