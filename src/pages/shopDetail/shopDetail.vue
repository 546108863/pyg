<template>
    <div>
        <!-- 顶部快捷导航start -->
        <div class="shortcut">
        <div class="w">
            <div class="fl">
                <ul>
                    <li>品优购欢迎您！ </li>
                    <li>
                        <a href="#">请登录</a>
                        <a href="#" class="style-red">免费注册</a>
                    </li>
                </ul>
            </div>
            <div class="fr">
                <ul>
                    <li><a href="#">我的订单</a></li>
                    <li class="spacer"></li>
                    <li>
                        <a href="#">我的品优购</a>
                        <i class="icomoon"></i>
                    </li>
                    <li class="spacer"></li>
                    <li><a href="#">品优购会员</a></li>
                    <li class="spacer"></li>
                    <li><a href="#">企业采购</a></li>
                    <li class="spacer"></li>
                    <li><a href="#">关注品优购</a> <i class="icomoon"></i></li>
                    <li class="spacer"></li>
                    <li><a href="#">客户服务</a> <i class="icomoon"></i></li>
                    <li class="spacer"></li>
                    <li><a href="#">网站导航</a> <i class="icomoon"></i></li>
                </ul>
            </div>
        </div>
    </div>
    <!-- 顶部快捷导航end  -->
    <!-- header制作 -->
    <div class="header w">
        <!-- logo -->
        <div class="logo">
            <h1>
                <a href="index.html" title="品优购">品优购</a>
            </h1>
        </div>
        <!-- search -->
        <div class="search">
            <input type="text" class="text" value="请搜索内容...">
            <button class="btn">搜索</button>
        </div>
        <!-- hotwrods -->
        <div class="hotwrods">
            <a href="#" class="style-red">优惠购首发</a>
            <a href="#">亿元优惠</a>
            <a href="#">9.9元团购</a>
            <a href="#">美满99减30</a>
            <a href="#">办公用品</a>
            <a href="#">电脑</a>
            <a href="#">通信</a>
        </div>
        <div class="shopcar">
            <i class="car"> </i>我的购物车 <i class="arrow">  </i>
            <i class="count">80</i>
        </div>
    </div>
    <!-- header 结束 -->
    <!-- nav start -->
    <div class="nav">
        <div class="w">
            <div class="dropdown fl">
                <div class="dt"> 全部商品分类 </div>
                <div class="dd" style="display: none;">
                    <ul>
                        <li class="menu_item"><a href="#">家用电器</a> <i>  </i> </li>
                        <li class="menu_item">
                            <a href="list.html">手机</a> 、
                            <a href="#">数码</a> 、
                            <a href="#">通信</a>
                            <i>  </i>
                        </li>
                        <li class="menu_item"><a href="#">电脑、办公</a> <i>  </i> </li>
                        <li class="menu_item"><a href="#">家居、家具、家装、厨具</a> <i>  </i> </li>
                        <li class="menu_item"><a href="#">男装、女装、童装、内衣</a> <i>  </i> </li>
                        <li class="menu_item"><a href="#">个户化妆、清洁用品、宠物</a> <i>  </i> </li>
                        <li class="menu_item"><a href="#">鞋靴、箱包、珠宝、奢侈品</a> <i>  </i> </li>
                        <li class="menu_item"><a href="#">运动户外、钟表</a> <i>  </i> </li>
                        <li class="menu_item"><a href="#">汽车、汽车用品</a> <i>  </i> </li>
                        <li class="menu_item"><a href="#">母婴、玩具乐器</a> <i>  </i> </li>
                        <li class="menu_item"><a href="#">食品、酒类、生鲜、特产</a> <i>  </i> </li>
                        <li class="menu_item"><a href="#">医药保健</a> <i>  </i> </li>
                        <li class="menu_item"><a href="#">图书、音像、电子书</a> <i> </i> </li>
                        <li class="menu_item"><a href="#">彩票、旅行、充值、票务</a> <i> </i> </li>
                        <li class="menu_item"><a href="#">理财、众筹、白条、保险</a> <i>  </i> </li>
                    </ul>
                </div>
            </div>
            <!-- 右侧导航 -->
            <div class="navitems fl">
                <ul>
                    <li><a href="#">服装城</a></li>
                    <li><a href="#">美妆馆</a></li>
                    <li><a href="#">传智超市</a></li>
                    <li><a href="#">全球购</a></li>
                    <li><a href="#">闪购</a></li>
                    <li><a href="#">团购</a></li>
                    <li><a href="#">拍卖</a></li>
                    <li><a href="#">有趣</a></li>
                </ul>
            </div>
        </div>
    </div>
    <!-- nav end -->

    <!-- 详情页内容部分	 -->
    <div class="de_container w">
        <!-- 面包屑导航 -->
        <div class="crumb_wrap">
            <a href="#">手机、数码、通讯</a> 〉 <a href="#">手机   </a> 〉 <a href="#">Apple苹果   </a> 〉 <a href="#">iphone 6S Plus系类</a>
        </div>
        <!-- 产品介绍模块 -->
        <div class="product_intro clearfix">
            <!-- 预览区域 -->
            <Zoom></Zoom>
            <!-- 产品详细信息 -->
            <div class="itemInfo_wrap fr">
                <div class="sku_name">
                    Apple iPhone 6s（A1700）64G玫瑰金色 移动通信电信4G手机
                </div>
                <div class="news">
                    推荐选择下方[移动优惠购],手机套餐齐搞定,不用换号,每月还有花费返
                </div>
                <div class="summary">
                    <dl class="summary_price">
                        <dt>价格</dt>
                        <dd>
                            <i class="price">￥5299.00 </i>

                            <a href="#">降价通知</a>

                            <div class="remark">累计评价612188</div>

                        </dd>
                    </dl>
                    <dl class="summary_promotion">
                        <dt>促销</dt>
                        <dd>
                            <em>加购价</em> 满999.00另加20.00元，或满1999.00另加30.00元，或满2999.00另加40.00元，即可在购物车换 购热销商品 详情 》

                        </dd>
                    </dl>
                    <dl class="summary_support">
                        <dt>支持</dt>
                        <dd>以旧换新，闲置手机回收 4G套餐超值抢 礼品购</dd>
                    </dl>
                    <dl class="choose_color">
                        <dt>选择颜色</dt>
                        <dd>
                            <a href="javascript:;" class="current">玫瑰金</a>
                            <a href="javascript:;">金色</a>
                            <a href="javascript:;">白色</a>
                            <a href="javascript:;">土豪色</a>
                        </dd>
                    </dl>
                    <dl class="choose_version">
                        <dt>选择版本</dt>
                        <dd>
                            <a href="javascript:;" class="current">公开版</a>
                            <a href="javascript:;">移动4G</a>
                        </dd>
                    </dl>
                    <dl class="choose_type">
                        <dt>购买方式</dt>
                        <dd>
                            <a href="javascript:;" class="current">官方标配</a>
                            <a href="javascript:;">移动优惠购</a>
                            <a href="javascript:;">电信优惠购</a>
                        </dd>
                    </dl>
                    <div class="choose_btns">
                        <div class="choose_amount">
                            <input type="text" v-model="skuNum" @change="numChange">
                            <button class="add" @click="skuNum++" :class="skuNum==200?'ban':''">+</button>
                            <button class="reduce" @click="skuNum=--skuNum<1?1:skuNum--" :class="skuNum==1?'ban':''">-</button>
                        </div>
                        <router-link to="/cart" class="addcar">加入购物车</router-link>
                    </div>
                </div>
            </div>
        </div>


        <!-- 产品细节模块 product_detail	 -->
        <div class="product_detail clearfix">
            <!-- aside -->
            <div class="aside fl">
                <div class="tab_list">
                    <ul>
                        <li class="first_tab ">相关分类</li>
                        <li class="second_tab current">推荐品牌</li>
                    </ul>
                </div>
                <div class="tab_con">

                    <ul>
                        <li>
                            <img src="./images/upload/aside_img.jpg" alt="">
                            <h5>华为 HUAWEI P20 Pro 全面屏徕卡</h5>
                            <div class="aside_price">¥19</div>
                            <a href="#" class="as_addcar">加入购物车</a>
                        </li>
                        <li>
                            <img src="./images/upload/aside_img.jpg" alt="">
                            <h5>华为 HUAWEI P20 Pro 全面屏徕卡</h5>
                            <div class="aside_price">¥19</div>
                            <a href="#" class="as_addcar">加入购物车</a>
                        </li>
                        <li>
                            <img src="./images/upload/aside_img.jpg" alt="">
                            <h5>华为 HUAWEI P20 Pro 全面屏徕卡</h5>
                            <div class="aside_price">¥19</div>
                            <a href="#" class="as_addcar">加入购物车</a>
                        </li>
                        <li>
                            <img src="./images/upload/aside_img.jpg" alt="">
                            <h5>华为 HUAWEI P20 Pro 全面屏徕卡</h5>
                            <div class="aside_price">¥19</div>
                            <a href="#" class="as_addcar">加入购物车</a>
                        </li>
                        <li>
                            <img src="./images/upload/aside_img.jpg" alt="">
                            <h5>华为 HUAWEI P20 Pro 全面屏徕卡</h5>
                            <div class="aside_price">¥19</div>
                            <a href="#" class="as_addcar">加入购物车</a>
                        </li>
                        <li>
                            <img src="./images/upload/aside_img.jpg" alt="">
                            <h5>华为 HUAWEI P20 Pro 全面屏徕卡</h5>
                            <div class="aside_price">¥19</div>
                            <a href="#" class="as_addcar">加入购物车</a>
                        </li>


                    </ul>
                </div>
            </div>
            <!-- detail -->
            <div class="detail fr">
                <div class="detail_tab_list">
                    <ul>
                        <li class="current">商品介绍</li>
                        <li>规格与包装</li>
                        <li>售后保障</li>
                        <li>商品评价（50000）</li>
                        <li>手机社区</li>
                    </ul>
                </div>
                <div class="detail_tab_con">
                    <div class="item">
                        <ul class="item_info">
                            <li>分辨率：1920*1080(FHD)</li>
                            <li>后置摄像头：1200万像素</li>
                            <li>前置摄像头：500万像素</li>
                            <li>核 数：其他</li>
                            <li>频 率：以官网信息为准</li>
                            <li>品牌： Apple ♥关注</li>
                            <li>商品名称：APPLEiPhone 6s Plus</li>
                            <li>商品编号：1861098</li>
                            <li>商品毛重：0.51kg</li>
                            <li>商品产地：中国大陆</li>
                            <li>热点：指纹识别，Apple Pay，金属机身，拍照神器</li>
                            <li>系统：苹果（IOS）</li>
                            <li>像素：1000-1600万</li>
                            <li>机身内存：64GB</li>
                        </ul>
                        <p>
                            <a href="#" class="more">查看更多参数</a>
                        </p>
                        <img src="./images/upload/detail_img1.jpg" alt="">
                        <img src="./images/upload/detail_img2.jpg" alt="">
                        <img src="./images/upload/detail_img3.jpg" alt="">
                    </div>
                    <!-- 
					<div class="item">规格与包装</div>
					<div class="item">售后保障</div> 
					-->
                </div>
            </div> 
        </div>

    </div>
    <!-- 详情页内容部分	 -->
    <!-- footer start --> 
    <Bottom/>
    <!-- footer end -->
  </div>
</template>

<script>
import Bottom from '../../components/bottom.vue'
import Zoom from './zoom/zoom.vue'

export default {
    name:"ShopDetail",
    components: {
        Bottom,
        Zoom
    },
    data() {
        return {
            skuNum:1,
        }
    },
    methods: {
        numChange(e) {
            // let value = e.target.value;
            // if (isNaN(value * 1) || value < 1) {
            //    this.skuNum = 1;
            // } else {
            //     this.skuNum = parseInt(value);  
            // }
        }
    },
    watch:{
        skuNum:{
            handler(newValue,oldValue) {
                if(isNaN(newValue * 1)){
                    this.skuNum = parseInt(oldValue);
                }else{

                    this.skuNum = parseInt(newValue)>200?200:parseInt(newValue);
                }
                if (isNaN(this.skuNum)) {
                    this.skuNum = 1;
                }
                console.log(newValue,oldValue);
            }
        }
    }

}

</script>

<style scoped>
/*让所有斜体 不倾斜*/
em,
i {
    font-style: normal;
}
/*图片没有边框   去掉图片底侧的空白缝隙*/
img {
    border: 0;  /*ie6*/
    vertical-align: middle;
}

/*取消链接的下划线*/
a {
    color: #666;
    text-decoration: none;
}

a:hover {
    color: #e33333;
}

button,
input {
    font-family: 'Microsoft YaHei', 'Heiti SC', tahoma, arial, 'Hiragino Sans GB', \\5B8B\4F53, sans-serif;
    /*取消轮廓线 蓝色的*/
    outline: none;
}

body {
    background-color: #fff;
    font: 12px/1.5 'Microsoft YaHei', 'Heiti SC', tahoma, arial, 'Hiragino Sans GB', \\5B8B\4F53, sans-serif;
    color: #666
}

.hide,
.none {
    display: none;
}
/*清除浮动*/
.clearfix:after {
    visibility: hidden;
    clear: both;
    display: block;
    content: ".";
    height: 0
}

.clearfix {
    *zoom: 1
}

/*公共样式*/
.fl {
	float: left;
}
.fr {
	float: right;
}

@font-face {
    font-family: 'icomoon';
    src:  url('../../assets/fonts1/icomoon.eot?7kkyc2');
    src:  url('../../assets/fonts1/icomoon.eot?7kkyc2#iefix') format('embedded-opentype'),
    url('../../assets/fonts1/icomoon.ttf?7kkyc2') format('truetype'),
    url('../../assets/fonts1/icomoon.woff?7kkyc2') format('woff'),
    url('../../assets/fonts1/icomoon.svg?7kkyc2#icomoon') format('svg');
  font-weight: normal;
  font-style: normal;
}
.fr .icomoon {
	font-family: 'icomoon';
	font-size: 16px;
	line-height: 26px;
}

.style-red {
	color: #c81623;
}
.spacer {
	width: 1px;
	height: 12px;
	background-color: #666;
	margin: 9px 12px 0;
}
/*顶部快捷导航*/
.shortcut {
	height: 31px;
	background-color: #f1f1f1;
	line-height: 31px;
}
.shortcut li {
	float: left;
}
/*header区域*/
.header {
	position: relative;
	height: 105px;
}
.logo {
	position: absolute;
	top: 25px;
	left: 0;
	width: 175px;
	height: 56px;
}
.logo a {
	display: block;
	/*overflow: hidden;*/
	width: 175px;
	height: 56px;
	background: url(./images/logo.png) no-repeat;
	/*text-indent: -999px;*/
	font-size: 0;
}
.search {
	position: absolute;
	top: 25px;
	left: 348px;
}
.text {
	float: left;
	width: 445px;
	height: 32px;
	border: 2px solid #b1191a;
	padding-left: 10px;
	color: #ccc;
}
.btn {
	float: left;
	width: 82px;
	height: 36px;
	background-color: #b1191a;
	border: 0;
	font-size: 16px;
	color: #fff;
}
.hotwrods {
	position: absolute;
	top: 65px;
	left: 348px;
}
.hotwrods a {
	margin: 0 10px;
}
.shopcar {
	position: absolute;
	top:25px;
	right: 64px;
	width: 138px;
	height: 34px;
	border: 1px solid #dfdfdf;
	background-color: #f7f7f7;
	line-height: 34px;
	text-align: center;
}
.car {
	font-family: 'icomoon';
	color: #da5555;
}
.arrow {
	font-family: 'icomoon';
	margin-left: 5px;
}
.count {
	position: absolute;
	top: -5px;
	/*应该是左侧对齐 文字才能往右走显示*/
	left: 100px;
	background-color: #e60012;
	height: 14px;
	padding: 0 3px;
	line-height: 14px;
	color: #fff;
	/*border-radius: 左上角 右上角  右下角  左下角;*/
	border-radius: 7px 7px 7px 0;
}
/*nav start*/
.nav {
	height: 45px;
	border-bottom: 2px solid #b1191a;
}
.dropdown {
	width: 209px;
	height: 45px;
}
.dropdown .dt {
	height: 100%;
	background-color: #b1191a;
	font-size: 16px;
	color: #fff;
	text-align: center;
	line-height: 45px;
}
.dropdown .dd {
	height: 465px;
	background-color: #c81623;
	margin-top: 2px;
} 

.menu_item:hover {
	background-color: #fff;
}
/*鼠标经过li 里面的 a变颜色*/
.menu_item:hover a {
	color: #c81623;
}

.menu_item {
	height: 31px;
	line-height: 31px;
	margin-left: 1px;
	padding: 0 10px;
	transition: all .5s;
}
.menu_item:hover {
	padding-left: 20px;
}
.menu_item a {
	font-size: 14px;
	color: #fff;
}
.menu_item i {
	float: right;
	font-family: 'icomoon';
	font-size: 18px;
	color: #fff;
}
.navitems {
	margin-left: 10px;
}
.navitems li {
	float: left;
}
.navitems li a {
	display: block;
	height: 45px;
	padding: 0 25px;
	line-height: 45px;
	font-size: 16px;
}

/*详情页的样式文件*/
.de_container {
	margin-top: 20px;
}
.crumb_wrap {
	height: 25px;
}
.crumb_wrap a {
	margin-right: 10px;
}

.itemInfo_wrap {
	width: 718px;
}
.sku_name {
	height: 30px;
	font-size: 16px;
	font-weight: 700;
}
.news {
	height: 32px;
	color: #e12228;
}
.summary dl {
	overflow: hidden;
}
.summary dt,
.summary dd {
	float: left;
}
.summary dt {
	width: 60px;
	padding-left: 10px;
	line-height: 36px;
}
.summary_price ,
.summary_promotion {
	position: relative;
	padding: 10px 0;
	background-color: #fee9eb;
}
.price {
	font-size: 24px;
	color: #e12228;
}
.summary_price a {
	color: #c81623;
}
.remark {
	position: absolute;
	right: 10px;
	top: 20px;
}
.summary_promotion {
	padding-top: 0;
}
.summary_promotion dd {
	width: 450px;
	line-height: 36px;
}
.summary_promotion em {
	display: inline-block;
	width: 40px;
	height: 22px;
	background-color: #c81623;
	text-align: center;
	line-height: 22px;
	color: #fff;
}
.summary_support dd {
	line-height: 36px;
}
.choose_color a {
	display: inline-block;
	width: 80px;
	height: 41px;
	background-color: #f7f7f7;
	border: 1px solid #ededed;
	text-align: center;
	line-height: 41px;
}
.summary a.current {
	border-color: #c81623;
}
.choose_version  {
	margin: 10px 0;
}
.choose_version a,
.choose_type a {
	display: inline-block;
	height: 32px;
	padding: 0 12px;
	background-color: #f7f7f7;
	border: 1px solid #ededed;
	text-align: center;
	line-height: 32px;
}
.choose_btns {
	margin-top: 20px;
}
.choose_amount {
	position: relative;
	float: left;
	width: 49px;
	height: 46px;
	background-color: pink;
}
.choose_amount input {
	width: 33px;
	height: 44px;
	border: 1px solid #ccc;
	text-align: center;
}
.add,
.reduce {
    position: absolute;
    right: 0;
	width: 15px;
	height: 23px;
	border: 1px solid #ccc;
	background-color: #f1f1f1;
	text-align: center;
	line-height: 22px;
}
.add {
	top: 0;
}
.reduce {
    bottom: 0;
}
.ban {
    color: #666;
	/*禁止鼠标样式*/
	cursor: not-allowed;   /* pointer  小手  move  移动  */
}
.addcar {
	float: left;
	width: 142px;
	height: 46px;
	background-color: #c81623;
	text-align: center;
	line-height: 46px;
	font-size: 18px;
	color: #fff;
	margin-left: 10px;
	font-weight: 700;
}
.product_detail {
	margin-bottom: 50px;
}
.aside {
	width: 208px;
	border: 1px solid #ccc;
}
.tab_list {
	overflow: hidden;
	height: 34px;
}
/*把背景颜色 底边框都给 li*/
.tab_list li {
	float: left;
	background-color: #f1f1f1;
	border-bottom: 1px solid #ccc;
	height: 33px;
	text-align: center;
	line-height: 33px;
}
/*鼠标单击 li 变化样式   背景变白色 去掉下边框 文字变颜色*/
.tab_list .current {
	background-color: #fff;
	border-bottom: 0;
	color: red;
}
.first_tab {
	width: 104px;
}
.second_tab {
	width: 103px;
	border-left: 1px solid #ccc;
}
.tab_con {
	padding: 0 10px;
}
.tab_con li {
	border-bottom: 1px solid #ccc;
}
.tab_con li h5 {
	/*超出的文字省略号显示*/
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	font-weight: 400;
}
.aside_price {
	font-weight: 700;
	margin: 10px 0;
}
.as_addcar {
	display: block;
	width: 88px;
	height: 26px;
	border: 1px solid #ccc;
	background-color: #f7f7f7;
	margin: 10px auto;
	text-align: center;
	line-height: 26px;
}
.detail {
	width: 978px;
}
.detail_tab_list {
	height: 39px;
	border: 1px solid #ccc;
	background-color: #f1f1f1;
}
.detail_tab_list li {
	float: left;
	height: 39px;
	line-height: 39px;
	padding: 0 20px;
	text-align: center;
	cursor: pointer;
}
.detail_tab_list .current {
	background-color: #c81623;
	color: #fff;
}
.item_info {
	padding: 20px 0 0 20px;
}
.item_info li {
	line-height: 22px;
}
.more {
	float: right;
	font-weight: 700;
	font-family: 'icomoon';
}
</style>