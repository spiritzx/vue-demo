<!--
 * @Descripttion: svg demo
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2019-12-27 09:06:33
 * @LastEditors  : tom-z(spirit108@foxmail.com)
 * @LastEditTime : 2019-12-27 09:23:00
 -->
<template>
  <div>
    <svg width="200px" height="200px" viewBox="0 0 200 200">
      <line
        :x1="x1"
        y1="30"
        x2="80"
        y2="80"
        style="stroke: red; stroke-width=1;"
      />
    </svg>
  </div>
</template>

<script>
export default {
  name: "Svg",
  data() {
    return {
      x1: 90
    };
  }
};
</script>
