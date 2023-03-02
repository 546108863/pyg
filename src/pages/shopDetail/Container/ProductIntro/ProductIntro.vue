<template>
  <div class="product_intro">
    <ItemInfoWrap></ItemInfoWrap>
    <Zoom></Zoom>
  </div>
</template>

<script>
import ItemInfoWrap from "./ItemInfoWrap/ItemInfoWrap.vue";
import Zoom from "./Zoom/Zoom.vue";

export default {
  name: "ProductIntro",
  components: {
    ItemInfoWrap,
    Zoom,
  },
};
</script>

<style></style>
