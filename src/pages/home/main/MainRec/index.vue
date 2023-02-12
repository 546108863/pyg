<template>
  <div class="seckill-container w clearfix">
    <a href="" class="seckill-countdown">
      <div class="countdown-title">今日秒杀</div>
      <div class="target-time">
        <span>{{ targetTime }}</span
        >点场 距结束
      </div>
      <span class="countdown">
        <span class="hour">{{ hour }}</span>
        <span class="minute">{{ minute }}</span>
        <span class="second">{{ second }}</span>
      </span>
    </a>
    <div class="seckill-slider">
      <button class="slider_control prev" @click="throttle(clickPrev)">
        <i class="iconfont">&#xe659;</i>
      </button>
      <div
        class="seckill-list"
        :style="{
          width: this.imgList.length * 202 + 'px',
          left: `-${imgLeft}px`,
          transition: `left ${transitionTime}s`,
        }"
      >
        <a
          href=""
          v-for="item in imgList"
          :key="item.imgId"
          class="seckill-item"
        >
          <div class="seckill-itemImg"><img :src="item.imgUrl" alt="" /></div>
          <h5 class="seckill-itemName">
            华为 HUAWEI MateXs 5G全网通 折叠屏 麒麟990 二手手机 Mate XS星际蓝
            (8+512) 99成新
          </h5>
          <div class="seckill-itemPrice">￥<span>2000.00</span></div>
        </a>
        <a href="" class="seckill-item">
          <div class="seckill-itemImg">
            <img :src="imgList[0].imgUrl" alt="" />
          </div>
          <h5 class="seckill-itemName">
            华为 HUAWEI MateXs 5G全网通 折叠屏 麒麟990 二手手机 Mate XS星际蓝
            (8+512) 99成新
          </h5>
          <div class="seckill-itemPrice">￥<span>2000.00</span></div>
        </a>
        <a href="" class="seckill-item">
          <div class="seckill-itemImg">
            <img :src="imgList[1].imgUrl" alt="" />
          </div>
          <h5 class="seckill-itemName">
            华为 HUAWEI MateXs 5G全网通 折叠屏 麒麟990 二手手机 Mate XS星际蓝
            (8+512) 99成新
          </h5>
          <div class="seckill-itemPrice">￥<span>2000.00</span></div>
        </a>
        <a href="" class="seckill-item">
          <div class="seckill-itemImg">
            <img :src="imgList[2].imgUrl" alt="" />
          </div>
          <h5 class="seckill-itemName">
            华为 HUAWEI MateXs 5G全网通 折叠屏 麒麟990 二手手机 Mate XS星际蓝
            (8+512) 99成新
          </h5>
          <div class="seckill-itemPrice">￥<span>2000.00</span></div>
        </a>
        <a href="" class="seckill-item">
          <div class="seckill-itemImg">
            <img :src="imgList[3].imgUrl" alt="" />
          </div>
          <h5 class="seckill-itemName">
            华为 HUAWEI MateXs 5G全网通 折叠屏 麒麟990 二手手机 Mate XS星际蓝
            (8+512) 99成新
          </h5>
          <div class="seckill-itemPrice">￥<span>2000.00</span></div>
        </a>
        <a href="" class="seckill-item">
          <div class="seckill-itemImg">
            <img :src="imgList[4].imgUrl" alt="" />
          </div>
          <h5 class="seckill-itemName">
            华为 HUAWEI MateXs 5G全网通 折叠屏 麒麟990 二手手机 Mate XS星际蓝
            (8+512) 99成新
          </h5>
          <div class="seckill-itemPrice">￥<span>2000.00</span></div>
        </a>
      </div>
      <button class="slider_control next" @click="throttle(clickNext)">
        <i class="iconfont">&#xe65b;</i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContainerMiddleBanner",
  data() {
    return {
      transitionTime: 0.8,
      imgLeft: 0,
      imgWidth: 1010,
      imgIndex: 0,
      flag: true,
      hour: "",
      minute: "",
      second: "",
      inputTime: "2023-2-12 23:00:00",
      imgList: [
        { imgId: 1, imgUrl: require("./images/seckill (1).avif") },
        { imgId: 2, imgUrl: require("./images/seckill (2).avif") },
        { imgId: 3, imgUrl: require("./images/seckill (3).avif") },
        { imgId: 4, imgUrl: require("./images/seckill (4).avif") },
        { imgId: 5, imgUrl: require("./images/seckill (5).avif") },
        { imgId: 6, imgUrl: require("./images/seckill (6).avif") },
        { imgId: 7, imgUrl: require("./images/seckill (7).avif") },
        { imgId: 8, imgUrl: require("./images/seckill (8).avif") },
        { imgId: 9, imgUrl: require("./images/seckill (9).avif") },
        { imgId: 10, imgUrl: require("./images/seckill (10).avif") },
        { imgId: 11, imgUrl: require("./images/seckill (11).avif") },
        { imgId: 12, imgUrl: require("./images/seckill (12).avif") },
      ],
    };
  },
  methods: {
    countdown() {
      let nowTime = +new Date();
      let tTime = +new Date(this.inputTime);
      let times = (tTime - nowTime) / 1000;
      let s = parseInt(times % 60);
      this.second = s >= 10 ? s : "0" + s;
      let m = parseInt((times / 60) % 60);
      this.minute = m >= 10 ? m : "0" + m;
      let h = parseInt((times / 60 / 60) % 24);
      this.hour = h >= 10 ? h : "0" + h;
    },
    clickPrev() {
      if (--this.imgIndex < 0) {
        this.transitionTime = 0;
        this.imgLeft = this.imgList.length * this.imgWidth;
        this.imgIndex = this.imgList.length - 1;
        setTimeout(() => {
          this.transitionTime = 0.8;
          this.imgLeft -= this.imgWidth;
        }, this.transitionTime * 1000);
      } else {
        this.transitionTime = 0.8;
        this.imgLeft = this.imgIndex * this.imgWidth;
      }
    },

    clickNext() {
      if (++this.imgIndex >= this.imgList.length / 5) {
        this.imgLeft = this.imgIndex * this.imgWidth;
        this.imgIndex = 0;
        setTimeout(() => {
          this.transitionTime = 0;
          this.imgLeft = 0;
        }, this.transitionTime * 1000);
      } else {
        this.transitionTime = 0.8;
        this.imgLeft = this.imgIndex * this.imgWidth;
      }
    },

    throttle(func) {
      if (this.flag) {
        this.flag = false;
        func();
        setTimeout(() => {
          this.flag = true;
        }, 800);
      }
    },
  },

  computed: {
    targetTime() {
      return this.inputTime.slice(10, 15);
    },
  },
  mounted() {
    this.countdown();
    setInterval(() => {
      this.countdown();
    }, 1000);
  },
};
</script>

<style scoped lang="less">
@font-face {
  font-family: "iconfont";
  src: url("@/assets/styles/font_slider_banner/iconfont.ttf?t=1676042097744")
    format("truetype");
}
.iconfont {
  font-family: "iconfont" !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.seckill-container {
  margin-top: 30px;
  .seckill-countdown {
    float: left;
    width: 190px;
    height: 260px;
    background: url(./images/seckill.png) no-repeat;
    background-size: contain;
    overflow: hidden;
    color: #fff;
    text-align: center;
    .countdown-title {
      margin-top: 20px;
      font-size: 30px;
      font-weight: 700;
    }
    .target-time {
      margin-top: 100px;
      font-size: 14px;
      span {
        display: inline-block;
        margin-top: -2px;
        vertical-align: top;
        font-size: 18px;
        font-weight: 700;
      }
    }
    .countdown {
      display: inline-block;
      position: relative;
      margin-top: 15px;
      span {
        display: inline-block;
        height: 30px;
        width: 30px;
        background-color: #2f3430;
        text-align: center;
        font-size: 20px;
        font-weight: 700;
        line-height: 30px;
      }
      .hour {
        &::after {
          content: ":";
          display: block;
          position: absolute;
          top: -2px;
          left: 37px;
        }
      }
      .minute {
        margin-left: 20px;
        &::after {
          content: ":";
          display: block;
          position: absolute;
          top: -2px;
          left: 87px;
        }
      }
      .second {
        margin-left: 20px;
      }
    }
  }
  .seckill-slider {
    float: left;
    position: relative;
    width: 1010px;
    height: 260px;
    overflow: hidden;

    .seckill-list {
      float: left;
      position: absolute;
      top: 0;
      left: 0;
      width: 1010px;
      height: 260px;
      font-size: 12px;
      overflow: hidden;
      .seckill-item {
        display: inline-block;
        position: relative;
        width: 202px;
        height: 260px;
        .seckill-itemImg {
          height: 140px;
          width: 140px;
          margin: 45px auto 0;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .seckill-itemName {
          width: 160px;
          height: 18px;
          font-weight: 500;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          margin: 15px auto 0;
        }
        .seckill-itemPrice {
          margin-top: 10px;
          color: #e1251b;
          font-weight: 700;
          text-align: center;
        }
        &::after {
          content: "";
          position: absolute;
          right: 0;
          top: 50%;
          width: 1px;
          height: 260px;
          transform: translateY(-50%);
          background-color: black;
          background: linear-gradient(#fff, #dde0dd77, #fff);
        }
      }
    }
    .slider_control {
      position: absolute;
      width: 80px;
      height: 35px;
      top: 50%;
      z-index: 99;
      border-radius: 20px;
      background-color: rgba(0, 0, 0, 0.15);
      i {
        display: block;
        line-height: 35px;
        font-size: 18px;
        font-weight: 900;
        color: #fff;
      }
      transition: background-color 0.2s;
    }
    .prev {
      left: -55px;
      text-align: right;
      i {
        margin-right: 5px;
      }
    }
    .next {
      left: 984px;
      text-align: left;
      i {
        margin-left: 5px;
      }
    }
  }
}
</style>
