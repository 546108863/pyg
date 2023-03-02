import VueRouter from 'vue-router'
import Home from "../pages/Home/Home"
import Login from "../pages/Login/Login"
import Register from '../pages/Register/Register'
import Cart from '../pages/Cart/Cart'
import ShopDetail from '../pages/ShopDetail/ShopDetail'
import  CartAccess from '../pages/CartAccess/CartAccess'

import store from '@/store'

const router =  new VueRouter({
    routes: [
        {
            path: "",
            component: Home
        },
        {
            path: "/login",
            component: Login
        },
        {
            path: "/register",
            component: Register
        },
        {
            path: "/cart",
            component: Cart
        },
        {
            path: "/shopdetail",
            component: ShopDetail
        },
        {
            path: "/cartaccess",
            component:CartAccess
        }

    ]
})

router.beforeEach((to,from,next)=>{
    let token = sessionStorage.getItem('userToken');
    if (token) {
        if (to.path === '/login' || to.path === '/register') {
            next("/");
        }else {
            if (!store.state.user.token) {
                store.dispatch('user/getUserInfo');
            }
            next();
        }
    }else {
        next();
        if (to.path === '/cart') {
            next('/login')
        } 
    }
})

export default router;