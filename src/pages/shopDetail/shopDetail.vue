<template>
  <div>
    <Header></Header>
    <Container></Container>
    <Bottom></Bottom>
  </div>
</template>

<script>
import Header from "@/components/Header/Header.vue";
import Container from "./Container/Container.vue";
import Bottom from "@/components/Bottom.vue";

export default {
  name: "ShopDetail",
  components: {
    Header,
    Container,
    Bottom,
  },
};
</script>

<style>
/*让所有斜体 不倾斜*/
em,
i {
  font-style: normal;
}
/*图片没有边框   去掉图片底侧的空白缝隙*/
img {
  border: 0; /*ie6*/
  vertical-align: middle;
}

/*取消链接的下划线*/
a {
  color: #666;
  text-decoration: none;
}

a:hover {
  color: #e33333;
}

button,
input {
  font-family: "Microsoft YaHei", "Heiti SC", tahoma, arial, "Hiragino Sans GB",
    \\5B8B\4F53, sans-serif;
  /*取消轮廓线 蓝色的*/
  outline: none;
}

body {
  background-color: #fff;
  font: 12px/1.5 "Microsoft YaHei", "Heiti SC", tahoma, arial,
    "Hiragino Sans GB", \\5B8B\4F53, sans-serif;
  color: #666;
}

.hide,
.none {
  display: none;
}
/*清除浮动*/
.clearfix:after {
  visibility: hidden;
  clear: both;
  display: block;
  content: "";
  height: 0;
}

.clearfix {
  *zoom: 1;
}src

/*公共样式*/
.fl {
  float: left;
}
.fr {
  float: right;
}

@font-face {
  font-family: "icomoon";
  src: url("@/assets/fonts1/icomoon.eot?7kkyc2");
  src: url("@/assets/fonts1/icomoon.eot?7kkyc2#iefix")
      format("embedded-opentype"),
    url("@/assets/fonts1/icomoon.ttf?7kkyc2") format("truetype"),
    url("@/assets/fonts1/icomoon.woff?7kkyc2") format("woff"),
    url("@/assets/fonts1/icomoon.svg?7kkyc2#icomoon") format("svg");
  font-weight: normal;
  font-style: normal;
}
.fr .icomoon {
  font-family: "icomoon";
  font-size: 16px;
  line-height: 26px;
}
</style>
