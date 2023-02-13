<template>
  <div>
    <MainHeader/>
    <MainBanner/>
    <Seckill/>
    <MainLeftNav/>
    <MainLike/>
    <MainInterest/>
    <MainAppliance/>
    <MainMobliePhone/>
    <MainComputer/>
    <MainHotPoint/>
  </div>
</template>

<script>
import MainHeader from "./MainHeader/MainHeader.vue"
import MainBanner from "./MainBanner/MainBanner.vue"
import Seckill from "./Seckill/Seckill.vue"
import MainLeftNav from "./MainLeftNav/MainLeftNav.vue"
import MainLike from "./MainLike/MainLike.vue"
import MainInterest from "./MainInterest/MainInterest.vue"
import MainAppliance from "./MainAppliance/MainAppliance.vue"
import MainMobliePhone from "./MainMobliePhone/MainMobliePhone.vue"
import MainComputer from "./MainComputer/MainComputer.vue"
import MainHotPoint from "./MainHotPoint/MainHotPoint.vue"



export default {
  name: "Container",
  components: {
    MainHeader,
    MainBanner,
    Seckill,
    MainLeftNav,
    MainLike,
    MainInterest,
    MainAppliance,
    MainMobliePhone,
    MainComputer,
    MainHotPoint,
  }
}
</script>

<style>

</style>