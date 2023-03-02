<template>
  <div class="cart-theader">
    <h3>
      全部商品 <span>{{ shopCartInfo.shopCartList.length }}</span>
    </h3>
    <ul class="cart-category">
      <li>
        <input
          type="checkbox"
          id="all"
          @change="allChecked"
          :checked="shopCartInfo.isAllChecked"
        /><label for="all">全选</label>
      </li>
      <li>商品</li>
      <li>单价(元)</li>
      <li>数量</li>
      <li>小计(元)</li>
      <li>操作</li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "CartBodyHeader",
  data() {
    return {
    }
  },
  methods: {
    allChecked(e) {
      this.$store.dispatch("cart/allChecked", e.target.checked);
    },
  },
  computed:{
    ...mapState("cart", ["shopCartInfo"]),
  }
};
</script>

<style lang="less" scoped>
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
</style>
