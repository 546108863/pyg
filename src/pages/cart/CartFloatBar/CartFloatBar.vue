<template>
  <div class="cart-floatbar">
    <div class="cart-toolbar w">
      <div class="cart-floatbar-l">
        <div class="cart-floatbar-checkbox">
          <input
            type="checkbox"
            id="floatbar-all"
            @change="allChecked"
            :checked="shopCartInfo.isAllChecked"
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
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "CartFloatBar",
  data() {
    return {
    }
  },
  methods: {
    allChecked(e) {
      this.$store.dispatch("cart/allChecked", e.target.checked);
    },    
    deleteAllChecked() {
      this.$store.dispatch("cart/deleteAllChecked");
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
};
</script>

<style lang="less" scoped>
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
</style>
