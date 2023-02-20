<template>
    <!-- 头部搜索框和购物车 -->
    <div class="header w">
        <div class= "header-main">
            <!-- 头部左侧logo -->
            <div class="header-logo">
                <router-link to="/"><img src="@/assets/images/logo.png" alt="logo"></router-link>
            </div>
            <!-- 头部搜索框 -->
            <div class="header-search">
                <input type="text" placeholder="今日秒杀">
                <button>搜索</button>
                <!-- 搜索框底部导航栏 -->
                <div class="search-bottom-nav">
                    <ul>
                        <li><a href="#">优惠购首发</a></li>
                        <li><a href="#">亿元优惠</a></li>
                        <li><a href="#">9.9元团购</a></li>
                        <li><a href="#">美满99减30</a></li>
                        <li><a href="#">办公用品</a></li>
                        <li><a href="#">电脑</a></li>
                        <li><a href="#">通信</a></li>
                    </ul>
                </div>
            </div>
            <!-- 头部购物车 -->
            <div class="shopcar" @mouseenter="getCartCount">
                <div>
                    <ul>
                        <li><img src="@/assets/images/shop.png" alt="购物车"></li>
                        <li><router-link to="/cart">我的购物车</router-link></li>
                        <li><img src="@/assets/images/next.png" alt=""></li>
                    </ul>
                </div>
                <div class="count">{{count}}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"HeaderContainer",
    data() {
        return {
            // count:0
        }
    },
    computed: {
        count() {
            if (sessionStorage.getItem('userToken')) {
                return this.$store.state.cart.shopCartInfo.skuCount;
            }
            return 0;
        }
    },
    methods: {
        getCartCount(){
            // if (sessionStorage.getItem('userToken')) {
            //     this.$store.dispatch('cart/getCartCount');
            //     this.count = this.$store.state.shopCartInfo.skuNum;
            // }
            this.$store.dispatch('cart/getCartCount');
        }
    },
    mounted() {
        // if (this.$store.state.shopCartInfo.skuNum) {
        //     this.count = this.$store.state.shopCartInfo.skuNum;
        // }else {
        //     this.count = 0;
        // }
        // this.getCartCount();
    }
}
</script>

<style scoped>
  /* 头部 */
.header {
  height: 62px;
}

/* header-main */
.header-main .header-logo {
    float: left;
    height: 55px;
    width: 175px;
}

.header-main .header-search {
    float: left;
    margin-left: 173px;
}

.header-main .header-search input {
    float: left;
    width: 434px;
    height: 32px;
    border: 2px solid #b1191a;
}

.header-main .header-search button {
    float: left;
    width: 82px;
    height: 36px;
    background-color: #b1191a;
    color: #ffffff;
    border: none;
}

.header-main .search-bottom-nav li {
    float: left;
    font-size: 12px;
    margin: 8px 0 0 25px;
}

.search-bottom-nav li:first-child {
    margin-left: 10px;
}

.search-bottom-nav li a:hover {
    color: #c81623;
}

.header-main {
    height: 58px;
}

.header-main .shopcar {
    float: right;
    position: relative;
    width: 136px;
    height: 34px;
    margin-right: 60px;
    font-size: 12px;
    border: 2px solid #dfdfdf;
    background-color: #f7f7f7;
}

.header-main .shopcar li {
    float: left;
    line-height: 34px;

}

.header-main .shopcar li img {
    height: 12px;
}

.header-main .shopcar li:first-child {
    margin: 0 6px 0 18px;
}

.header-main .shopcar li:last-child {
    margin: 0 14px;
}

.header-main .shopcar .count {
    position: absolute;
    top: -5px;
    right: 23px;
    height: 14px;
    line-height: 14px;
    padding: 0 5px;
    font-size: 12px;
    color: #fefefe;
    background-color: #e60012;
    border-radius: 7px 7px 7px 0;
}
</style>