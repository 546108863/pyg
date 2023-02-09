<template>
    <div class="body-left-nav">
        <ul>
            <li><a href="#">家用电器</a></li>
            <li><a href="#">手机通讯</a></li>
            <li><a href="#">电脑办公</a></li>
            <li><a href="#">家居家具</a></li>
            <li><a href="#">生活用品</a></li>
            <li><a href="#">运动户外</a></li>
            <li><a href="#">汽车用品</a></li>
            <li><a href="#">食品酒类</a></li>
            <li><a href="#">医药保健</a></li>
            <li><a href="#">图书音像</a></li>
            <li><a href="#">金融彩票</a></li>
        </ul>
    </div>
</template>

<script>
export default {
    name:"ContainerBodyLeftNav"
}
</script>

<style>
    .body-left-nav {
    position: fixed;
    width: 66px;
    height: 340px;
    top: 321px;
    left: 196px;
    line-height: 30px;
    text-align: center;
}

.body-left-nav a {
    display: block;
    height: 30px;
    border-bottom: 1px solid #ededed;
}

.body-left-nav a:hover {
    background-color: #c81623;
    color: #ffffff;
}
</style>