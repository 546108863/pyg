<template>
  <div>
    <!-- 头部导航栏 -->
    <HeaderNav/>
    <HeaderContainer/>
    <HeaderBottom></HeaderBottom>
  </div>
</template>

<script>
import HeaderNav from './HeaderNav/HeaderNav.vue'
import HeaderContainer from './HeaderContainer/HeaderContainer.vue'
import HeaderBottom from './HeaderBottom/HeaderBottom.vue'


export default {
    name:'Header',
    components: {
        HeaderNav,
        HeaderContainer,
        HeaderBottom
    }
}
</script>

<style>

</style>