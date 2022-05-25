<template>
  <el-card>
    <el-form  size="middle" label-width="60px">
      <el-form-item label="标题">
        <el-input v-model="title"></el-input>
      </el-form-item>
      <el-form-item label="正文">
        <div id="editor"></div>
      </el-form-item>
        <el-form-item>
    <el-button type="primary" @click="onSubmit">提交</el-button>
    <el-button>重置</el-button>
  </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
import Editor from "wangeditor";
export default {
  name: '',

  components: {},

  data () {
    return {
        title:'',
        cloumn:'',
        content:''
    };
  },

  watch: {},

 computed: {},

  methods: {
    async onSubmit(){
      this.validateEditor()
      this.postData = {
        title:this.title,
        content:this.content,
        cover:this.content.match(/src="([^"']*)"/)?.[1] || undefined,
        column:''
      }
      console.log(this.postData)
      try {
         await this.$api({type:'postArticle',data:JSON.parse(JSON.stringify(this.postData))})
      } catch(err) {
        console.log(err)
      }
      
    },
    validateEditor() {
      this.content = this.editor.txt.html()
      if (!this.title || this.title.trim().length === 0) {
          this.$notify({
          title:'失败',
          message: '标题不能为空',
          type: 'error'
        });
      }
      if (!this.content || this.content.length === 0) {
          this.$notify({
          title:'失败',
          message: '正文不能为空',
          type: 'error'
        });
      }
    },  
    clearEditor() {
      this.title = ''
      this.editor.txt.clear()
    }  
  },

   mounted() {
    this.editor = new Editor("#editor");
    this.editor.config.uploadImgServer = 'http://127.0.0.1:3000/upload/article';
    this.editor.config.uploadImgMaxSize = 5 * 1024 * 1024; // 5M
    this.editor.config.uploadImgAccept = ["jpg", "jpeg", "png", "gif", "bmp"];
    this.editor.config.uploadImgMaxLength = 6;
    this.editor.config.uploadFileName = "file";
    this.editor.config.uploadImgHeaders = {
      Authorization: `Bearer ${this.$store.state.token}`,
    };
    this.editor.create()
    this.editor.txt.html()
  },
}

</script>
<style lang='stylus'>
</style>