<template>
  <div class="team-container">
    <div class="head"><Logo-Vue></Logo-Vue><Nav-Vue></Nav-Vue></div>
    <div class="split"></div>
  </div>
</template>
<script>
import LogoVue from "@/components/logo.vue";
import NavVue from "@/components/nav.vue";
import { onMounted } from "vue";
export default {
  name: "TeamView",
  components: { LogoVue, NavVue },

  // setup() {
  //   let element;
  //   onMounted(() => {
  //     element = document.getElementsByTagName("ul")[0];
  //     // console.log(element);
  //     element.removeAttribute("style");
  //   });
  // },
};
</script>
<style lang="scss" scoped>
.team-container {
  height: 910px;
  width: 100%;
  background: #ffffff;
  font-size: 100px;
}
.head {
  top: 0;
  position: fixed;
  height: 160px;
  width: 100%;
  background: url("../../assets/waterpng.png") no-repeat;
  background-size: cover;
}
.split {
  height: 100px;
  width: 100%;
  background: url("../../assets/split.png") no-repeat;
  background-size: cover;
}
</style>
