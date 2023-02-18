<template>
  <div>
    <!-- 头部 -->
    <div class="header">
      <!-- 头部最上边导航栏 -->
      <HeaderNav></HeaderNav>
      <!-- 搜索框、左边logo -->
      <div class="header-search w">
        <router-link to="/"
          ><img src="../../assets/images/logo.png" alt="logo"
        /></router-link>

        <div class="search">
          <input type="text" />
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
            <input
              type="checkbox"
              id="all"
              @change="allChecked"
              :checked="isChecked"
            /><label for="all">全选</label>
          </li>
          <li>商品</li>
          <li>单价(元)</li>
          <li>数量</li>
          <li>小计(元)</li>
          <li>操作</li>
        </ul>
      </div>
      <!-- 商品结算栏 -->
      <div class="cart-tbody" v-if="shopCartInfo.shopCartList.length">
        <!-- 同一家店商品头部选择框 -->
        <div class="shop">
          <input type="checkbox" :checked="isChecked" />
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
            <div
              class="item-main"
              v-for="(item, index) in shopCartInfo.shopCartList"
              :key="index"
            >
              <div class="item-form clearfix">
                <input
                  type="checkbox"
                  class="cell"
                  :checked="item.cartIsChecked"
                  @change="changeChecked($event, item)"
                />
                <div class="item-info cell">
                  <a class="item-img" href="">
                    <img
                      src="https://img13.360buyimg.com/n5/s54x54_jfs/t1/178646/26/32669/19117/63da392eFdc5e359b/e171b25b089ad579.jpg"
                      alt=""
                    />
                  </a>
                  <div class="item-info-msg">
                    <div class="item-info-name">
                      <span>{{ shopCartInfo.skuName }}</span>
                    </div>
                    <div class="item-info-ser">
                      <img src="" alt="" />
                      <span>购买礼品包装</span>
                    </div>
                  </div>
                </div>
                <div class="item-props cell">
                  <div v-for="(item, index) in item.skuProperty" :key="index">
                    <span>{{ item }}</span>
                  </div>
                </div>
                <div class="item-price cell">
                  <span>￥{{ item.skuPrice }}</span>
                </div>
                <div class="item-quantity cell">
                  <button @click="skuNumChange('reduceSkuNum', item, $event)">
                    -
                  </button>
                  <input
                    type="text"
                    autocomplete="off"
                    :value="item.skuNum"
                    @change="skuNumChange('changeSkuNum', item, $event, index)"
                  />
                  <button @click="skuNumChange('addSkuNum', item, $event)">
                    +
                  </button>
                </div>
                <div class="item-sum cell">
                  <span>￥{{ item.skuPrice * item.skuNum }}</span>
                </div>
                <div class="item-operation cell">
                  <button @click="deleteItem(item, index, $event)">删除</button>
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
          <div class="cart-floatbar-checkbox">
            <input
              type="checkbox"
              id="floatbar-all"
              @change="allChecked"
              :checked="isChecked"
            /><label for="floatbar-all">全选</label>
          </div>
          <div class="cart-floatbar-operation">
            <button @click="deleteAllChecked">删除选中的商品</button>
            <button>移到我的关注</button>
            <button>清除下柜商品</button>
          </div>
        </div>
        <div class="cart-floatbar-r">
          <div class="price-sum-btn"><button>结算</button></div>
          <div class="price-sum">
            <div class="price-sum-amount">
              <span>已选择{{ itemCheckedNum }}件商品</span>
              <span>总价(不包含运费):</span>
              <span class="price-show">￥{{ sumPrice }}</span>
            </div>
            <div class="price-sum-reduce">
              <div>已节省:<span>-￥0.00</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 删除重新加购栏目 -->
    <div class="deletebar w">
      <h4>已删除商品，您可以重新购买或加关注：</h4>
      <div class="deletebar-item">
        <div class="deletebar-item-name">
          <span>圣迪威（Sendio）MacBook13.3清洁套...</span>
        </div>
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
        <ul class="clearfix">
          <li class="carousel-prev">&lt;</li>
          <li class="carousel-item">
            <a href="" class="carousel-item-img">
              <img
                src="https://img13.360buyimg.com/n4/s160x160_jfs/t1/35013/24/20731/39025/63d4e1a9Fae58327d/be1362f48d7bc073.jpg"
                alt=""
              />
            </a>

            <div class="carousel-item-name">
              Apple MacBook Pro 13英寸 M2 芯片(8核中央处理器 10核图形处理器) 16G
              512G 深空灰 笔记本Z16S
            </div>
            <div class="carousel-item-price">￥25.00</div>
            <div class="carousel-item-cart">
              <button>加入购物车</button>
            </div>
          </li>
          <li class="carousel-item">
            <a href="" class="carousel-item-img">
              <img
                src="https://img13.360buyimg.com/n4/s160x160_jfs/t1/50222/16/17204/36336/63d50798Ff1bd3a9c/d4d2a1557491b0aa.jpg"
                alt=""
              />
            </a>
            <div class="carousel-item-name">
              Apple MacBook Pro 14英寸 M2 Pro芯片(10核中央处理器
              16核图形处理器）16G 512G银色 笔记本电脑 MPHH3CH/A
            </div>
            <div class="carousel-item-price">￥25.00</div>
            <div class="carousel-item-cart">
              <button>加入购物车</button>
            </div>
          </li>
          <li class="carousel-item">
            <a href="" class="carousel-item-img">
              <img
                src="https://img20.360buyimg.com/n4/s160x160_jfs/t1/190633/13/32073/57737/63da5d04Fdbb76cbc/e4986c5bd6ddbb86.jpg"
                alt=""
              />
            </a>
            <div class="carousel-item-name">
              三星 SAMSUNG Galaxy S23 Ultra 超视觉夜拍 稳劲性能 大屏S Pen书写
              12GB+256GB 悠野绿 先行者
            </div>
            <div class="carousel-item-price">￥25.00</div>
            <div class="carousel-item-cart">
              <button>加入购物车</button>
            </div>
          </li>
          <li class="carousel-item">
            <a href="" class="carousel-item-img">
              <img
                src="https://img12.360buyimg.com/n4/s160x160_jfs/t1/17490/23/20082/61350/6336ebddEe3164b8d/61eca9e5602242ec.jpg"
                alt=""
              />
            </a>
            <div class="carousel-item-name">
              瓦尔基里(VALKYRIE）GL360 VK 一体式CPU水冷散热器 多平台扣具
              支持LGA1700 ARGB光效 铝质冷头
            </div>
            <div class="carousel-item-price">￥25.00</div>
            <div class="carousel-item-cart">
              <button>加入购物车</button>
            </div>
          </li>
          <li class="carousel-next">&gt;</li>
        </ul>
      </div>
    </div>

    <!-- Link -->
    <Bottom />
  </div>
</template>

<script>
import { mapState } from "vuex";
import HeaderNav from "@/components/header/HeaderNav/HeaderNav.vue";
import Bottom from "@/components/bottom.vue";

export default {
  name: "cart",
  components: {
    HeaderNav,
    Bottom,
  },
  data() {
    return {
      skuNumChangeFlag: true,
      isChecked: false,
    };
  },
  methods: {
    skuNumChange(type, sku, e, index) {
      if (this.skuNumChangeFlag) {
        this.skuNumChangeFlag = false;
        let num = e.target.value;
        switch (type) {
          case "addSkuNum":
            sku.skuNum++;
            break;

          case "reduceSkuNum":
            if (sku.skuNum <= 1) {
              if (confirm("是否删除该商品")) {
                this.deleteItem(sku, index);
              }
            } else {
              sku.skuNum--;
            }
            break;

          case "changeSkuNum":
            if (!isNaN(num) && num >= 0 && num != "") {
              e.target.value = parseInt(e.target.value);
              sku.skuNum = parseInt(num);
            } else {
              e.target.value = sku.skuNum;
            }
            break;
          default:
            break;
        }
        this.$store.dispatch("cart/changeSkuNum");
      }
      setTimeout(() => {
        this.skuNumChangeFlag = true;
      }, 600);
    },
    deleteItem(skuInfo, index) {
      this.$store.dispatch("cart/deleteItem", index);
    },
    changeChecked(e, item) {
      let checked = e.target.checked ? 1 : 0;
      item.cartIsChecked = checked;
      this.$store.dispatch("cart/changeChecked");
      this.watchChecked();
    },
    deleteAllChecked() {
      this.$store.dispatch("cart/deleteAllChecked");
    },
    allChecked(e) {
      this.isChecked = !this.isChecked;
      this.$store.dispatch("cart/allChecked", this.isChecked);
    },
    watchChecked() {
      this.isChecked = true;
      this.shopCartInfo.shopCartList.forEach((item) => {
        if (!item.cartIsChecked) {
          this.isChecked = false;
        }
      });
    },
  },
  computed: {
    ...mapState("cart", ["shopCartInfo"]),
    sumPrice() {
      let price = 0;
      this.shopCartInfo.shopCartList.forEach((item) => {
        if (item.cartIsChecked) {
          price += item.skuNum * item.skuPrice;
        }
      });
      return price;
    },
    itemCheckedNum() {
      let itemNum = 0;
      this.shopCartInfo.shopCartList.forEach((item) => {
        if (item.cartIsChecked) {
          itemNum += item.skuNum;
        }
      });
      return itemNum;
    },
  },
  mounted() {
    this.$store.dispatch("cart/getShopCartInfo");
    this.watchChecked();
  },
};
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
// 头部
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
        left: 937px;
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
        margin-left: 10px;
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

            input[type="checkbox"] {
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
              margin-left: 44px;
              div {
                margin-bottom: 5px;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
              }
            }

            .item-price {
              margin-left: 82px;
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
              .ban {
                cursor: not-allowed;
              }
            }

            .item-sum {
              width: 100px;
              margin-left: 86px;
              font-size: 14px;
              font-weight: 600;
            }

            .item-operation {
              margin-left: 60px;

              button {
                display: block;
              }
            }
          }

          .item-gift {
            margin-left: 25px;
            font-size: 12px;
            color: #999999;

            div:nth-child(n + 2) {
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
        margin: 10px 10px 0 0;

        .price-sum-amount {
          .price-show {
            font-size: 16px;
            color: #e60012;
          }
        }

        .price-sum-reduce {
          float: right;
          span {
            margin-left: 10px;
          }
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
          img {
            margin-top: 10px;
          }
        }

        .carousel-item-name {
          width: 202px;
          height: 36px;
          margin: 5px auto 0;
          font-size: 14px;
          text-align: left;
          overflow: hidden;
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
