import VueRouter from 'vue-router'
import Home from "../pages/home/home"
import Login from "../pages/login/login"
import Register from '../pages/register/register'
import Cart from '../pages/cart/cart'
import ShopDetail from '../pages/shopDetail/shopDetail'
import  CartAccess from '../pages/cartAccess/cartAccess'

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