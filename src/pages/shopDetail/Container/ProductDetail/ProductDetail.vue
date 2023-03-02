<template>
  <div class="product_detail clearfix">
    <Aside></Aside>
    <DetailContainer></DetailContainer>
  </div>
</template>

<script>
import Aside from "./Aside/Aside.vue";
import DetailContainer from "./DetailContainer/DetailContainer.vue";

export default {
  name: "ProductDetail",
  components: {
    Aside,
    DetailContainer,
  },
};
</script>

<style scoped>
.product_detail {
  margin-bottom: 50px;
}
</style>
