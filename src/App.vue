<template>
  <div id="app">
    <div class="top">
      <h1>重庆市鸿章网络有限公司</h1>
    </div>
  <div class="zhong">
  <div id="nav">
      <router-link to="/">公司简介</router-link> |
      <router-link to="/about/1478932">关于我们</router-link>
    </div>
    <router-view/>

  </div>
  
    <div class="bottom">
      渝ICP备15001882号 <a href="http://www.beian.miit.gov.cn" target="_blank" rel="noopener">工信部备案管理系统</a>
    </div>
  </div>
</template>

<style>
*{margin: 0;padding: 0;}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.zhong{
  min-height: 500px;
}
h1{
  padding: 20px;

  margin: 0 ;
  background: #1daee7;
  color:#fff;
}
.bottom{
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
   padding: 20px;
  background: #1daee7;
  margin: 0 ;
  color:#fff;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
