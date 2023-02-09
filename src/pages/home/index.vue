<template>
    <div>
      <Header></Header>
      <Main></Main>
      <Bottom></Bottom>
    </div>
  </template>
  
  <script>
  import Header from './header/index.vue'
  import Main from './main/index.vue'
  import Bottom from '../../components/bottom.vue'
  
  export default {
    name: 'home',
    components: {
      Header,
      Main,
      Bottom
    }
  }
</script>

<style>

</style>