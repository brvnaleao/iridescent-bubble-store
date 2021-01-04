<template>
   <div class="input">
          <label>{{label}}:</label>
          <input :name="name"  required :type="type"  v-model="infos[name]">
    </div>
</template>

<script>
export default {
  name: 'InputComponent',
  props: {
    label: String,
    type: String,
    name: String,
    infos: Object
  }
}
</script>

<style scoped>
.input{

  margin: 20px auto;
  }
label{
  display: inline-block;
  width: 80px;
  text-align: right;
  }
  
  .subtitle{
    font-size: 1.2em;
    
    }
  input{
    width: 50%;
    background-color:rgba(253,224,217, 0.8);
    border: #dddddd 1px solid;
    padding: 4px;
    border-radius: 4px;
  font-family: 'Anonymous Pro', monospace;

  
  }
  input:hover {
    background-color: #B7E6E8;
  }
</style>
