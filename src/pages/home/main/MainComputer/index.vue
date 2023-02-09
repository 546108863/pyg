<template> 
    <div class="container-w w">
        <div class="container-w-header">
            <h4>电脑办公</h4>
            <ul>
                <li style="border-left: none;padding-left: 0;">
                    <a href="#" style="color: #c81623;">热门</a>
                </li>
                <li><a href="#">电脑/平板</a></li>
                <li><a href="#">潮流影音</a></li>
                <li><a href="#">智能/外设</a></li>
                <li><a href="#">DIY硬件</a></li>
                <li><a href="#">电竞游戏</a></li>
                <li><a href="#">办公/网络</a></li>
                <li><a href="#">文具电教</a></li>
                <li style="padding-right: 8px;"><a href="#">精选配件</a></li>
            </ul>
        </div>
        <div class="container-w-main">
            <div>
                <div style="height: 125px;">
                    <ul>
                        <li><a href="#">节能补贴</a></li>
                        <li><a href="#">4K电视</a></li>
                        <li><a href="#">空气净化器</a></li>
                        <li><a href="#">IH电饭煲</a></li>
                        <li><a href="#">滚筒洗衣机</a></li>
                        <li><a href="#">电热水器</a></li>
                    </ul>
                </div>
                <div style="height: 235px;width: 100%;text-align: center;">
                    <a href="#"><img src="./images/1.png" alt=""></a>
                </div>
            </div>
            <div>
                <a href="#"><img src="./images/2.png" alt=""></a>
                <ul>
                    <li>
                        <a href="#" style="background-color: #ffffff;margin-left: 0;"></a>
                    </li>
                    <li><a href="#"></a></li>
                    <li><a href="#"></a></li>
                </ul>
            </div>
            <div class="container-w-main-w">
                <a href="#">
                    <img src="./images/3.png" alt="" style="margin-top: 24px;margin-left: 19px;">
                </a>
                <a href="#">
                    <img src="./images/4.png" alt="" style="margin-top: 22px;margin-left: 17px;">
                </a>
            </div>
            <div>
                <a href="#" style=" text-align: center;">
                    <img src="./images/5.png" alt="" style="margin-top: 63px;">
                </a>
            </div>
            <div class="container-w-main-w">
                <a href="#">
                    <img src="./images/6.png" alt="" style="margin-top: 22px;margin-left: 17px;">
                </a>
                <a href="#">
                    <img src="./images/7.png" alt="" style="margin-top: 23px;margin-left: 11px;">
                </a>
            </div>
        </div>
        <div class="container-w-bottom" style="margin-top: 20px;">
            <img src="./images/8.png" alt="">
        </div>
    </div>
</template>

<script>
export default {
  name:"MainComputer"
}
</script>

<style>
  .container-w {
    height: 474px;
}

.container-w .container-w-header {
    height: 27px;
    margin-top: 28px;
}

.container-w .container-w-header h4 {
    float: left;
    font: 400 18px "Microsoft yahei";
    font-size: 18px;
    color: #c81623;
}

.container-w .container-w-header ul {
    float: right;
    margin-top: 5px;
}

.container-w .container-w-header ul li {
    float: left;
    font-size: 12px;
    padding: 0 14px 0 12px;
    border-left: 1px solid #999999;
}

.container-w-main {
    height: 360px;
    border-top: 2px solid #c81623;
}

.container-w-main div:first-child {
    float: left;
    width: 210px;
    height: 100%;
    background-color: #f9f9f9;
}

.container-w-main div:first-child li {
    float: left;
    width: 87px;
    height: 32px;
    margin-right: 12px;
    text-align: center;
    border-bottom: 1px solid #ededed;
}

.container-w-main div:first-child li:nth-child(odd) {
    margin-left: 12px;
}

.container-w-main div:nth-child(2) {
    float: left;
    position: relative;
    width: 329px;
}

.container-w-main div:nth-child(2) ul {
    position: absolute;
    bottom: 15px;
    left: 50%;
    margin-left: -22.5px;
    width: 45px;
    height: 10px;
}

.container-w-main div:nth-child(2) ul a {
    float: left;
    height: 10px;
    width: 10px;
    border-radius: 50%;
    margin-left: 7px;
    background-color: #3e3e3e;
}

.container-w-main-w {
    float: left;
    width: 219px;
}

.container-w-main-w a {
    display: block;
    height: 179px;
    width: 100%;
    border: 1px solid #ededed;
    border-top: none;
}

.container-w-main div:nth-child(4) a {
    float: left;
    width: 220px;
    height: 359px;
    border-bottom: 1px solid #ededed;
}
</style>