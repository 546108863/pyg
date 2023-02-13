<template>
    <div class="banner w">
        <BannerLeftNav/>
        <SliderBanner/>
        <BannerRightContainer/>
    </div>
</template>

<script>
import BannerLeftNav from "./BannerLeftNav/BannerLeftNav.vue"
import SliderBanner from "./SliderBanner/SliderBanner.vue"
import BannerRightContainer from "./BannerRightContainer/BannerRightContainer.vue"


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