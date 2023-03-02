<template>
  <div class="aside">
    <div class="tab_list">
      <ul>
        <li class="first_tab">相关分类</li>
        <li class="second_tab current">推荐品牌</li>
      </ul>
    </div>
    <div class="tab_con">
      <ul>
        <li>
          <img src="../../.../../../images/upload/aside_img.jpg" alt="" />
          <h5>华为 HUAWEI P20 Pro 全面屏徕卡</h5>
          <div class="aside_price">¥19</div>
          <a href="#" class="as_addcar">加入购物车</a>
        </li>
        <li>
          <img src="../../../images/upload/aside_img.jpg" alt="" />
          <h5>华为 HUAWEI P20 Pro 全面屏徕卡</h5>
          <div class="aside_price">¥19</div>
          <a href="#" class="as_addcar">加入购物车</a>
        </li>
        <li>
          <img src="../../../images/upload/aside_img.jpg" alt="" />
          <h5>华为 HUAWEI P20 Pro 全面屏徕卡</h5>
          <div class="aside_price">¥19</div>
          <a href="#" class="as_addcar">加入购物车</a>
        </li>
        <li>
          <img src="../../../images/upload/aside_img.jpg" alt="" />
          <h5>华为 HUAWEI P20 Pro 全面屏徕卡</h5>
          <div class="aside_price">¥19</div>
          <a href="#" class="as_addcar">加入购物车</a>
        </li>
        <li>
          <img src="../../../images/upload/aside_img.jpg" alt="" />
          <h5>华为 HUAWEI P20 Pro 全面屏徕卡</h5>
          <div class="aside_price">¥19</div>
          <a href="#" class="as_addcar">加入购物车</a>
        </li>
        <li>
          <img src="../../../images/upload/aside_img.jpg" alt="" />
          <h5>华为 HUAWEI P20 Pro 全面屏徕卡</h5>
          <div class="aside_price">¥19</div>
          <a href="#" class="as_addcar">加入购物车</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.aside {
  float: left;
  width: 208px;
  border: 1px solid #ccc;
}
.tab_list {
  overflow: hidden;
  height: 34px;
}
/*把背景颜色 底边框都给 li*/
.tab_list li {
  float: left;
  background-color: #f1f1f1;
  border-bottom: 1px solid #ccc;
  height: 33px;
  text-align: center;
  line-height: 33px;
}
/*鼠标单击 li 变化样式   背景变白色 去掉下边框 文字变颜色*/
.tab_list .current {
  background-color: #fff;
  border-bottom: 0;
  color: red;
}
.first_tab {
  width: 104px;
}
.second_tab {
  width: 103px;
  border-left: 1px solid #ccc;
}
.tab_con {
  padding: 0 10px;
}
.tab_con li {
  border-bottom: 1px solid #ccc;
}
.tab_con li h5 {
  /*超出的文字省略号显示*/
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 400;
}
.aside_price {
  font-weight: 700;
  margin: 10px 0;
}
.as_addcar {
  display: block;
  width: 88px;
  height: 26px;
  border: 1px solid #ccc;
  background-color: #f7f7f7;
  margin: 10px auto;
  text-align: center;
  line-height: 26px;
}
</style>
