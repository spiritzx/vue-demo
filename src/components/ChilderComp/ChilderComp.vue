<template>
  <div>
    <p>子组件</p>
    {{ msg }}
    <button @click="changeMsgFn">sonChange</button>
    <childer-a-comp></childer-a-comp>
  </div>
</template>

<script>
import ChilderAComp from "../ChilderAComp/ChilderAComp";
export default {
  name: "ChilderComp",
  components: {
    ChilderAComp
  },
  inject: ["msg", "changeMsgFn", "watchObj"],
  // provide() {
  //   return {
  //     msg: "dd",
  //     changeMsgFn() {
  //       console.log(4);
  //     }
  //   };
  // },
  created() {
    console.log(this.msg);
  }
};
</script>
