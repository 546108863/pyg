<template>
    <div class="banner-right-container">
            <!-- 品优购快报 -->
            <div class="banner-right-container-top">
                <dl>
                    <dt><span>品优购快报</span><a href="#">更多</a></dt>
                    <dd>
                        <h4>[特惠]</h4>
                        <a href="#"> 备战开学季全民半价购数码</a>
                    </dd>
                    <dd>
                        <h4>[公告]</h4><a href="#"> 品优稳占家电网购六成份额</a>
                    </dd>
                    <dd>
                        <h4>[特惠]</h4><a href="#"> 百元中秋全品类礼券限量领取</a>
                    </dd>
                    <dd>
                        <h4>[公告]</h4><a href="#"> 上品优生鲜享阳澄湖大闸蟹</a>
                    </dd>
                    <dd>
                        <h4>[特惠]</h4><a href="#"> 每日享折扣品优品质游</a>
                    </dd>
                </dl>
            </div>
            <!-- 右边小图片导航栏 -->
            <div class="banner-right-container-middle">
                <ul>
                    <li><a href="#"><img src="../../../../../assets/images/icons.png" alt=""><span>话费</span></a></li>
                    <li><a href="#"><img src="../../../../../assets/images/icons.png" alt=""><span>机票</span></a></li>
                    <li><a href="#"><img src="../../../../../assets/images/icons.png" alt=""><span>电影票</span></a></li>
                    <li><a href="#"><img src="../../../../../assets/images/icons.png" alt=""><span>游戏</span></a></li>
                    <li><a href="#"><img src="../../../../../assets/images/icons.png" alt=""><span>彩票</span></a></li>
                    <li><a href="#"><img src="../../../../../assets/images/icons.png" alt=""><span>加油卡</span></a></li>
                    <li><a href="#"><img src="../../../../../assets/images/icons.png" alt=""><span>酒店</span></a></li>
                    <li><a href="#"><img src="../../../../../assets/images/icons.png" alt=""><span>火车票</span></a></li>
                    <li><a href="#"><img src="../../../../../assets/images/icons.png" alt=""><span>众筹</span></a></li>
                    <li><a href="#"><img src="../../../../../assets/images/icons.png" alt=""><span>理财</span></a></li>
                    <li><a href="#"><img src="../../../../../assets/images/icons.png" alt=""><span>礼品卡</span></a></li>
                    <li><a href="#"><img src="../../../../../assets/images/icons.png" alt=""><span>白条</span></a></li>
                </ul>
            </div>
            <!-- 右边下方图片 -->
            <div class="banner-right-container-bottom"></div>
    </div>

</template>

<script>
export default {
    name:"BannerRightContainer"
}
</script>

<style scoped>
.banner-right-container {
    float: right;
    width: 250px;
    height: 455px;
    margin-top: 10px;
}

.banner-right-container-top {
    width: 248px;
    height: 163px;
    font-size: 12px;
    color: #666666;
    border: 1px solid #e4e4e4;
}

.banner-right-container-top dl dt {
    height: 32px;
    line-height: 32px;
    border-bottom: 1px dotted #e4e4e4;
}

.banner-right-container-top dl dt span {
    font-size: 14px;
    margin: 12px 0 0 15px;
    color: #333333;
}

.banner-right-container-top dl dt a {
    font-family: 'icomoon';
    float: right;
    margin-right: 15px;
}

.banner-right-container-top dl dd {
    height: 12px;
    margin: 12px 0 0 15px;
}

.banner-right-container-top dl dd h4 {
    display: inline-block;
    font-size: 12px;
}

.banner-right-container-middle {
    width: 249px;
    height: 210px;
    border-right: 1px solid #e4e4e4;

}

.banner-right-container-middle li {
    float: left;
    position: relative;
    width: 61px;
    height: 69px;
    overflow: hidden;
    border-left: 1px solid #e4e4e4;
    border-bottom: 1px solid #e4e4e4;
    text-align: center;
}

.banner-right-container-middle li img {
    position: absolute;
}


.banner-right-container-middle li:nth-child(1) img {
    top: -4px;
    left: 2px;
}

.banner-right-container-middle li:nth-child(2) img {
    top: -5px;
    left: -60px;
}

.banner-right-container-middle li:nth-child(3) img {
    top: -5px;
    left: -123px;
}

.banner-right-container-middle li:nth-child(4) img {
    top: -4px;
    left: -186px;
}

.banner-right-container-middle li:nth-child(5) img {
    top: -75px;
    left: 2px;
}

.banner-right-container-middle li:nth-child(6) img {
    top: -75px;
    left: -60px;
}

.banner-right-container-middle li:nth-child(7) img {
    top: -75px;
    left: -123px;
}

.banner-right-container-middle li:nth-child(8) img {
    top: -75px;
    left: -186px;
}

.banner-right-container-middle li:nth-child(9) img {
    top: -145px;
    left: 2px;
}

.banner-right-container-middle li:nth-child(10) img {
    top: -145px;
    left: -60px;
}

.banner-right-container-middle li:nth-child(11) img {
    top: -140px;
    left: -123px;
}

.banner-right-container-middle li:nth-child(12) img {
    top: -145px;
    left: -186px;
}

.banner-right-container-middle li a span {
    display: inline-block;
    font: 14px songti;
    margin-top: 47px;
}

.banner-right-container-middle li:nth-child(4n) {
    width: 62px;
}

.banner-right-container-bottom {
    width: 250px;
    height: 75px;
    margin-top: 5px;
    background-image: url(./images/img.png);
}
</style>