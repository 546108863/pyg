<template>
  <div class="header">
    <!-- 头部最上边导航栏 -->
    <HeaderNav></HeaderNav>
    <!-- 搜索框、左边logo -->
    <div class="header-search w">
      <router-link to="/"
        ><img src="@/assets/images/logo.png" alt="logo"
      /></router-link>

      <div class="search">
        <input type="text" />
        <button>搜索</button>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderNav from "@/components/Header/HeaderNav/HeaderNav.vue";

export default {
  name: "CartHeader",
  components:{
    HeaderNav
  }
};
</script>

<style lang="less" scoped>
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
</style>
