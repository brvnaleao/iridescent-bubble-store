<template>
    <div class="menu">
      <p class="subtitle">Bruna Leão </p>
      <div class=user-info>
          <div class="user-image"> 
              <img width="70px" src="../assets/imagem_perfil.png">
          </div>
          <div class="user-data">
              <p>{{infos.name}}</p>
              <p>{{infos.address}}</p>
              <p>{{infos.phone}}</p>
              <p>{{infos.cpf}}</p>
          </div>
      </div>
      
      <form>

        
         <div class="input">
          <label>Foto:</label>
          <input type="file">
    </div>
        
        <div class="btn">
          <button type="submit">Enviar ✨
          </button>
        </div>
      </form>

    </div>
</template>

<script>
import Employees from '../service/employees'

export default {
  name: 'UserDetail',
  components:{
    // InputComponent
},
  props: {
    // label: String
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

        this.infos = employee[0]
    }
}
}
</script>

<style scoped>

.user-info{
    display:flex;
    justify-content: space-around;
    align-items: center;
    width: 70%;
    flex-wrap:wrap;
    margin: 40px auto;
    }
.user-image, .user-data{
    margin: 0px 0px;

    }
.user-data{
    font-size: 0.7em;
    text-align: left;
}
input[type=file]::-webkit-file-upload-button {
    border: 1px solid #ddd;
    background: #FFFAAA;
    border-radius: 4px;
    cursor: pointer
  }
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

.input{
  margin: 40px auto;
  }
label{
  display: inline-block;
  width: 50px;
  text-align: right;
  }
  
  .subtitle{
    font-size: 1.2em;
    
    }
  input{
    width: 50%;
    border-radius: 4px;
    background-color:rgba(253,224,217, 0.8);
    border: #dddddd 1px solid;
    padding: 4px;
  font-family: 'Anonymous Pro', monospace;
    /* margin-bottom: 40px; */
  
  }
  .btn{
      margin-bottom: 30px;
  }
  input:hover {
    background-color: #B7E6E8;
  }
</style>

