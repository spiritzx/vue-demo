<template>
  <div>
    <h1>孙子B</h1>
    <p>{{ subMsg }}</p>
  </div>
</template>

<script>
import eventBus from "@/eventBus.js";
export default {
  name: "childerBComp",
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
