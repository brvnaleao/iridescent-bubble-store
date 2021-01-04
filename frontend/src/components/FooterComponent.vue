<template>
  <div class="hello">
   <footer>
     <p>Nos siga nas redes sociais!</p>
     <a href="#"><img src="https://img.icons8.com/wired/30/000000/instagram-new.png"/></a>
      <a href="#"><img src="https://img.icons8.com/wired/30/000000/facebook-new.png"/></a>
   </footer>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style scoped>
p{
  margin: 10px;
  margin-top: 20px
  }
footer{
   flex-shrink: 0;
  height: 70px;
  
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.hello{
   flex-shrink: 0
  }
</style>
