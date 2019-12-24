<template>
  <div>
    <div class="mask" v-if="isShow">孙子B mask</div>
    <br />
    <h1>孙子B</h1>
    <p>{{ subMsg }}</p>
    <button @click="showMask">show mask</button>
  </div>
</template>

<script>
import eventBus from "@/eventBus.js";
import maskMixin from "@/mixins/maskMixin.js";

export default {
  name: "childerBComp",
  mixins: [maskMixin],
  data() {
    return {
      subMsg: "childB"
    };
  },
  created() {
    eventBus.$on("changeBFn", val => {
      this.subMsg = val;
    });
  }
};
</script>

<style scoped>
.mask {
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 5;
  background: rgba(0, 0, 0, 0.404);
}
</style>
