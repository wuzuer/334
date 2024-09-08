<template>
  <div class="logo-container">
    <span class="log" style="height: 120px">
      <img
        src="../../src/assets/logo.png"
        style="
          background-size: contain;
          width: 1000px;
          height: 100px;
          margin-top: 20px;
          margin-left: 30px;
        "
      />
    </span>
    <span
      class="chain"
      style="
        display: flex;
        height: 120px;
        width: 420px;
        align-items: center;
        vertical-align: center;
        justify-content: flex-end;
      "
      ><a
        href="https://www.shzu.edu.cn/"
        style="color: white; height: 40px; margin-top: 30px; font-size: 15px"
        >石河子大学主页</a
      >
    </span>
    <span class="iconfont">&#xe65d;</span>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
@font-face {
  font-family: "iconfont";
  src: url("../../src/icon/iconfont.ttf") format("truetype");
}
.iconfont {
  display: flex;
  font-family: "iconfont" !important;
  font-size: 30px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100px;
  height: 120px;
  color: white;
  justify-content: flex-start;
  align-items: center;
  margin-top: 4px;
  margin-left: 10px;
}
.logo-container {
  display: flex;
}
</style>
