<template>
  <div class="cart-tbody" v-if="shopCartInfo.shopCartList.length">
    <!-- 同一家店商品头部选择框 -->
    <div class="shop">
      <input type="checkbox" :checked="shopCartInfo.isAllChecked" @click="allChecked"/>
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
        <CartItem v-for="(item, index) in shopCartInfo.shopCartList" :key="index" :item = "item"></CartItem>
      </div>
    </div>
  </div>
</template>

<script>
import CartItem from "./CartItem/CartItem.vue";
import { mapState } from 'vuex';

export default {
  name: "CartBodyMain",
  components:{
    CartItem
  },
  data() {
    return {
    }
  },
  computed:{
    ...mapState('cart',['shopCartInfo'])
  },
  methods:{
    allChecked(e) {
      this.$store.dispatch("cart/allChecked", e.target.checked);
    },    
  }
};
</script>

<style lang="less" scoped>
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
      }
    }
  }

</style>
