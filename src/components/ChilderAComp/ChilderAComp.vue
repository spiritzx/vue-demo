<template>
  <div>
    <p>孙子A</p>
    <p>{{ msg }}</p>
    <p>{{ watchObj.msg }}</p>
    <button @click="changeMsgFn">son a change</button>
    <button @click="changeMsgAFn">son a changeA</button>
    <button @click="eventBusFn">eventBusClick</button>
  </div>
</template>

<script>
import eventBus from "@/eventBus.js";

export default {
  name: "childerAComp",
  inject: ["msg", "changeMsgFn", "watchObj"],
  methods: {
    changeMsgAFn() {
      this.watchObj.msg = "5252";
    },
    eventBusFn() {
      eventBus.$emit("changeBFn", "childA");
    }
  }
};
</script>
