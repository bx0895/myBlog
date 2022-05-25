<template>
  <div>
    <el-dialog :title="title"
               :visible.sync="isShow"
               :width="width"
               :before-close="close">
      <BaseForm :type="type"
                ref="form"
                v-if="hasForm" />
      <div slot="footer"
           class="dialog-footer">
        <el-button v-for="btn in btns"
                   :key="btn.targetName"
                   @click="handlerBtn(btn.targetName,btn.isSubmit)">{{btn.name}}</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import BaseForm from "./BaseForm.vue";
import MODAL_DATA from "../../config/modal.config.js";
import { createNamespacedHelpers } from "vuex";

const { mapState, mapActions } = createNamespacedHelpers("modal");

export default {
  name: "BaseModal",
  components: {
    BaseForm,
  },

  data() {
    return {};
  },

  watch: {},

  computed: {
    ...mapState(["isShow", "type"]),
    title() {
      return MODAL_DATA[this.type]?.title ?? "默认";
    },
    width() {
      return MODAL_DATA[this.type]?.width ?? "60%";
    },
    hasForm() {
      return MODAL_DATA[this.type]?.formType;
    },
    btns() {
      return (
        MODAL_DATA[this.type]?.btns ?? [
          {
            targetName: "close",
            name: "取消",
          },
          {
            targetName: "confirm",
            name: "登录",
            isSubmit: true,
          },
        ]
      );
    },
  },

  mounted() {},

  methods: {
    handlerBtn(action, isSubmit) {
      if (isSubmit) {
        this.submitForm(this.type);
        return;
      }
      this[action] && this[action]();
    },
    submitForm() {
      let refForm = this.$refs["form"];
      refForm.$refs["elForm"].validate(async (valid) => {
        if (valid) {
          try {
            await this.$api({ type: this.type, data: refForm.form })
            
            this.close()
          } catch (err) {
            console.log(err)
            refForm.$refs["elForm"].resetFields();
          }
        } else {
          return false
        }
      });
    },
    ...mapActions(["close", "open", "confirm"])
  },
};
</script>

<style lang="scss" scoped>
</style>