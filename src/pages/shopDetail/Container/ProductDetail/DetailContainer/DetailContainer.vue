<template>
  <div class="detail">
    <div class="detail_tab_list">
      <ul>
        <li class="current">商品介绍</li>
        <li>规格与包装</li>
        <li>售后保障</li>
        <li>商品评价（50000）</li>
        <li>手机社区</li>
      </ul>
    </div>
    <div class="detail_tab_con">
      <div class="item">
        <ul class="item_info">
          <li>分辨率：1920*1080(FHD)</li>
          <li>后置摄像头：1200万像素</li>
          <li>前置摄像头：500万像素</li>
          <li>核 数：其他</li>
          <li>频 率：以官网信息为准</li>
          <li>品牌： Apple ♥关注</li>
          <li>商品名称：APPLEiPhone 6s Plus</li>
          <li>商品编号：1861098</li>
          <li>商品毛重：0.51kg</li>
          <li>商品产地：中国大陆</li>
          <li>热点：指纹识别，Apple Pay，金属机身，拍照神器</li>
          <li>系统：苹果（IOS）</li>
          <li>像素：1000-1600万</li>
          <li>机身内存：64GB</li>
        </ul>
        <p>
          <a href="#" class="more">查看更多参数</a>
        </p>
        <img src="../../../images/upload/detail_img1.jpg" alt="" />
        <img src="../../../images/upload/detail_img2.jpg" alt="" />
        <img src="../../../images/upload/detail_img3.jpg" alt="" />
      </div>
      <!-- 
					<div class="item">规格与包装</div>
					<div class="item">售后保障</div> 
					-->
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailContainer",
};
</script>

<style scoped>
.detail {
  float: right;
  width: 978px;
}
.detail_tab_list {
  height: 39px;
  border: 1px solid #ccc;
  background-color: #f1f1f1;
}
.detail_tab_list li {
  float: left;
  height: 39px;
  line-height: 39px;
  padding: 0 20px;
  text-align: center;
  cursor: pointer;
}
.detail_tab_list .current {
  background-color: #c81623;
  color: #fff;
}
.item_info {
  padding: 20px 0 0 20px;
}
.item_info li {
  line-height: 22px;
}
.more {
  float: right;
  font-weight: 700;
  font-family: "icomoon";
}
</style>
