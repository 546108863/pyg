<template>
    <div class="rmfq w">
        <div class="rmfq-header">
            <h4 style="font-weight: 400;">热门疯抢</h4>
        </div>
        <div class="rmfq-main">
            <ul>
                <li>
                    <a href="#"><img src="./images/rmfq1.png" alt="">
                        <div class="rmfq-info">
                            <h4>暴风魔镜 小D 虚拟现实智能VR眼睛3</h4>
                            <span>￥79.00</span>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#" class="rmfq-w">
                        <img src="./images/rmfq2.png" alt="">
                        <div class="rmfq-info">
                            <h4>羽博 7800毫安 Z3移动电源/充电</h4>
                            <span>￥79.00</span>
                        </div>
                    </a>
                    <a href="#" class="rmfq-w" style="border-bottom:0">
                        <img src="./images/rmfq3.png" alt="">
                        <div class="rmfq-info">
                            <h4>2016夏季新款短袖镂空大V领蕾丝</h4>
                            <span>￥139.00</span>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#" class="rmfq-w">
                        <img src="./images/rmfq4.png" alt="">
                        <div class="rmfq-info">
                            <h4>全微（transwin）A-920 2.0声道</h4>
                            <span>￥128.00</span>
                        </div>
                    </a>
                    <a href="#" class="rmfq-w" style="border-bottom:0">
                        <img src="./images/rmfq3.png" alt="">
                        <div class="rmfq-info">
                            <h4>2016夏季新款短袖镂空大V领蕾丝</h4>
                            <span>￥29.00</span>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#" class="rmfq-w">
                        <img src="./images/rmfq3.png" alt="">
                        <div class="rmfq-info">
                            <h4>2016夏季新款短袖镂空大V领蕾丝</h4>
                            <span>￥129.00</span>
                        </div>
                    </a>
                    <a href="#" class="rmfq-w" style="border-bottom:0">
                        <img src="./images/rmfq5.png" alt="">
                        <div class="rmfq-info">
                            <h4>璞衣 2016秋冬新款复古棉麻印花</h4>
                            <span>￥129.00</span>
                        </div>
                    </a>
                </li>
                <li>
                    <div class="review">

                        <img src="./images/rmfq6.png" alt="" style="margin-left: 10px;">

                        <div class="review-main">
                            <div class="tx">
                                <img src="./images/touxiang.png" alt="">
                                <span>0807**</span>
                            </div>
                            <div class="triangle"></div>
                            <div class="text">
                                <span>高分辨率的屏幕用着和台式机一样,电脑很流畅,性价比高</span>
                            </div>
                        </div>

                    </div>
                    <div class="review">
                        <img src="./images/rmfq7.png" alt="" style="margin-left: 10px;">
                        <div class="review-main">
                            <div class="tx">
                                <img src="./images/touxiang1.png" alt="">
                                <span>淹***鱼</span>
                            </div>
                            <div class="triangle"></div>
                            <div class="text">
                                <span>摄像头超清晰,拍出来的图片是1080p的</span>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:"MainHotPoint"
}
</script>

<style>
.rmfq {
    height: 314px;
    margin-top: 30px;
    margin-bottom: 36px;
}

.rmfq-header {
    height: 30px;
    margin-top: 30px;
    font-size: 18px;
    color: #333333;
}

.rmfq-main {
    height: 280px;
    border: 1px solid #ededed;
}

.rmfq-main li {
    float: left;
}

.rmfq-main .rmfq-info h4 {
    font: 400 12px "Microsoft yahei";
}

.rmfq-main .rmfq-info span {
    font-size: 16px;
    color: #df3033;

}

.rmfq-main li {
    width: 219px;
}

.rmfq-main ul li:nth-child(1) {
    float: left;
    width: 239px;
    height: 280px;
    border-right: 1px solid #ededed;
}

.rmfq-main li:nth-child(1) .rmfq-info {
    margin-left: 28px;
}

.rmfq-main .rmfq-w {
    display: block;
    width: 219px;
    height: 138px;
    border-right: 1px solid #ededed;
    border-bottom: 1px solid #ededed;
}

.rmfq-main .rmfq-w .rmfq-info {
    float: right;
    width: 103px;
    margin: 20px 0 0 5px;
}

.rmfq-main .rmfq-w img {
    float: left;
    margin-top: 20px;
    margin-left: 10px;
}

.rmfq-main li:last-child {
    width: 297px;
    height: 100%;
}

.rmfq-main .review {
    position: relative;
    height: 105px;
    padding-top: 35px;
}

.rmfq-main .review .tx {
    font-size: 12px;
    color: #666666;
}

.rmfq-main .review .tx img {
    border-radius: 50%;
    vertical-align: middle;
}

.rmfq-main .review .text {
    width: 165px;
    height: 54px;
    font-size: 12px;
    margin: 5px 12px 0 0;
    background-color: #f8f8f8;
    color: #666666;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical
}

.rmfq-main .review .text span::before {
    content: '';
    display: inline-block;
    height: 10px;
    width: 10px;
    margin: 0 4px;
    background: url(./images/leftyh.png) no-repeat;
}

.rmfq-main .review .text span::after {
    content: ' ';
    display: inline-block;
    height: 10px;
    width: 10px;
    margin: 0 4px;
    background: url(./images/rightyh.png) no-repeat;
}

.rmfq-main .review .triangle {
    position: absolute;
    height: 0;
    width: 0;
    border: 5px solid #f8f8f8;
    border-top: 5px solid transparent;
    border-right: 5px solid transparent;
    top: 91px;
    left: 115px;
    transform: rotate(45deg);
}

.rmfq-main .review .review-main {
    float: right;
}
</style>