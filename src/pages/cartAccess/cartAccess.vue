<template>
  <div>
    <Header></Header>
    <div class="main">
      <div class="success-wrap">
        <div class="w clearfix container">
          <div class="success-text">商品已成功加入购物车！</div>
          <router-link
            :to="`/shopdetail?itemId=${itemInfo.itemId}`"
            class="item-img"
          >
            <img :src="itemInfo.itemImgUrl" alt="" />
          </router-link>
          <div class="item-info">
            <div class="item-name">
              <router-link :to="`/shopdetail?itemId=${itemInfo.itemId}`">{{
                itemInfo.itemName
              }}</router-link>
            </div>
            <span class="item-property"
              >颜色: {{ itemInfo.itemProperty.pColor }}</span
            >
            <span v-if="itemInfo.itemProperty.pSize" class="item-property"
              >尺码: {{ itemInfo.itemProperty.pSize }}</span
            >
            <span class="item-property">/ 数量：{{ $route.query.skuNum }}</span>
          </div>
          <router-link
            :to="`/shopdetail?itemId=${itemInfo.itemId}`"
            class="btn-back btn"
            >查看商品详情</router-link
          >
          <router-link to="/cart" class="btn-addtocart btn"
            >去购物车结算</router-link
          >
        </div>
      </div>
    </div>
    <Bottom></Bottom>
  </div>
</template>

<script>
import Bottom from "@/components/Bottom.vue";
import Header from "@/components/Header/Header.vue";

export default {
  name: "cartAccess",
  components: {
    Bottom,
    Header,
  },
  data() {
    return {};
  },
  computed: {
    itemInfo() {
      return JSON.parse(sessionStorage.getItem("itemInfo"));
    },
  },
  mounted() {
  },
};
</script>

<style lang="less" scoped>
.main {
  font-size: 12px;

  .success-wrap {
    height: 145px;
    background-color: #f5f5f5;
    .container {
      position: relative;
      .success-text {
        margin: 20px 0;
        font-size: 18px;
        color: #71b427;
      }
      .item-img {
        float: left;
        display: block;
        border: solid 1px #dfdede;
        img {
          height: 60px;
          width: 60px;
          vertical-align: bottom;
        }
      }
      .item-info {
        float: left;
        width: 520px;
        margin-left: 15px;
        .item-name {
          float: left;
          width: 100%;
          margin: 5px 0;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          a {
            font-size: 14px;
          }
        }
        .item-property {
          float: left;
          max-width: 130px;
          margin-right: 10px;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          color: #aaa;
        }
      }
      .btn {
        position: absolute;
        bottom: 0;
        padding: 0 30px;
        font-size: 16px;
        line-height: 40px;
      }
      .btn-back {
        right: 286px;
        color: #e2231a;
        background-color: #fff;
      }
      .btn-addtocart {
        right: 120px;
        color: #fff;
        background-color: #e2231a;
      }
    }
  }
}
</style>
