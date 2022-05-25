export default {
  data () {
    return {

    }
  },
  methods: {
    refreshModal(type) {
      this.$store.dispatch('modal/open',type);
    }
  },
}