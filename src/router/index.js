import VueRouter from 'vue-router'
import Home from "../pages/home/home"
import Login from "../pages/login/login"
import Register from '../pages/register/register'
import Cart from '../pages/cart/cart'
import ShopDetail from '../pages/shopDetail/shopDetail'
import  CartAccess from '../pages/cartAccess/cartAccess'

export default new VueRouter({
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