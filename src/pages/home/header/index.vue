<template>
  <div>
    <!-- 头部导航栏 -->
    <HeaderNav/>
    <HeaderContainer/>
  </div>
</template>

<script>
import HeaderNav from './HeaderNav/index.vue'
import HeaderContainer from './HeaderContainer/index.vue'

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