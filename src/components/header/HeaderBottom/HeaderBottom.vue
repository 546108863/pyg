<template>
    <div class="main-header">
        <div class="w">
            <div class="drowdown">全部商品分类</div>
            <div class="main-header-nav">
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
</template>

<script>
export default {
    name:"HeaderBottom"
}
</script>

<style scoped>
.main-header {
    height: 45px;
    margin-top: 20px;
    border-bottom: 2px solid #b1191a;
}

.drowdown {
    float: left;
    width: 210px;
    height: 45px;
    line-height: 45px;
    text-align: center;
    color: #ffffff;
    background-color: #b1191a;
}

.main-header-nav {
    width: 665px;
    height: 45px;
    line-height: 45px;
    margin: 0 auto;
}

.main-header .main-header-nav li {
    float: left;
    margin-right: 46px;
}

.main-header .main-header-nav li:last-child {
    margin-right: 0;
}

.main-header .main-header-nav li a {
    font: 16px 微软雅黑;
    color: #333333;
}
</style>