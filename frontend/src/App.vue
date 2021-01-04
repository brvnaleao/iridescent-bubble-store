<template>
  <div id="app">
    <div class="box">
    <span class="title"><a href="/"> 🧚🏽 iridescent bubble store 🧙🏻‍♀️ </a></span>
    <!-- <menu-cadastro/> -->
    <router-view/>
    </div>
    <FooterComponent msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import FooterComponent from './components/FooterComponent.vue'

export default {
  name: 'App',
  components: {
    FooterComponent
  }
}
</script>

<style>

.title{
  display: inline-block;
  font-weight: 700;  
  font-size: 2em;
  margin-top: 20px;
  margin-bottom: 30px;
}
a{
  text-decoration: none;
  color: #2c3e50;
}
#app {
  font-family: 'Anonymous Pro', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  text-align: center;
  background-image: url("./assets/bg_image.png"); 
  background-color: #cccccc; 
  min-height: 100%;
  background-position: center; 
  background-repeat: repeat; 
  display: flex;
  flex-direction: column;
  
}
.box{
  flex: 1 0 auto;
}

</style>
