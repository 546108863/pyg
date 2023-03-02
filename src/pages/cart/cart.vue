<template>
  <div>
    <!-- 头部 -->
    <CartHeader></CartHeader>

    <!-- 主体内容 -->
    <CartBody></CartBody>

    <!-- 结算栏目 -->
    <CartFloatBar></CartFloatBar>

    <!-- 删除重新加购栏目 -->
    <DeleteBar></DeleteBar>

    <!-- 底部喜欢栏目 -->
    <TapWrap></TapWrap>

    <!-- Link -->
    <Bottom />
  </div>
</template>

<script>
import { mapState } from "vuex";
import CartHeader from "./CartHeader/CartHeader.vue";
import CartBody from "./CartBody/CartBody.vue";
import DeleteBar from "./DeleteBar/DeleteBar.vue";
import TapWrap from "./TapWrap/TapWrap.vue";
import CartFloatBar from "./CartFloatBar/CartFloatBar.vue";
import Bottom from "@/components/Bottom.vue";

export default {
  name: "cart",
  components: {
    CartHeader,
    CartBody,
    DeleteBar,
    TapWrap,
    CartFloatBar,
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
      let isAllChecked = true;
      this.shopCartInfo.shopCartList.forEach((item) => {
        if (!item.cartIsChecked) {
          isAllChecked = false;
        }
      });
      if(this.shopCartInfo.isAllChecked != isAllChecked) {
        this.$store.commit('cart/CHANGEALLCHECKED',isAllChecked);
      }
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

<style lang="less">
button {
  border: none;
  background: none;
}

.cell {
  float: left;
  margin-top: 20px;
}
</style>
