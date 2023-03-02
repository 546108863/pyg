<template>
  <div class="tap-wrap w">
    <!-- 头部 -->
    <div class="tap-wrap-header">
      <button>猜你喜欢</button>
      <button>特惠换购</button>
    </div>
    <!-- 商品栏目 -->
    <div class="carousel">
      <ul class="clearfix">
        <li class="carousel-prev">&lt;</li>
        <li class="carousel-item">
          <a href="" class="carousel-item-img">
            <img
              src="https://img13.360buyimg.com/n4/s160x160_jfs/t1/35013/24/20731/39025/63d4e1a9Fae58327d/be1362f48d7bc073.jpg"
              alt=""
            />
          </a>

          <div class="carousel-item-name">
            Apple MacBook Pro 13英寸 M2 芯片(8核中央处理器 10核图形处理器) 16G
            512G 深空灰 笔记本Z16S
          </div>
          <div class="carousel-item-price">￥25.00</div>
          <div class="carousel-item-cart">
            <button>加入购物车</button>
          </div>
        </li>
        <li class="carousel-item">
          <a href="" class="carousel-item-img">
            <img
              src="https://img13.360buyimg.com/n4/s160x160_jfs/t1/50222/16/17204/36336/63d50798Ff1bd3a9c/d4d2a1557491b0aa.jpg"
              alt=""
            />
          </a>
          <div class="carousel-item-name">
            Apple MacBook Pro 14英寸 M2 Pro芯片(10核中央处理器
            16核图形处理器）16G 512G银色 笔记本电脑 MPHH3CH/A
          </div>
          <div class="carousel-item-price">￥25.00</div>
          <div class="carousel-item-cart">
            <button>加入购物车</button>
          </div>
        </li>
        <li class="carousel-item">
          <a href="" class="carousel-item-img">
            <img
              src="https://img20.360buyimg.com/n4/s160x160_jfs/t1/190633/13/32073/57737/63da5d04Fdbb76cbc/e4986c5bd6ddbb86.jpg"
              alt=""
            />
          </a>
          <div class="carousel-item-name">
            三星 SAMSUNG Galaxy S23 Ultra 超视觉夜拍 稳劲性能 大屏S Pen书写
            12GB+256GB 悠野绿 先行者
          </div>
          <div class="carousel-item-price">￥25.00</div>
          <div class="carousel-item-cart">
            <button>加入购物车</button>
          </div>
        </li>
        <li class="carousel-item">
          <a href="" class="carousel-item-img">
            <img
              src="https://img12.360buyimg.com/n4/s160x160_jfs/t1/17490/23/20082/61350/6336ebddEe3164b8d/61eca9e5602242ec.jpg"
              alt=""
            />
          </a>
          <div class="carousel-item-name">
            瓦尔基里(VALKYRIE）GL360 VK 一体式CPU水冷散热器 多平台扣具
            支持LGA1700 ARGB光效 铝质冷头
          </div>
          <div class="carousel-item-price">￥25.00</div>
          <div class="carousel-item-cart">
            <button>加入购物车</button>
          </div>
        </li>
        <li class="carousel-next">&gt;</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "TapWrap",
};
</script>

<style lang="less" scoped>
.tap-wrap {
  .tap-wrap-header {
    height: 40px;
    margin-top: 20px;
    border: solid 1px #ddd;
    background-color: #f1f1f1;

    button {
      width: 86px;
      height: 100%;
    }
  }

  .carousel {
    ul {
      margin-top: 20px;

      .carousel-prev {
        float: left;
        width: 50px;
        height: 100px;
        margin: 70px 50px 0 0;
        background-color: #ddd;
        font: normal 400 40px/100px "Microsoft yahei";
        color: #999999;
        text-align: center;
      }

      .carousel-item {
        float: left;
        width: 245px;
        height: 305px;
        text-align: center;
        border: dashed 1px #999999;
        margin-left: -1px;

        .carousel-item-img {
          height: 188px;
          width: 100%;
          img {
            margin-top: 10px;
          }
        }

        .carousel-item-name {
          width: 202px;
          height: 36px;
          margin: 5px auto 0;
          font-size: 14px;
          text-align: left;
          overflow: hidden;
        }

        .carousel-item-price {
          margin-top: 10px;
          color: #c81623;
        }

        .carousel-item-cart {
          height: 28px;
          width: 123px;
          margin: 14px auto 0;
          border: solid 1px #999999;
          border-radius: 2px;
        }
      }

      .carousel-next {
        float: right;
        width: 50px;
        height: 100px;
        margin-top: 70px;
        background-color: #ddd;
        font: normal 400 40px/100px "Microsoft yahei";
        color: #999999;
        text-align: center;
      }
    }
  }
}
</style>
