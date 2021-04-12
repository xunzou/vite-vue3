<template>
  <div class="error-404">
    <h1>404</h1>
    <p>页面不存在</p>
    <p><router-link :to="{ name: 'home',}">返回首页</router-link></p>
  </div>
</template>


<style scoped>
  .error-404 {
    width: 100%;
    height: 100%;
    background: #fff url(../assets/images/error-bg.jpg) no-repeat center center ;
    color: #333;
    margin: 0 auto;
    padding: 100px 0;
  }
  .error-404 h1 {
    color: #ffb22b;
    font-weight: 900;
    font-size: 180px;
    margin: 0 0 50px;
  }
  .error-404 p {
    font-size: 14px;
  }
</style>