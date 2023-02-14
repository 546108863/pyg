<template>
  <div>
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