<template>
  <div id="app">
    <!-- <Login></Login> -->
    <router-view></router-view>
    <!-- <Productor></Productor> -->
  </div>
</template>

<script>
import Login from './components/Login'
import Productor from './components/Productor.vue'
export default {
  name: 'App',
  components: {
    Login,
    Productor
  },
}
</script>

<style>
  body,html{
    margin: 0;
    padding: 0;
    height: 100%;
  }
  button{
    cursor: pointer;
    background:none;
    border:none
  }
  ul{
    list-style: none;
    padding: 0;
    margin: 0;
  }
  @font-face {
  font-family: 'iconfont';
  src: url('../public/font_3528545_yd67vl9itl/iconfont.woff2?t=1659624023005') format('woff2'),
       url('../public/font_3528545_yd67vl9itl/iconfont.woff?t=1659624023005') format('woff'),
       url('../public/font_3528545_yd67vl9itl/iconfont.ttf?t=1659624023005') format('truetype');
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
