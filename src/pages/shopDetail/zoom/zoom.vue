<template>
            <div class="preview_wrap fl" ref="previewImg">
                <div class="preview_img"  >
                    <div class="zoom-img" @mouseenter="enter" @mouseleave="out" @mousemove="handler"  ref="zoomImg">
                        <img src="../images/upload/s3.png" alt="" >
                        <div class="mask" ref="mask" v-show="ismask" ></div>
                    </div>
                    <div class="big" v-show="isbig">
                        <img src="../images/upload/s3.png" alt="" ref="big">
                    </div>
                    <div class="event"></div>
                </div>

                <div class="preview_list">
                    <a href="#" class="arrow_prev"></a>
                    <a href="#" class="arrow_next"></a>
                    <ul class="list_item">
                        <li>
                            <img src="../images/upload/pre.jpg" alt="">
                        </li>
                        <li class="current">
                            <img src="../images/upload/pre.jpg" alt="">
                        </li>
                        <li>
                            <img src="../images/upload/pre.jpg" alt="">
                        </li>
                        <li>
                            <img src="../images/upload/pre.jpg" alt="">
                        </li>
                        <li>
                            <img src="../images/upload/pre.jpg" alt="">
                        </li>
                    </ul>
                </div>
            </div>
</template>

<script>
export default {
    name:"zoom",
    data() {
        return {
            isbig: false,
            ismask: false,
        }
    },
    methods: {
        handler(e) {
            let mask = this.$refs.mask;
            let previewImg = this.$refs.previewImg;
            let big = this.$refs.big;
            let zoomImg = this.$refs.zoomImg;

            let left = e.pageX - previewImg.offsetLeft - mask.offsetWidth/2;
            let top = e.pageY - previewImg.offsetTop - mask.offsetHeight/2;
            let maxleft = zoomImg.offsetWidth - mask.offsetWidth;
            let maxtop = zoomImg.offsetHeight - mask.offsetHeight;
            if(left <= 0) left = 0;
            if(left >= maxleft) left = maxleft;
            if(top <= 0) top = 0;
            if(top >= maxtop) top = maxtop;

            mask.style.top = top + 'px';
            mask.style.left = left + 'px';

            big.style.top = -2*top + 'px';
            big.style.left = -2*left + 'px';
        },
        enter() {
            this.isbig = true;
            this.ismask = true;
        },
        out() {
            this.isbig = false;
            this.ismask = false;
        }
    },

}
</script>

<style>
    .preview_wrap {
    position: relative;
	width: 400px;
}
.preview_img {
	border: 1px solid #ccc;
}

.zoom-img img {
    vertical-align: bottom;
}

.big {
    position: absolute;
    width: 500px;
    height: 500px;
    top: 0px;
    left: 400px;
    z-index: 99;
    overflow: hidden;
}
.big img {
    position: absolute;
    width: 800px;
    height: 800px;
    top: 0;
    left: 0;
}

.event {
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 999;
}
.mask {
    position: absolute;
    width: 250px;
    height: 250px;
    background-color: rgba(97, 86, 86, .5);
    top: 0;
    left: 0;
}

.preview_list {
	position: relative;
	height: 60px;
	margin-top: 60px;
}
.list_item {
	width: 320px;
	height: 60px;
	margin: 0 auto;
}
.list_item li {
	float: left;
	width: 56px;
	height: 56px;
	border: 2px solid transparent;
	margin: 0 2px;
}
.list_item li.current {
	border-color: #c81623;
}
.arrow_prev,
.arrow_next {
	position: absolute;
	top: 15px;
	width: 22px;
	height: 32px;
	background-color: purple;
}
.arrow_prev {
	left: 0;
	background: url(../images/arrow-prev.png) no-repeat;
}
.arrow_next {
	right: 0;
	background: url(../images/arrow-next.png) no-repeat;
}
</style>