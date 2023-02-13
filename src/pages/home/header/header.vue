<template>
  <div>
    <!-- 头部导航栏 -->
    <HeaderNav/>
    <HeaderContainer/>
  </div>
</template>

<script>
import HeaderNav from './HeaderNav/HeaderNav.vue'
import HeaderContainer from './HeaderContainer/HeaderContainer.vue'

export default {
    name:'Header',
    components: {
        HeaderNav,
        HeaderContainer
    }
}
</script>

<style>

</style>