<template>
    <div class="banner w">
        <BannerLeftNav/>
        <SliderBanner/>
        <BannerRightContainer/>
    </div>
</template>

<script>
import BannerLeftNav from "./BannerLeftNav/index.vue"
import SliderBanner from "./SliderBanner/index.vue"
import BannerRightContainer from "./BannerRightContainer/index.vue"


export default {
    name: "Banner",
    components: {
        BannerLeftNav,
        SliderBanner,
        BannerRightContainer
    }
}
</script>

<style>
    .banner {
    height: 465px;
    background-color: #ffffff;
    color: #ffffff;
    }
</style>