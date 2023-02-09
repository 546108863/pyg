<template>
  <div>
    <MainHeader/>
    <MainBanner/>
    <MainRec/>
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
import MainHeader from "./MainHeader/index.vue"
import MainBanner from "./MainBanner/index.vue"
import MainRec from "./MainRec/index.vue"
import MainLeftNav from "./MainLeftNav/index.vue"
import MainLike from "./MainLike/index.vue"
import MainInterest from "./MainInterest/index.vue"
import MainAppliance from "./MainAppliance/index.vue"
import MainMobliePhone from "./MainMobliePhone/index.vue"
import MainComputer from "./MainComputer/index.vue"
import MainHotPoint from "./MainHotPoint/index.vue"



export default {
  name: "Container",
  components: {
    MainHeader,
    MainBanner,
    MainRec,
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