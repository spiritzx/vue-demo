<template>
  <div>
    <br />
    <p>子组件</p>
    <p>{{ msg }}</p>
    <p>{{ watchObj.msg }}</p>
    <button @click="changeMsgFn">sonChange</button>
    <br />
    <br />
    <childer-a-comp></childer-a-comp>
    <br />
    <childer-b-comp></childer-b-comp>
  </div>
</template>

<script>
import ChilderAComp from "../ChilderAComp/ChilderAComp";
import ChilderBComp from "../ChilderBComp/ChilderBComp";
export default {
  name: "ChilderComp",
  components: {
    ChilderAComp,
    ChilderBComp
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
