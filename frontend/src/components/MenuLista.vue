<template>
    <div class="menu">
        <p class="subtitle">Vendedores Cadastrados</p>
        <div class="list-box">
            <ul>
                <li v-for="item in items" v-bind:key="item.id">
                    <div class=list-item>
                        <a v-bind:href="`/#/detalhe/${item.id}`"><span>{{item.name}}</span> </a>
                        <div class="icons">
                            <span><a v-bind:href="`/#/editar/${item.id}`"> <img src="https://img.icons8.com/cotton/16/000000/edit--v1.png"/> </a></span> 
                            <span v-on:click="deleteUser(item.id)">  <img src="https://img.icons8.com/officexs/16/000000/delete-sign.png"/></span>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div id="myModal" class="modal" :class="{none: deleteItem }">
          <div class="modal-content">
              <span class="close" v-on:click="cancelAction"><img src="https://img.icons8.com/officexs/16/000000/delete-sign.png"/></span>
              <p>Deseja realmente excluir o registro?</p>
              <div class="btn">
                  <button v-on:click="removeElement(keyItem)"> Sim 
                  </button>
              </div>
          </div>
      </div>
    </div>
</template>

<script>
import Employees from '../service/employees'

export default {
  name: 'MenuLista',
  components:{
    
},
data(){
    return{ items: [], deleteItem: true, keyItem: -1}
    },
  props: {
    // label: String
  },
  mounted(){
    Employees.list().then(response =>{
      this.items = response.data
    })
  },
  methods: {
      deleteUser(key){
        console.log(key)
          this.keyItem = key
          console.log("clicou")
          this.deleteItem =  false
    },
    cancelAction(){

        this.deleteItem = true;
    },
    removeElement: function () {
      
        Employees.delete(this.keyItem).then(()=>{
           Employees.list().then(response =>{
            this.items = response.data;
        this.deleteItem = true;

          }).catch(err =>{
          console.log(err)
        this.deleteItem = true;

        })
        }).catch(err =>{
        this.deleteItem = true;
   
   console.log(err)
        })
       

    }
  }
}
</script>


<style scoped>
.icons{
    width: 40px;
}
.none {
    display:none;
}
.list-item, .icons{
    display: flex;
    justify-content: space-between;
}
.list-item>a{
    text-decoration: none;
    cursor: pointer;
    color: #2c3e50
    }
ul{
    list-style: none;
    display:block;
    margin: 0;
    width: 100%;
}
li {
    padding: 10px;
    display: block;
    width: 85%;
    min-height: 20px;
    background-color: rgb(187, 255, 233);
    margin-bottom: 14px;

    border-radius: 4px;
}
.menu>p{
  text-align: center;

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

  .list-box{
display: flex;
align-items: center;
width: 100%;
justify-content: flex-start;    
  }
  .menu{
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


    /*modal*/


    .modal {
   /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgba(0,0,0, 0.1); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

/* Modal Content/Box */
.modal-content {
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 15px;
  border-radius: 5px;
  border: 1px solid #888;
  width: 40%; /* Could be more or less, depending on screen size */
}

/* The Close Button */
.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>
