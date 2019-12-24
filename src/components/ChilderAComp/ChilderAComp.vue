<template>
  <div>
    <br />
    <h1>孙子A</h1>
    <p>{{ msg }}</p>
    <p>{{ watchObj.msg }}</p>
    <button @click="changeMsgFn">son a change</button>
    <button @click="changeMsgAFn">son a changeA</button>
    <button @click="eventBusFn">eventBusClick</button>
    <br />
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
