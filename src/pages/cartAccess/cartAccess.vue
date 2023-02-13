<template>
  <div class="main">
    <div class="success-wrap">
      <div class="w clearfix container">
        <div class="success-text">商品已成功加入购物车！</div>
        <a class="item-img">
          <img src="" alt="" />
        </a>
        <div class="item-info">
          <div class="item-name">
            <a href=""
              >ROG魔霸新锐 15.6英寸2.5K 165Hz游戏本笔记本电脑(R9-6900HX 液金导热
              16G 512G RTX3060 140W)</a
            >
          </div>
          <span class="item-num">数量：<i>1</i></span>
        </div>
        <a href="" class="btn-back btn">查看商品详情</a>
        <a href="" class="btn-addtocart btn">去购物车结算</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cartAccess",
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
          font-size: 14px;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
        .item-num {
          float: left;
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
