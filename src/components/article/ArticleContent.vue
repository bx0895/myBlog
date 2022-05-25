<template>
  <div>
    <h1 class="blog-content--title">{{article.title}}</h1>
    <ArticleInfo :info="info"/>
    <div class="blog-article--content"
         v-html="article.content">
    </div>
  </div>
</template>

<script>
import ArticleInfo from "@/components/article/ArticleInfo";
import moment from 'moment'
export default {
  name: "ArticleContent",

  props: {
    article: {
      type: Object,
    },
  },

  components: {
    ArticleInfo,
  },

  data() {
    return {
    };
  },

  computed: {
    info() {
      let {hit_num,like_num,comment_num} = this.article
      
      return {author: this.nickname,date:this.date,column:this.column,hit_num,like_num,comment_num}
    },
    nickname() {
      
      return this.article?.author?.nickname || '侠名'
    },
    column() {
      return this.article?.column?.content || '无分类'
    },
    date() {
      let date = this.article?.date
      date = moment(date).format('YYYY-MM-DD')
      return date
    }
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="stylus">
@import '../../assets/css/typo.css'

.blog-article--content
  padding: 20px 0
/* table 样式 */
/* table 样式 */
table {
  border-top: 1px solid #ccc;
  border-left: 1px solid #ccc;
}
table td,
table th {
  border-bottom: 1px solid #ccc;
  border-right: 1px solid #ccc;
  padding: 3px 5px;
}
table th {
  border-bottom: 2px solid #ccc;
  text-align: center;
}

/* blockquote 样式 */
blockquote {
  display: block;
  border-left: 8px solid #d0e5f2;
  padding: 5px 10px;
  margin: 10px 0;
  line-height: 1.4;
  font-size: 100%;
  background-color: #f1f1f1;
}

/* code 样式 */
code {
  display: inline-block;
  *display: inline;
  *zoom: 1;
  background-color: #f1f1f1;
  border-radius: 3px;
  padding: 3px 5px;
  margin: 0 3px;
}
pre code {
  display: block;
}

/* ul ol 样式 */
ul, ol {
  margin: 10px 0 10px 20px;
}

</style>