let MIXIN = {
  data() {
    return {
      isShow: false
    };
  },
  created() {
    console.log("mixin...", this.isShow);
  },
  mounted() {},
  methods: {
    showMask() {
      this.isShow = true;
    }
  }
};

export default MIXIN;
