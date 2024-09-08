<template>
  <div class="nav-container">
    <span class="spacing-container">
      <ul>
        <router-view>
          <li>
            <router-link to="/">首页</router-link>
          </li>
          <li>
            <router-link to="/team">团队介绍</router-link>
          </li>
          <li><router-link to="/science">科学研究</router-link></li>
          <li>
            <router-link to="/teachers">师资队伍</router-link>
          </li>
          <li>
            <router-link to="/cultivation">人才培养</router-link>
          </li>
          <li>
            <router-link to="/culture">文化建设</router-link>
          </li>
        </router-view>
      </ul>
    </span>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
.nav-container {
  height: 60px;
  width: 100%;

  .spacing-container {
    height: 60px;
    ul {
      height: 60px;
      margin-right: 50px;
      display: flex;
      justify-content: flex-end;
      li {
        margin-top: 0px;
        margin-right: 30px;
        font-size: 20px;

        a {
          color: #ffffff;
        }
      }
    }
  }
}
</style>
