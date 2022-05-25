<template>
  <el-card>
    <ArticleContent :article="article"/>
    <ArticleComment :aid="article._id"/>
    <CommentList :comments="article.comments"/>
  </el-card>
</template>

<script>
import ArticleContent from '@/components/article/ArticleContent'
import ArticleComment from '@/components/article/ArticleComment'
import CommentList from '@/components/article/CommentList'
export default {
  name: "Article",

  provide() {
    return {
      getArticleById:this.getArticleById
    }
  },

  components: {
    ArticleContent,
    ArticleComment,
    CommentList
  },

  data() {
    return {
      id:'',
      article:{}
    };
  },

  created() {
    this.id = this.$route.params.id
    this.getArticleById()
  },
  mounted() {},

  methods: {
    getArticleById() {
      this.$api({type:'getArticleById', data:{id:this.id}}).then(result => {
        this.article = result._doc
      }).catch(err => {
         this.$notify.success({
          title: "错误",
          message: err,
        });
      })
    }
  },
};
</script>

<style lang="scss" scoped>
</style>