<template>
    <div class="cnxh w">
        <div class="cnxh-header">
            <h4>猜你喜欢</h4>
            <a href="#">换一批<div></div></a>
        </div>
        <div class="cnxh-main">
            <ul>
                <li>
                    <router-link to="/shopdetail" class="cnxh-main-w">
                        <div class="image"><img src="./images/cnxh1.png" alt=""></div>
                        <div class="info">
                            <h4>阳光美包</h4>
                            <span>新款单肩包女包时尚子母包</span>
                            <h4 class="price">￥116.00</h4>
                        </div>
                    </router-link>
                </li>
                <li></li>
                <li>
                    <router-link to="/shopdetail" class="cnxh-main-w">
                        <div class="image"><img src="./images/cnxh2.png" alt=""></div>
                        <div class="info">
                            <h4>爱仕达</h4>
                            <span>30CM炒锅不粘锅NWG8330E</span>
                            <h4 class="price">￥99.00</h4>
                        </div>
                    </router-link>
                </li>
                <li></li>
                <li>
                    <router-link to="/shopdetail" class="cnxh-main-w">
                        <div class="image"><img src="./images/cnxh3.png" alt=""></div>
                        <div class="info">
                            <h4>捷波朗</h4>
                            <span>（jabra）BOOSI劲步</span>
                            <h4 class="price">￥245.00</h4>
                        </div>
                    </router-link>
                </li>
                <li></li>
                <li>
                    <router-link to="/shopdetail" class="cnxh-main-w">
                        <div class="image"><img src="./images/cnxh4.png" alt=""></div>
                        <div class="info">
                            <h4>欧普</h4>
                            <span>JYLZ08面板灯平板灯铝</span>
                            <h4 class="price">￥238.00</h4>
                        </div>
                    </router-link>
                </li>
                <li></li>
                <li>
                    <router-link to="/shopdetail" class="cnxh-main-w">
                        <div class="image"><img src="./images/cnxh5.png" alt=""></div>
                        <div class="info">
                            <h4>三星</h4>
                            <span>（G5500）移动联</span>
                            <h4 class="price">￥649.00</h4>
                        </div>
                    </router-link>
                </li>
                <li></li>
                <li>
                    <router-link to="/shopdetail" class="cnxh-main-w">
                        <div class="image"><img src="./images/cnxh6.png" alt=""></div>
                        <div class="info">
                            <h4>韩国所望</h4>
                            <span>紧致湿润精华露400ml</span>
                            <h4 class="price">￥649.00</h4>
                        </div>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:"MainLike"
}
</script>

<style>
.cnxh {
    height: 262px;
    
}

.cnxh-header {
    height: 32px;
    margin-top: 30px;
    color: #333333;
}

.cnxh-header h4 {
    float: left;
    font-size: 18px;
    font-weight: 400;
}

.cnxh-header a {
    float: right;
    margin-right: 10px;
    font: 12px songti;
    color: #666666;
}

.cnxh-header a div {
    float: right;
    height: 20px;
    width: 25px;
    background: url(../../../../assets/images/icons.png) no-repeat -413px -110px;
}

.cnxh .cnxh-main {
    height: 231px;
    border: 1px solid #ededed;
}

.cnxh .cnxh-main li:nth-child(even) {
    float: left;
    height: 62px;
    width: 1px;
    margin-top: 160px;
    background-color: #ededed;
}

.cnxh .cnxh-main-w {
    float: left;
    width: 198px;
    height: 231px;
}

.cnxh .cnxh-main-w .image {
    height: 162px;
    /* position: relative; */
    /* 弹性盒子垂直居中 */
    /* display: flex;
    justify-content: center;
    align-items: center; */
    position: relative;

}

.cnxh .cnxh-main-w .image img {
    /* position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto; */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.cnxh .cnxh-main-w .info {
    height: 68px;
    font-size: 12px;
    margin-left: 35px;
    vertical-align: bottom;
}

.cnxh .cnxh-main-w .info h4 {
    font: normal 400 12px songti;
}

.cnxh .cnxh-main-w .info .price {
    font-size: 18px;
    color: #df3033;
}
</style>