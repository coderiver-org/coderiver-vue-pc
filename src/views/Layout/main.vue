<template>
  <div class="wapper">
    <img alt="Vue logo" src="@/assets/logo.png">
    <div id="nav">
      <router-link to="/">首页</router-link> |
      <router-link to="/project-center">项目中心</router-link> |
      <router-link to="/talent-market">人才市场</router-link>
    </div>
    <router-view/>
  </div>
</template>
