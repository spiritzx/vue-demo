<!--
 * @Descripttion: svg demo
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2019-12-27 09:06:33
 * @LastEditors  : tom-z(spirit108@foxmail.com)
 * @LastEditTime : 2019-12-31 17:35:41
 -->
<template>
  <div class="svg-wrap">
    <svg width="100%" height="100%" viewBox="0 0 200 200">
      <line
        :x1="x1"
        y1="30"
        x2="80"
        y2="80"
        style="stroke: #080; stroke-width: 1;"
      />
      <text x="100" y="100" style="font-size: 18px;stroke: none; fill: #333">
        测试
      </text>
    </svg>
  </div>
</template>

<script>
export default {
  name: "SvgComp",
  data() {
    return {
      x1: 90
    };
  }
};
</script>
<style lang="less" scoped>
.svg-wrap {
  width: 300px;
  height: 300px;
}
</style>
