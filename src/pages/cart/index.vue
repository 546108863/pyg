<template>
    <div>
           <!-- 头部 -->
    <div class="header">
        <!-- 头部最上边导航栏 -->
        <div class="header-top-nav">
            <div class="w">
                <!-- 头部左侧注册登录 -->
                <div class="left">
                    <ul>
                        <li>品优购欢迎您!</li>
                        <li><router-link to="/login" class="entry">请登陆</router-link></li>
                        <li><router-link to="/register" class="register">免费注册</router-link></li>
                    </ul>
                </div>
                <!-- 头部右边导航栏 -->
                <div class="right-nav">
                    <ul>
                        <li><a href="#">我的订单</a></li>
                        <li class="spacer"></li>
                        <li><a href="#">我的品优购</a><span class="iconfont"></span></li>
                        <li class="spacer"></li>
                        <li><a href="#">品优购会员</a></li>
                        <li class="spacer"></li>
                        <li><a href="#">企业采购</a></li>
                        <li class="spacer"></li>
                        <li><a href="#">关注品优购</a><span class="iconfont"></span></li>
                        <li class="spacer"></li>
                        <li><a href="#">客户服务</a><span class="iconfont"></span></li>
                        <li class="spacer"></li>
                        <li><a href="#">网站导航</a><span class="iconfont"></span></li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- 搜索框、左边logo -->
        <div class="header-search w">
            <img src="../../assets/images/logo.png" alt="logo">
            <div class="search">
                <input type="text">
                <button>搜索</button>
            </div>

        </div>
    </div>


    <!-- 主体内容 -->
    <div class="cart-body w">
        <!-- 商品栏目头部 -->
        <div class="cart-theader">
            <h3>全部商品 <span>11</span></h3>
            <ul class="cart-category">
                <li>
                    <input type="checkbox" id="all"><label for="all">全选</label>
                </li>
                <li>商品</li>
                <li>单价(元)</li>
                <li>数量</li>
                <li>小计(元)</li>
                <li>操作</li>
            </ul>
        </div>
        <!-- 商品结算栏 -->
        <div class="cart-tbody">
            <!-- 同一家店商品头部选择框 -->
            <div class="shop">
                <input type="checkbox">
                <span class="shop-text">品优购自营</span>
                <div class="shop-extra">
                    <span>运费:￥6.00</span>
                    <span>还差￥99.00元免运费</span>
                </div>
            </div>
            <!-- 同一家店商品栏目 -->
            <div class="item-list">
                <div class="item-set">
                    <div class="item-list-header">
                        <div class="list-header-change">换购</div>
                        <span>活动商品购满2888.00元，即可加价换购商品1件 ></span>
                        <div class="list-header-check">查看换购品</div>
                        <a href="">去凑单 ></a>
                    </div>
                    <div class="item-main">
                        <div class="item-form clearfix">
                            <input type="checkbox" class="cell">
                            <div class="item-info cell">
                                <a class="item-img" href="">
                                    <img src="https://img13.360buyimg.com/n5/s54x54_jfs/t1/178646/26/32669/19117/63da392eFdc5e359b/e171b25b089ad579.jpg"
                                        alt="">
                                </a>
                                <div class="item-info-msg">
                                    <div class="item-info-name">
                                        <span>苹果（Apple）MD463FE/A MAC Thunderbolt雷电接口 至千兆以太网转</span>
                                    </div>
                                    <div class="item-info-ser">
                                        <img src="" alt="">
                                        <span>购买礼品包装</span>
                                    </div>
                                </div>

                            </div>
                            <div class="item-props cell">
                                <span>属性:</span>
                                <span>Thunderbolt至千兆...</span>
                            </div>
                            <div class="item-price cell"><span>248.00</span></div>
                            <div class="item-quantity cell">
                                <button>-</button>
                                <input type="text">
                                <button>+</button>
                            </div>
                            <div class="item-sum cell"><span>248.00</span></div>
                            <div class="item-operation cell">
                                <button>删除</button>
                                <button>移到我的关注</button>
                            </div>
                        </div>
                        <div class="item-gift">
                            <div>
                                <span>[赠品]圣迪威（Sendio）MacBook13.3寸屏幕保...</span>
                                <span>X1</span>
                            </div>
                            <div>
                                <span>[赠品]圣迪威（Sendio）MacBook13.3寸清洁套...</span>
                                <span>X1</span>
                            </div>
                        </div>
                    </div>

                    <div class="item-main">
                        <div class="item-form clearfix">
                            <input type="checkbox" class="cell">
                            <div class="item-info cell">
                                <a class="item-img" href="">
                                    <img src="https://img13.360buyimg.com/n5/s54x54_jfs/t1/178646/26/32669/19117/63da392eFdc5e359b/e171b25b089ad579.jpg"
                                        alt="">
                                </a>
                                <div class="item-info-msg">
                                    <div class="item-info-name">
                                        <span>苹果（Apple）MD463FE/A MAC Thunderbolt雷电接口 至千兆以太网转</span>
                                    </div>
                                    <div class="item-info-ser">
                                        <img src="" alt="">
                                        <span>购买礼品包装</span>
                                    </div>
                                </div>

                            </div>
                            <div class="item-props cell">
                                <span>属性:</span>
                                <span>Thunderbolt至千兆...</span>
                            </div>
                            <div class="item-price cell"><span>248.00</span></div>
                            <div class="item-quantity cell">
                                <button>-</button>
                                <input type="text">
                                <button>+</button>
                            </div>
                            <div class="item-sum cell"><span>248.00</span></div>
                            <div class="item-operation cell">
                                <button>删除</button>
                                <button>移到我的关注</button>
                            </div>
                        </div>
                        <div class="item-gift">
                            <div>
                                <span>[赠品]圣迪威（Sendio）MacBook13.3寸屏幕保...</span>
                                <span>X1</span>
                            </div>
                            <div>
                                <span>[赠品]圣迪威（Sendio）MacBook13.3寸清洁套...</span>
                                <span>X1</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 商品结算栏 -->
        <div class="cart-tbody">
            <!-- 同一家店商品头部选择框 -->
            <div class="shop">
                <input type="checkbox">
                <span class="shop-text">品优购自营</span>
                <div class="shop-extra">
                    <span>运费:￥6.00</span>
                    <span>还差￥99.00元免运费</span>
                </div>
            </div>
            <!-- 同一家店商品栏目 -->
            <div class="item-list">
                <div class="item-set">
                    <div class="item-list-header">
                        <div class="list-header-change">换购</div>
                        <span>活动商品购满2888.00元，即可加价换购商品1件 ></span>
                        <div class="list-header-check">查看换购品</div>
                        <a href="">去凑单 ></a>
                    </div>
                    <div class="item-main">
                        <div class="item-form clearfix">
                            <input type="checkbox" class="cell">
                            <div class="item-info cell">
                                <a class="item-img" href="">
                                    <img src="https://img13.360buyimg.com/n5/s54x54_jfs/t1/178646/26/32669/19117/63da392eFdc5e359b/e171b25b089ad579.jpg"
                                        alt="">
                                </a>
                                <div class="item-info-msg">
                                    <div class="item-info-name">
                                        <span>苹果（Apple）MD463FE/A MAC Thunderbolt雷电接口 至千兆以太网转</span>
                                    </div>
                                    <div class="item-info-ser">
                                        <img src="" alt="">
                                        <span>购买礼品包装</span>
                                    </div>
                                </div>

                            </div>
                            <div class="item-props cell">
                                <span>属性:</span>
                                <span>Thunderbolt至千兆...</span>
                            </div>
                            <div class="item-price cell"><span>248.00</span></div>
                            <div class="item-quantity cell">
                                <button>-</button>
                                <input type="text">
                                <button>+</button>
                            </div>
                            <div class="item-sum cell"><span>248.00</span></div>
                            <div class="item-operation cell">
                                <button>删除</button>
                                <button>移到我的关注</button>
                            </div>
                        </div>
                        <div class="item-gift">
                            <div>
                                <span>[赠品]圣迪威（Sendio）MacBook13.3寸屏幕保...</span>
                                <span>X1</span>
                            </div>
                            <div>
                                <span>[赠品]圣迪威（Sendio）MacBook13.3寸清洁套...</span>
                                <span>X1</span>
                            </div>
                        </div>
                    </div>

                    <div class="item-main">
                        <div class="item-form clearfix">
                            <input type="checkbox" class="cell">
                            <div class="item-info cell">
                                <a class="item-img" href="">
                                    <img src="https://img13.360buyimg.com/n5/s54x54_jfs/t1/178646/26/32669/19117/63da392eFdc5e359b/e171b25b089ad579.jpg"
                                        alt="">
                                </a>
                                <div class="item-info-msg">
                                    <div class="item-info-name">
                                        <span>苹果（Apple）MD463FE/A MAC Thunderbolt雷电接口 至千兆以太网转</span>
                                    </div>
                                    <div class="item-info-ser">
                                        <img src="" alt="">
                                        <span>购买礼品包装</span>
                                    </div>
                                </div>

                            </div>
                            <div class="item-props cell">
                                <span>属性:</span>
                                <span>Thunderbolt至千兆...</span>
                            </div>
                            <div class="item-price cell"><span>248.00</span></div>
                            <div class="item-quantity cell">
                                <button>-</button>
                                <input type="text">
                                <button>+</button>
                            </div>
                            <div class="item-sum cell"><span>248.00</span></div>
                            <div class="item-operation cell">
                                <button>删除</button>
                                <button>移到我的关注</button>
                            </div>
                        </div>
                        <div class="item-gift">
                            <div>
                                <span>[赠品]圣迪威（Sendio）MacBook13.3寸屏幕保...</span>
                                <span>X1</span>
                            </div>
                            <div>
                                <span>[赠品]圣迪威（Sendio）MacBook13.3寸清洁套...</span>
                                <span>X1</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 商品结算栏 -->
        <div class="cart-tbody">
            <!-- 同一家店商品头部选择框 -->
            <div class="shop">
                <input type="checkbox">
                <span class="shop-text">品优购自营</span>
                <div class="shop-extra">
                    <span>运费:￥6.00</span>
                    <span>还差￥99.00元免运费</span>
                </div>
            </div>
            <!-- 同一家店商品栏目 -->
            <div class="item-list">
                <div class="item-set">
                    <div class="item-list-header">
                        <div class="list-header-change">换购</div>
                        <span>活动商品购满2888.00元，即可加价换购商品1件 ></span>
                        <div class="list-header-check">查看换购品</div>
                        <a href="">去凑单 ></a>
                    </div>
                    <div class="item-main">
                        <div class="item-form clearfix">
                            <input type="checkbox" class="cell">
                            <div class="item-info cell">
                                <a class="item-img" href="">
                                    <img src="https://img13.360buyimg.com/n5/s54x54_jfs/t1/178646/26/32669/19117/63da392eFdc5e359b/e171b25b089ad579.jpg"
                                        alt="">
                                </a>
                                <div class="item-info-msg">
                                    <div class="item-info-name">
                                        <span>苹果（Apple）MD463FE/A MAC Thunderbolt雷电接口 至千兆以太网转</span>
                                    </div>
                                    <div class="item-info-ser">
                                        <img src="" alt="">
                                        <span>购买礼品包装</span>
                                    </div>
                                </div>

                            </div>
                            <div class="item-props cell">
                                <span>属性:</span>
                                <span>Thunderbolt至千兆...</span>
                            </div>
                            <div class="item-price cell"><span>248.00</span></div>
                            <div class="item-quantity cell">
                                <button>-</button>
                                <input type="text">
                                <button>+</button>
                            </div>
                            <div class="item-sum cell"><span>248.00</span></div>
                            <div class="item-operation cell">
                                <button>删除</button>
                                <button>移到我的关注</button>
                            </div>
                        </div>
                        <div class="item-gift">
                            <div>
                                <span>[赠品]圣迪威（Sendio）MacBook13.3寸屏幕保...</span>
                                <span>X1</span>
                            </div>
                            <div>
                                <span>[赠品]圣迪威（Sendio）MacBook13.3寸清洁套...</span>
                                <span>X1</span>
                            </div>
                        </div>
                    </div>

                    <div class="item-main">
                        <div class="item-form clearfix">
                            <input type="checkbox" class="cell">
                            <div class="item-info cell">
                                <a class="item-img" href="">
                                    <img src="https://img13.360buyimg.com/n5/s54x54_jfs/t1/178646/26/32669/19117/63da392eFdc5e359b/e171b25b089ad579.jpg"
                                        alt="">
                                </a>
                                <div class="item-info-msg">
                                    <div class="item-info-name">
                                        <span>苹果（Apple）MD463FE/A MAC Thunderbolt雷电接口 至千兆以太网转</span>
                                    </div>
                                    <div class="item-info-ser">
                                        <img src="" alt="">
                                        <span>购买礼品包装</span>
                                    </div>
                                </div>

                            </div>
                            <div class="item-props cell">
                                <span>属性:</span>
                                <span>Thunderbolt至千兆...</span>
                            </div>
                            <div class="item-price cell"><span>248.00</span></div>
                            <div class="item-quantity cell">
                                <button>-</button>
                                <input type="text">
                                <button>+</button>
                            </div>
                            <div class="item-sum cell"><span>248.00</span></div>
                            <div class="item-operation cell">
                                <button>删除</button>
                                <button>移到我的关注</button>
                            </div>
                        </div>
                        <div class="item-gift">
                            <div>
                                <span>[赠品]圣迪威（Sendio）MacBook13.3寸屏幕保...</span>
                                <span>X1</span>
                            </div>
                            <div>
                                <span>[赠品]圣迪威（Sendio）MacBook13.3寸清洁套...</span>
                                <span>X1</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>


    <!-- 结算栏目 -->
    <div class="cart-floatbar">
        <div class="cart-toolbar w">
            <div class="cart-floatbar-l">
                <div class="cart-floatbar-checkbox"><input type="checkbox">全选</div>
                <div class="cart-floatbar-operation">
                    <button>删除选中的商品</button>
                    <button>移到我的关注</button>
                    <button>清除下柜商品</button>
                </div>

            </div>
            <div class="cart-floatbar-r">
                <div class="price-sum-btn"><button>结算</button></div>
                <div class="price-sum">
                    <div class="price-sum-amount">
                        <span>已选择1件商品</span>
                        <span>总价(不包含运费):</span>
                        <span class="price-show">￥40.26</span>
                    </div>
                    <div class="price-sum-reduce">
                        <span>已节省:-￥20.00</span>
                    </div>

                </div>


            </div>
        </div>
    </div>


    <!-- 删除重新加购栏目 -->
    <div class="deletebar w">
        <h4>已删除商品，您可以重新购买或加关注：</h4>
        <div class="deletebar-item">
            <div class="deletebar-item-name"><span>圣迪威（Sendio）MacBook13.3清洁套...</span></div>
            <div class="deletebar-item-price"><span>8488.00</span></div>
            <div class="deletebar-item-quantity"><span>1</span></div>
            <div class="deletebar-item-operation">
                <button>重新购买</button>
                <button>移到我的关注</button>
            </div>
        </div>
    </div>


    <!-- 底部喜欢栏目 -->
    <div class="tap-wrap w">
        <!-- 头部 -->
        <div class="tap-wrap-header">
            <button>猜你喜欢</button>
            <button>特惠换购</button>
        </div>
        <!-- 商品栏目 -->
        <div class="carousel">
            <ul>
                <li class="carousel-prev">
                    &gt; </li>
                <li class="carousel-item">
                    <a href="" class="carousel-item-img">
                        <img src="https://img13.360buyimg.com/n4/s160x160_jfs/t1/35013/24/20731/39025/63d4e1a9Fae58327d/be1362f48d7bc073.jpg"
                            alt="">
                    </a>

                    <div class="carousel-item-name">Apple MacBook Pro 13英寸 M2 芯片(8核中央处理器 10核图形处理器) 16G 512G 深空灰 笔记本Z16S
                    </div>
                    <div class="carousel-item-price">￥25.00</div>
                    <div class="carousel-item-cart">
                        <button>加入购物车</button>
                    </div>
                </li>
                <li class="carousel-item">
                    <a href="" class="carousel-item-img">
                        <img src="https://img13.360buyimg.com/n4/s160x160_jfs/t1/50222/16/17204/36336/63d50798Ff1bd3a9c/d4d2a1557491b0aa.jpg"
                            alt="">
                    </a>
                    <div class="carousel-item-name">
                        Apple MacBook Pro 14英寸 M2 Pro芯片(10核中央处理器 16核图形处理器）16G 512G银色 笔记本电脑
                        MPHH3CH/A
                    </div>
                    <div class="carousel-item-price">￥25.00</div>
                    <div class="carousel-item-cart">
                        <button>加入购物车</button>
                    </div>
                </li>
                <li class="carousel-item">
                    <a href="" class="carousel-item-img">
                        <img src="https://img20.360buyimg.com/n4/s160x160_jfs/t1/190633/13/32073/57737/63da5d04Fdbb76cbc/e4986c5bd6ddbb86.jpg"
                            alt="">
                    </a>
                    <div class="carousel-item-name">
                        三星 SAMSUNG Galaxy S23 Ultra 超视觉夜拍 稳劲性能 大屏S Pen书写 12GB+256GB 悠野绿 先行者
                    </div>
                    <div class="carousel-item-price">￥25.00</div>
                    <div class="carousel-item-cart">
                        <button>加入购物车</button>
                    </div>
                </li>
                <li class="carousel-item">
                    <a href="" class="carousel-item-img">
                        <img src="https://img12.360buyimg.com/n4/s160x160_jfs/t1/17490/23/20082/61350/6336ebddEe3164b8d/61eca9e5602242ec.jpg"
                            alt="">
                    </a>
                    <div class="carousel-item-name">
                        瓦尔基里(VALKYRIE）GL360 VK 一体式CPU水冷散热器 多平台扣具 支持LGA1700 ARGB光效 铝质冷头
                    </div>
                    <div class="carousel-item-price">￥25.00</div>
                    <div class="carousel-item-cart">
                        <button>加入购物车</button>
                    </div>
                </li>
                <li class="carousel-next">
                    > </li>
            </ul>
        </div>
    </div>


    <!-- Link -->
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
                            <dd><img src="image/code.jpg" alt=""></dd>
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
                    <span>地址：北京市昌平区建材城西路金燕龙办公楼一层 邮编：100096 电话：400-618-4000 传真：010-82935100 邮箱:
                        zhanghj+itcast.cn</span>
                </div>
                <div>
                    <span>京ICP备08001421号京公网安备110108007702</span>
                </div>
            </div>
        </div>
    </div>


    </div>
</template>

<script>
export default {
    name:"cart"
}
</script>

<style scoped lang="less">
    button {
    border: none;
    background: none;
}

.cell {
    float: left;
    margin-top: 20px;
}

.clearfix::before,
.clearfix::after {
    content: '';
    display: table;
    clear: both;
}

.header {
    .header-search {
        height: 80px;
        margin-top: 24px;

        .search {
            float: right;

            input {
                float: left;
                width: 454px;
                height: 32px;
                border: solid 2px #b1191a;
            }

            button {
                float: right;
                height: 36px;
                width: 80px;
                background-color: #b1191a;
                color: #fff;
            }
        }

    }
}

// 购物车主体
.cart-body {

    .cart-theader {
        h3 {
            font-size: 16px;
            font-weight: 500;
            color: #c81623;

            span {
                font-size: 14px;
                font-weight: 500;
            }
        }

        .cart-category {
            position: relative;
            height: 34px;
            margin-top: 24px;
            border: solid 1px #ddd;
            background-color: #f5f5f5;
            font-size: 12px;
            line-height: 34px;

            & li:nth-child(1) {
                position: absolute;
                left: 2px;

                input {
                    vertical-align: middle;
                    margin-bottom: 2px;
                }

                label {
                    margin-left: 12px;
                }
            }

            & li:nth-child(2) {
                position: absolute;
                left: 257px;
            }

            & li:nth-child(3) {
                position: absolute;
                left: 618px;
            }

            & li:nth-child(4) {
                position: absolute;
                left: 786px;
            }

            & li:nth-child(5) {
                position: absolute;
                left: 924px;
            }

            & li:nth-child(6) {
                position: absolute;
                left: 1090px;
            }
        }
    }

    .cart-tbody {
        margin-top: 20px;

        .shop {
            height: 24px;
            border-bottom: solid 2px #aaa;
            font-size: 14px;

            input {
                margin-left: 2px;
            }

            .shop-text {
                display: inline-block;
                padding: 1px 3px;
                background-color: #c81623;
                color: white;
            }

            .shop-extra {
                float: right;

                & span:last-child {
                    color: #c81623;
                }
            }
        }

        .item-list {
            .item-set {
                .item-list-header {
                    margin: 10px 0 21px 0;
                    font-size: 12px;

                    .list-header-change {
                        display: inline-block;
                        height: 18px;
                        width: 44px;
                        margin-left: 5px;
                        border: solid 1px #c81623;
                        color: #c81623;
                        line-height: 18px;
                        text-align: center;
                    }

                    .list-header-check {
                        display: inline-block;
                        width: 70px;
                        height: 20px;
                        margin-left: 20px;
                        background-color: #c81623;
                        color: #eee;
                        line-height: 20px;
                        text-align: center;
                    }

                    span {
                        margin-left: 20px;
                    }
                }

                .item-main {
                    border: solid 1px #eee;
                    padding-bottom: 10px;
                    margin-top: -1px;

                    .item-form {
                        padding-bottom: 10px;

                        font-size: 12px;

                        input {
                            margin-left: 2px;
                        }

                        .item-info {
                            margin-left: 10px;

                            .item-img {
                                width: 82px;
                                height: 82px;
                                float: left;
                                border: solid 1px #eee;

                                img {
                                    width: 100%;
                                    height: 100%;
                                }
                            }

                            .item-info-msg {
                                width: 218px;
                                margin-left: 10px;
                                float: left;

                                .item-info-name {
                                    float: left;
                                }

                                .item-info-ser {
                                    float: left;
                                }
                            }
                        }

                        .item-props {
                            width: 158px;
                            margin-left: 24px;
                        }

                        .item-price {
                            margin-left: 102px;
                            font-size: 14px;
                        }

                        .item-quantity {
                            width: 98px;
                            margin-left: 86px;

                            button {
                                float: left;
                                height: 28px;
                                width: 28px;
                                background: none;
                                border: solid 1px #eee;
                            }

                            input {
                                float: left;
                                width: 40px;
                                height: 26px;
                                border: none;
                                border-top: solid 1px #eee;
                                border-bottom: solid 1px #eee;
                                text-align: center;
                            }
                        }

                        .item-sum {
                            margin-left: 86px;
                            font-size: 14px;
                            font-weight: 600;
                        }

                        .item-operation {
                            margin-left: 115px;

                            button {
                                display: block;
                            }
                        }

                    }

                    .item-gift {
                        margin-left: 25px;
                        font-size: 12px;
                        color: #999999;

                        div:nth-child(n+2) {
                            margin-top: 5px;
                        }
                    }
                }

            }

        }

    }
}

// 结算浮动块
.cart-floatbar {
    width: 100%;
    height: 55px;
    position: fixed;
    bottom: 0;
    z-index: 99;
    font-size: 12px;
    background-color: #fff;
    box-shadow: 0 1px 6px #eee;

    .cart-toolbar {
        .cart-floatbar-l {
            float: left;
            line-height: 55px;

            .cart-floatbar-checkbox {
                float: left;
                margin-left: 4px;

                input {
                    margin-right: 10px;
                    vertical-align: text-bottom;
                }
            }



            .cart-floatbar-operation {
                float: left;
                margin-left: 8px;

                button {
                    margin-left: 10px;
                }
            }
        }

        .cart-floatbar-r {
            float: right;

            .price-sum-btn {
                float: right;

                button {
                    width: 110px;
                    height: 52px;
                    background-color: #e60012;
                    font-size: 16px;
                    color: #fff;
                }
            }

            .price-sum {
                float: right;
                width: 324px;
                margin: 10px 10px 0 0;

                .price-sum-amount {
                    float: right;

                    .price-show {
                        font-size: 16px;
                        color: #e60012;
                    }
                }

                .price-sum-reduce {
                    float: right;
                }

            }
        }
    }
}

// 商品删除恢复
.deletebar {
    margin-top: 20px;

    h4 {
        font-size: 12px;
        font-weight: 500;
    }

    .deletebar-item {
        height: 32px;
        background-color: #fffdee;
        font-size: 12px;
        margin-top: 22px;
        line-height: 32px;
        color: #999999;

        .deletebar-item-name {
            float: left;
        }

        .deletebar-item-price {
            float: left;
            margin-left: 346px;
            font-size: 14px;
        }

        .deletebar-item-quantity {
            float: left;
            margin-left: 158px;
            font-size: 14px;
        }

        .deletebar-item-operation {
            float: right;

            button {
                margin-right: 20px;
                color: #999999;
            }
        }
    }
}

// 底部轮播图
.tap-wrap {

    .tap-wrap-header {
        height: 40px;
        margin-top: 20px;
        border: solid 1px #ddd;
        background-color: #f1f1f1;

        button {
            width: 86px;
            height: 100%;
        }
    }

    .carousel {
        ul {
            margin-top: 20px;

            .carousel-prev {
                float: left;
                width: 50px;
                height: 100px;
                margin: 70px 50px 0 0;
                background-color: #ddd;
                font: normal 400 40px/100px "Microsoft yahei";
                color: #999999;
                text-align: center;
            }

            .carousel-item {
                float: left;
                width: 245px;
                height: 305px;
                text-align: center;
                border: dashed 1px #999999;
                margin-left: -1px;

                .carousel-item-img {
                    height: 188px;
                    width: 100%;
                }

                .carousel-item-name {
                    width: 202px;
                    height: 36px;
                    margin: 5px auto 0;
                    font-size: 14px;
                    text-align: left;
                }

                .carousel-item-price {
                    margin-top: 10px;
                    color: #c81623;
                }

                .carousel-item-cart {
                    height: 28px;
                    width: 123px;
                    margin: 14px auto 0;
                    border: solid 1px #999999;
                    border-radius: 2px;

                }

            }

            .carousel-next {
                float: right;
                width: 50px;
                height: 100px;
                margin-top: 70px;
                background-color: #ddd;
                font: normal 400 40px/100px "Microsoft yahei";
                color: #999999;
                text-align: center;
            }

        }

    }
}
</style>