<template>
    <div class="banner-left-nav">
            <ul>
                <li><a href="#">家用电器</a></li>
                <li><a href="#">手机、数码、通信</a></li>
                <li><a href="#">电脑、办公</a></li>
                <li><a href="#">家居、家具、家装、厨具</a></li>
                <li><a href="#">男装、女装、童装、内衣</a></li>
                <li><a href="#">个户化妆、清洁用品、宠物</a></li>
                <li><a href="#">鞋靴、箱包、珠宝、奢侈品</a></li>
                <li><a href="#">运动户外、钟表</a></li>
                <li><a href="#">汽车、汽车用品</a></li>
                <li><a href="#">母婴、玩具乐器</a></li>
                <li><a href="#">食品、酒类、生鲜、特产</a></li>
                <li><a href="#">医药保健</a></li>
                <li><a href="#">图书、音像、电子书</a></li>
                <li><a href="#">彩票、旅行、充值、票务</a></li>
                <li><a href="#">理财、众筹、白条、保险</a></li>
            </ul>
    </div>
</template>

<script>
export default {
    name:"BannerLeftNav"
}
</script>

<style>
.banner-left-nav {
    float: left;
    width: 210px;
    height: 465px;
    background-color: #c81623;
}

.banner-left-nav ul {
    margin-top: 15px;
}

.banner-left-nav li a {
    display: block;
    height: 30px;
    width: 198px;
    padding-left: 12px;
    font-size: 14px;
    line-height: 30px;
    color: #ffffff;
}

.banner-left-nav li a::after {
    font-family: 'icomoon';
    content: '';
    font-size: 14px;
    float: right;
    margin-right: 10px;
}

.banner-left-nav a:hover {
    color: #c81623;
    background-color: #f7f7f7;
}

</style>