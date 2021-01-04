<template>
    <div class="menu">
      <p class="subtitle">Cadastro </p>
      <form v-on:submit.prevent="onSubmit">

        <InputComponent name="name" label="Nome" type="text" v-bind:infos="infos" />
        <InputComponent name="email" label="E-mail" type="email" v-bind:infos="infos"/>
        <InputComponent name="phone" label="Telefone" type="text" v-bind:infos="infos" />
        <InputComponent name="cpf" label="CPF" type="text" v-bind:infos="infos"/>
        <InputComponent name="address" label="Endereço" type="text" v-bind:infos="infos"/>
        
        <div class="btn">
          <!--v-on:click="saveUser"-->
          <button  v-on:click.prevent.stop="saveUser()" type="submit">Enviar ✨
          </button>
        </div>
      </form>

    </div>
</template>

<script>
import InputComponent from './InputComponent.vue'
import Employees from '../service/employees'


export default {
  name: 'MenuCadastro',
  components:{
    InputComponent
},
  props: {
    // label: String
  }, 
  mounted(){
    Employees.getOne(this.$route.params.id)
      .then(employee => {

        this.changeName(employee.data)
        
      })
      .catch(err => console.log(err));
  
  },
  methods: {
  changeName(employee){
        console.log(this.$route.params.id)
        console.log(employee[0])
        this.infos = employee[0]
    },
  saveUser(){
    var id= this.$route.params.id
    if(id)
      Employees.edit(this.infos, id)
    else
      Employees.save(this.infos)
  }
  },
  data(){
   return{  infos: {
        name: '',
        phone: '',
        address: '',
        cpf: '',
        email: ''
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.menu>p{
  margin-bottom: 40px;
  }
button:hover {

background-color: #D7C8F6;
  }
button{
    background-color: #B7E6E8;
    border: #dddddd 1px solid;
    padding: 5px ;
    border-radius: 4px;
  }
  .menu{
  text-align: center;
  margin-top: 20px;
  padding: 10px;
  background-color: #fff;
  width:40%;
min-width: 250px;
max-width: 800px;
    margin: 0 auto;
border-radius: 5px;
    border: #dddddd 1px solid;

-webkit-box-shadow: 6px 6px 6px 9px rgba(253,224,217,1);
-moz-box-shadow: 6px 6px 6px 9px rgba(253,224,217,1);
box-shadow: 6px 6px 6px 9px rgba(253,224,217,1); }
  .subtitle{
    font-size: 1.2em;
    
    }
</style>
