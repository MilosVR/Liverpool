<template>
  <div id="app">
   <router-view></router-view>
  </div>
</template>

<script>

import Home from './components/Home.vue'
import Navbar from './components/Navbar/Navbar'

export default {
  components: {
    Home,
    Navbar
  }
}
</script>

<style lang="scss">


@media only screen and(max-width: 500px){
  .lfcgo_banner{
    width: 100%;
    height: 100%;
    object-fit: contain;
    margin: 0 !important;
  }
}

$bg-image: url('/assets/body_background.jpg') center center no-repeat;

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: $bg-image;
  width: 100%;
  height: 100vh;
  overflow: scroll;
  box-shadow: 0px 2px 13px -2px rgba(0,0,0,0.75);
}

  body{
    padding:0;
    margin: 0;
    
  }
  *{
    box-sizing: border-box;
  }
  ul{
    padding: 0;
    margin: 0;
  }
  li{
    list-style: none;
  }
  h1, h2, h3, h4, h5{
    padding: 0;
    margin: 0;
  }
  p{
    padding: 0;
    margin:0;
  }
  a {
    text-decoration: none;
    &.router-link-exact-active {
      color: #42b983;
    }
}
</style>
