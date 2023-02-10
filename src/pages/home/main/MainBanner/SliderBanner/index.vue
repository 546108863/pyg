<template>
    <div class="slider_banner">
        <button class="slider_control prev">
            <i class="iconfont">&#xe659;</i>
        </button>
        <ul class="slider_img">
                <li>
                    <img src="./images/banner2.avif" alt="">
                </li>
                <li>
                    <img src="./images/banner1 .avif" alt="">
                </li>
                
                <li>
                    <img src="./images/banner3.avif" alt="">
                </li>
                <li>
                    <img src="./images/banner4.png" alt="">
                </li>
            </ul>
            <button class="slider_control next">
                <i class="iconfont">&#xe65b;</i>
            </button>
            <ul class="circle">
                <li :class="highlight" @mouseenter="active" ></li>
                <li></li>
                <li></li>
                <li></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "SliderBanner",
    data() {
        return {
            imgCount: 0,
            highlight:""
        }
    },
    methods: {
        active() {
            this.highlight = "current";
        },
    }
}
</script>

<style lang="less" scoped>
@font-face {
  font-family: 'iconfont';
  src: url('../../../../../assets/styles/font_slider_banner/iconfont.ttf?t=1676042097744') format('truetype');
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