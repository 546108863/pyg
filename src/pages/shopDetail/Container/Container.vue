<template>
  <div class="de_container w">
    <CrumbWrap></CrumbWrap>
    <ProductIntro></ProductIntro>
    <ProductDetail></ProductDetail>
  </div>
</template>

<script>
import CrumbWrap from "./CrumbWrap/CrumbWrap.vue";
import ProductIntro from "./ProductIntro/ProductIntro.vue";
import ProductDetail from "./ProductDetail/ProductDetail.vue";

export default {
  components: {
    CrumbWrap,
    ProductIntro,
    ProductDetail,
  },
};
</script>

<style>
.de_container {
  margin-top: 20px;
}
</style>
