<template>
    <!-- 头部最上边导航栏 -->
    <div class="header-top-nav">
        <div class="w">
            <!-- 头部左侧注册登录 -->
            <div class="left">
                <ul>
                    <li>品优购欢迎您!</li>
                    <li v-if = "!userName">
                        <router-link  class="entry" to="/login">请登陆</router-link>
                        <router-link  class="register" to="/register">免费注册</router-link>
                    </li>
                    <li v-else>
                        <a href="javascript:;" class="entry">{{userName}}</a>
                        <button  @click="logout">退出登录</button>
                    </li>
                </ul>
            </div>
            <!-- 头部右边导航栏 -->
            <div class="right-nav">
                <ul>
                    <li><a href="#">我的订单</a></li>
                    <li class="spacer"></li>
                    <li><a href="#">我的品优购</a><span class="iconfont">&#xe665;</span></li>
                    <li class="spacer"></li>
                    <li><a href="#">品优购会员</a></li>
                    <li class="spacer"></li>
                    <li><a href="#">企业采购</a></li>
                    <li class="spacer"></li>
                    <li><a href="#">关注品优购</a><span class="iconfont">&#xe665;</span></li>
                    <li class="spacer"></li>
                    <li><a href="#">客户服务</a><span class="iconfont">&#xe665;</span></li>
                    <li class="spacer"></li>
                    <li><a href="#">网站导航</a><span class="iconfont">&#xe665;</span></li>
                </ul>
            </div>
        </div>
    </div>
    
</template>

<script>
    export default {
        name: "HeaderNav",
        data() {
            return {
                
            }
        },
        methods: {
            logout() {
                this.$store.state.user.token = "";
                this.$store.state.user.userInfo = {};
                this.$store.state.user.userList = [];
                this.$store.state.cart.shopCartInfo.skuCount = 0;
                sessionStorage.removeItem(['userToken']);
                sessionStorage.removeItem('cartSkuCount');
            },
        },
    computed: {
        userName(){
            return this.$store.state.user.userInfo.userName;
        }
    },
}
    
</script>

<style scoped>

button {
    border: none;
    background:none;
}
    /* 网页头部导航栏 */
.header-top-nav {
    height: 30px;
    line-height: 30px;
    background-color: #f1f1f1;
    margin-bottom: 25px;
    font-size: 12px;
    font-family: 宋体;
    color: #666666;
}

/* 头部 */
/* 头部左侧登录注册 */
.header-top-nav .left {
    float: left;
}

.header-top-nav .left .entry {
    margin: 0 15px;
    color: #666666;
}

.header-top-nav .left .register {
    color: #c81623;
}

/* 头部右侧导航栏 */
.header-top-nav .right-nav {
    float: right;
    margin-right: 12px;
}

.header-top-nav li {
    float: left;
}

.header-top-nav .right-nav li:nth-child(odd) {
    padding: 0 10px;
}

.header-top-nav .spacer {
    width: 1px;
    height: 12px;
    background-color: #666666;
    margin: 8px 5px 0;
}

.header-top-nav .iconfont {
    margin-left: 5px;
    color: rgba(102, 102, 102, .5);
    vertical-align: top;
}

.header-top-nav .right-nav li a {
    color: #666666;
}

</style>