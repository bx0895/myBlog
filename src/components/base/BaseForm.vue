<template>
  <div>
    <el-form ref="elForm"
             :model="form">
      <el-form-item v-for="item in formData"
                    :label="item.label"
                    :key="item['query']"
                    :prop="item['query']"
                    :rules="validates[item['query']]"
                    label-width="100px">
        <el-input v-model="form[item['query']]"
                  :type="item.type"
                  :name="item['query']"
                  autocomplete="off"></el-input>
      </el-form-item>
    </el-form>
  </div>

</template>

<script>
import VALIDATE_DATA from '../../config/validate.config.js'
import FORM_DATA from '../../config/form.config.js'

export default {
  name: "BaseForm",
  props: {
    type: {
      type: String
    }
  },
  data() {
    return {
      form: {},
    };
  },

  mounted() {},

  watch: {
    type() {
      this.initForm()
    },
  },

  computed: {
    formData () {
      return FORM_DATA[this.type]
    }, 
    validates() {
      return VALIDATE_DATA
    }
  },

  methods: {
    initForm() {
      this.form = {}
      this.resetForm()
    },
    resetForm() {
      this.$refs['elForm'].resetFields()
    }
  },
};
</script>

<style lang="scss" scoped>
</style>