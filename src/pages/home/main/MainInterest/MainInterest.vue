<template>
    <div class="yq w">
        <div class="yq-header">
            <h4>有趣区</h4>
        </div>
        <div class="yq-main">
            <a href="#" class="yq-main-left"><img src="./images/yq1.png" alt=""></a>
            <div class="yq-main-middle">
                <dl>
                    <dt class="yq-main-w">好东西</dt>
                    <dd><a href=""><img src="./images/yq2.png" alt=""></a></dd>
                    <dd><a href=""><img src="./images/yq3.png" alt=""></a></dd>
                </dl>
            </div>
            <div class="yq-main-right">
                <dl>
                    <dt class="yq-main-w">品牌街</dt>
                    <dd><a href=""><img src="./images/yq4.png" alt=""></a></dd>
                    <dd><a href=""><img src="./images/yq5.png" alt=""></a></dd>
                    <dd><a href=""><img src="./images/yq6.png" alt=""></a></dd>
                </dl>
            </div>
            <div class="yq-main-logo"><img src="./images/yqlogo.png" alt=""></div>
        </div>
    </div>
</template>

<script>
export default {
    name:"MainInterest"
}
</script>

<style>
.yq {
    height: 434px;
}

.yq .yq-header {
    height: 26px;
    margin-top: 30px;
}

.yq .yq-header h4 {
    font: 400 18px "Microsoft yahei";
    font-size: 18px;
    font-weight: 400;
}

.yq .yq-main {
    height: 405px;
    border: 1px solid #ededed;
}

.yq-main .yq-main-w {
    height: 39px;
    width: 191px;
    border-bottom: 1px dashed #ededed;
    font-size: 14px;
    font-weight: 600;
    text-align: center;
    line-height: 39px;
    margin: 0 auto;
}

.yq-main .yq-main-left {
    float: left;
    width: 404px;
    height: 100%;
}

.yq-main .yq-main-middle {
    float: left;
    width: 226px;
    height: 100%;
}

.yq-main .yq-main-middle dl dd:nth-child(2) {
    height: 191px;
    width: 221;
    border-right: 1px solid #ededed;
    border-bottom: 1px solid #ededed;
}

.yq-main .yq-main-middle dl dd:nth-child(2) img {
    padding: 15px 0 0 5px;
}

.yq-main .yq-main-middle dl dd:nth-child(3) {
    height: 146px;
    width: 214;
    border-right: 1px solid #ededed;
}

.yq-main .yq-main-middle dl dd:nth-child(3) img {
    padding: 12px 0 0 7px;
}

.yq-main .yq-main-right {
    float: left;
    width: 405px;
    height: 100%;
    background-color: #f7f7f7;
    border-right: 1px solid #ededed;
}

.yq-main .yq-main-right dt {
    width: 365px;
}

.yq-main .yq-main-right dl dd:nth-of-type(1) {
    height: 205px;
    width: 405px;
    border-bottom: 1px solid #ededed;
}

.yq-main .yq-main-right dl dd:nth-of-type(1) img {
    padding: 43px 0 0 53px;
}

.yq-main .yq-main-right dl dd:nth-of-type(2) {
    float: left;
    height: 158px;
    width: 202px;
    border-right: 1px solid #ededed;
}

.yq-main .yq-main-right dl dd:nth-of-type(2) img {
    padding: 26px 0 0 11px;
}

.yq-main .yq-main-right dl dd:nth-of-type(3) {
    float: left;
    height: 158px;
    width: 202px;
}

.yq-main .yq-main-right dl dd:nth-of-type(3) img {
    padding: 21px 0 0 21px;
}

.yq-main .yq-main-logo {
    float: left;
}

.yq-main .yq-main-logo img {
    width: 160px;
    height: 405px;
}
</style>