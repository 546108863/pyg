<template>
  <div class="deletebar w">
    <h4>已删除商品，您可以重新购买或加关注：</h4>
    <div class="deletebar-item">
      <div class="deletebar-item-name">
        <span>圣迪威（Sendio）MacBook13.3清洁套...</span>
      </div>
      <div class="deletebar-item-price"><span>8488.00</span></div>
      <div class="deletebar-item-quantity"><span>1</span></div>
      <div class="deletebar-item-operation">
        <button>重新购买</button>
        <button>移到我的关注</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DeleteBar",
};
</script>

<style lang="less" scoped>
.deletebar {
  margin-top: 20px;

  h4 {
    font-size: 12px;
    font-weight: 500;
  }

  .deletebar-item {
    height: 32px;
    background-color: #fffdee;
    font-size: 12px;
    margin-top: 22px;
    line-height: 32px;
    color: #999999;

    .deletebar-item-name {
      float: left;
    }

    .deletebar-item-price {
      float: left;
      margin-left: 346px;
      font-size: 14px;
    }

    .deletebar-item-quantity {
      float: left;
      margin-left: 158px;
      font-size: 14px;
    }

    .deletebar-item-operation {
      float: right;

      button {
        margin-right: 20px;
        color: #999999;
      }
    }
  }
}
</style>
