<template>
  <div class="cart-body w">
    <!-- 商品栏目头部 -->
    <CartBodyHeader></CartBodyHeader>
    <!-- 商品结算栏 -->
    <CartBodyMain></CartBodyMain>
  </div>
</template>

<script>
import CartBodyHeader from './CartBodyHeader/CartBodyHeader.vue'
import CartBodyMain from './CartBodyMain/CartBodyMain.vue'

export default {
  name: "CartBody",
  components:{
    CartBodyHeader,
    CartBodyMain
  }
};
</script>

<style>
</style>
