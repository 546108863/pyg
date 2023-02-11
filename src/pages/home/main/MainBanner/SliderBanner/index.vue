<template>
    <div class="slider_banner" @mouseenter="mousefun('enter')" @mouseleave="mousefun('out')">
        <button class="slider_control prev" @click="clickPrev">
            <i class="iconfont">&#xe659;</i>
        </button>
        <ul class="slider_img" ref="sliderImg" :style="{left:`-${imgLeft}px`,transition:`left ${transitionTime}s`}">
                <li v-for="(item) in imgList" :key="item.imgId">
                    <img :src= item.imgUrl alt="" ref="">
                </li>
                <li>
                    <img :src=imgList[0].imgUrl alt="">
                </li>
            </ul>
            <button class="slider_control next" @click="clickNext">
                <i class="iconfont">&#xe65b;</i>
            </button>
            <ul class="circle" ref="circle">
                <li :class="index==imgIndex?'current':''" @mouseenter="active(index)" v-for="(item,index) in imgList.length " :key="index"></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "SliderBanner",
    data() {
        return {
            imgList: [
            {imgId:1,imgUrl:require("./images/banner1.avif")},
            {imgId:2,imgUrl:require("./images/banner2.avif")},
            {imgId:3,imgUrl:require("./images/banner3.avif")},
            {imgId:4,imgUrl:require("./images/banner4.png")}
        ],
            imgLeft: 0,
            imgWidth: 0,
            imgIndex:0,
            timer:"",
            flag:true,
            transitionTime:0.8
        }
    },
    methods: {
        mousefun(type) {
            type==='enter'?clearTimeout(this.timer):this.setTimer();
        },

        setTimer() {
            this.timer = setInterval(() => {
                this.clickNext();
            }, 2500);
        },

        active(index) {
            this.imgIndex = index;
            this.imgLeft = this.imgWidth * index;
        },

        clickPrev() {
            this.imgIndex--;
            if(this.imgIndex < 0){
                this.transitionTime = 0;
                this.imgIndex = this.imgList.length-1;
                this.imgLeft = this.imgIndex * this.imgWidth;
            }else{
                this.transitionTime = 0.8;
            }
            this.imgLeft = this.imgIndex * this.imgWidth
        },

        clickNext(){
            this.imgIndex++;
            if(this.imgIndex >= this.imgList.length){
                this.imgIndex = 0;
                this.imgLeft = 0;
            }
            this.imgLeft = this.imgIndex * this.imgWidth;
        }
    },
    mounted() {
        this.imgWidth = this.$refs.sliderImg.children[0].offsetWidth;
        this.setTimer();
    }
}
</script>

<style lang="less" scoped>
@font-face {
  font-family: 'iconfont';
  src: url('@/assets/styles/font_slider_banner/iconfont.ttf?t=1676042097744') format('truetype');
}
.iconfont {
  font-family: "iconfont" !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.slider_banner {
    float: left;
    position: relative;
    width: 720px;
    height: 455px;
    margin: 10px 10px 0;
    overflow: hidden;
    .slider_control {
        position: absolute;
        width: 80px;
        height: 35px;
        top: 50%;
        z-index: 99;
        border-radius: 20px;
        background-color: rgba(0,0,0,.15);
        i {
            display: block;
            line-height: 35px;
            font-size: 18px;
            font-weight: 900;
            color: #fff;
        }
        transition: background-color .2s;;
    }
    .prev {
        left: -55px;
        text-align: right;
        i {
            margin-right: 5px;
        }
    }
    .next {
        left: 695px;
        text-align: left;
        i {
            margin-left: 5px;
        }
    }
    .slider_img {
        position: absolute;
        width: 500%;
        li {
            float: left;
            img {
                width: 720px;
                height: 455px;
                vertical-align: bottom;
            }

        }
    }
    .circle {
        position: absolute;
        top: 420px;
        left: 40px;
        li {
            display: inline-block;
            height: 10px;
            width: 10px;
            border-radius: 50%;
            margin-left: 5px;
            border: solid 1px rgba(0,0,0,.05);
            background-color: rgba(255,255,255,.4);
            vertical-align: middle;
        }
        .current {
            height: 11px;
            width: 11px;
            top: 2px;
            left: 0;
            border: solid 3px rgba(0,0,0,.1);
            background-color: #fff;
        }
    }
}
</style>