import VueRouter from 'vue-router'
import Home from "../pages/home/index"
import Login from "../pages/login/index"
import Register from '../pages/register/index'
import Cart from '../pages/cart/index'
import ShopDetail from '../pages/shopDetail/index'

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
        }

    ]
})