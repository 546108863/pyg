<template>
    <div class="link">
        <div class="link-container w">
            <div class="link-header">
                <ul>
                    <li style="margin-left: 0;">
                        <div></div>
                        <div class="link-header-info">
                            <h4>正品保障</h4>
                            <span>正品保障，提供发票</span>
                        </div>
                    </li>
                    <li>
                        <div style="background-position: -253px -52px;"></div>
                        <div class="link-header-info">
                            <h4>极速物流</h4>
                            <span>急速物流，急速送达</span>
                        </div>
                    </li>
                    <li>
                        <div style="background-position: -255px -104px;"></div>
                        <div class="link-header-info">
                            <h4>无忧售后</h4>
                            <span>7天无理由退换货</span>
                        </div>
                    </li>
                    <li>
                        <div style="background-position: -256px -156px;"></div>
                        <div class="link-header-info">
                            <h4>特色服务</h4>
                            <span>私人定制家电套餐</span>
                        </div>
                    </li>
                    <li>
                        <div style="background-position: -255px -208px;"></div>
                        <div class="link-header-info">
                            <h4>帮助中心</h4>
                            <span>您的购物指南</span>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="link-middle">
                <ul>
                    <li>
                        <dl>
                            <dt>购物指南</dt>
                            <dd><a href="#">购物流程</a></dd>
                            <dd><a href="#">会员介绍</a></dd>
                            <dd><a href="#">生活旅行/团购</a></dd>
                            <dd><a href="#">常见问题</a></dd>
                            <dd><a href="#">大家电</a></dd>
                            <dd><a href="#">联系客服</a></dd>
                        </dl>
                    </li>
                    <li>
                        <dl>
                            <dt>配送方式</dt>
                            <dd><a href="#">上门自提</a></dd>
                            <dd><a href="#">211限时达</a></dd>
                            <dd><a href="#">配送服务查询</a></dd>
                            <dd><a href="#">配送费收取标准</a></dd>
                            <dd><a href="#">海外配送</a></dd>
                        </dl>
                    </li>
                    <li>
                        <dl>
                            <dt>支付方式</dt>
                            <dd><a href="#">货到付款</a></dd>
                            <dd><a href="#">在线支付</a></dd>
                            <dd><a href="#">分期付款</a></dd>
                            <dd><a href="#">邮局汇款</a></dd>
                            <dd><a href="#">公司转账</a></dd>
                        </dl>
                    </li>
                    <li>
                        <dl>
                            <dt>售后服务</dt>
                            <dd><a href="#">售后政策</a></dd>
                            <dd><a href="#">价格保护</a></dd>
                            <dd><a href="#">退款说明</a></dd>
                            <dd><a href="#">返修/退换货</a></dd>
                            <dd><a href="#">取消订单</a></dd>
                        </dl>
                    </li>
                    <li>
                        <dl>
                            <dt>特色服务</dt>
                            <dd><a href="#">夺宝岛</a></dd>
                            <dd><a href="#">DIY装机</a></dd>
                            <dd><a href="#">延保服务</a></dd>
                            <dd><a href="#">品优购E卡</a></dd>
                            <dd><a href="#">品优购通信</a></dd>
                        </dl>
                    </li>
                    <li style="width: 90px;">
                        <dl>
                            <dt>帮助中心</dt>
                            <dd><img src="../../../assets/images/code.jpg" alt=""></dd>
                            <dd style="font: 12px songti;"><span>品优购客户端</span></dd>
                        </dl>
                    </li>
                </ul>
            </div>
            <div class="link-bottom">
                <div>
                    <ul>
                        <li><a href="#">关于我们</a></li>
                        <li><a href="#">联系我们</a></li>
                        <li><a href="#">联系客服</a></li>
                        <li><a href="#">商家入驻</a></li>
                        <li><a href="#">营销中心</a></li>
                        <li><a href="#">手机品优购</a></li>
                        <li><a href="#">友情链接</a></li>
                        <li><a href="#">销售联盟</a></li>
                        <li><a href="#">品优购社区</a></li>
                        <li><a href="#">品优购公益</a></li>
                        <li><a href="#">English Site</a></li>
                        <li style="border-right: none;"><a href="#">Contact U</a></li>
                    </ul>
                </div>
                <div>
                    <span>地址：北京市昌平区建材城西路金燕龙办公楼一层 邮编：100096 电话：400-618-4000 传真：010-82935100 邮箱: zhanghj+itcast.cn</span>
                </div>
                <div>
                    <span>京ICP备08001421号京公网安备110108007702</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name:"bottom"
}
</script>

<style scoped>
  .link {
    height: 100%;
    margin-top: 36px;
    background-color: #f5f5f5;
}

.link .link-container .link-header {
    position: relative;
    height: 109px;
    border-bottom: 1px solid #ededed;
}

.link .link-container .link-header ul {
    position: absolute;
    width: 1080px;
    height: 52px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.link .link-container .link-header li {
    float: left;
    width: 164px;
    height: 52px;
    margin-left: 65px;
    font: 12px "songti";
}

.link .link-container .link-header li h4 {
    font: 600 14px "Microsoft yahei";
    line-height: 30px;

}

.link .link-container .link-header div:first-child {
    float: left;
    height: 52px;
    width: 52px;
    background-image: url(../../../assets/images/icons.png);
    background-position: -253px 0px;
}

.link .link-container .link-header div:last-child {
    float: left;
}

.link .link-container .link-middle {
    height: 187px;
    margin-top: 20px;
    border-bottom: 1px solid #ededed;
}

.link .link-container .link-middle dt {
    font-size: 16px;
    color: #333333;
}

.link .link-container .link-middle li {
    float: left;
    width: 200px;
}

.link .link-container .link-middle li a {
    font: 12px "songti";
    color: #333333;
}

.link .link-container .link-middle ul {
    margin-left: 50px;
}

.link .link-container .link-middle li:last-child {
    text-align: center;
}

.link .link-container .link-bottom {
    height: 119px;
    color: #666666;
    font-size: 12px;
}

.link .link-container .link-bottom div:first-child {
    width: 975px;
    height: 15px;
    margin: 20px auto 0;
}

.link .link-container .link-bottom div:nth-child(2) {
    margin-top: 15px;
    text-align: center;
}

.link .link-container .link-bottom div:nth-child(3) {
    margin-top: 8px;
    text-align: center;
}

.link .link-container .link-bottom li {
    float: left;
    width: 77px;
    border-right: 1px solid #999999;
    text-align: center;
}
</style>