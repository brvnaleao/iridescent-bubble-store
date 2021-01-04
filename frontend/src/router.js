import Vue from 'vue'
import Router from 'vue-router'
import MenuCadastro from './components/MenuCadastro'
import UserDetail from './components/UserDetail'
import MenuLista from './components/MenuLista'


Vue.use(Router)

export default new Router({
    routes: [{
        path: "/",
        component: MenuLista
    },
    {
        path: "/editar/:id",
        component: MenuCadastro
    },
    {
        path: "/cadastrar",
        component: MenuCadastro
    },
    {
        path: "/detalhe/:id",
        component: UserDetail
    }]
})