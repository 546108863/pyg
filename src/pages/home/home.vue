<template>
    <div>
      <Header></Header>
      <Main></Main>
      <Bottom></Bottom>
    </div>
  </template>
  
  <script>
  import Header from '@/components/header/header.vue'
  import Main from './main/main.vue'
  import Bottom from '../../components/bottom.vue'
  
  export default {
    name: 'home',
    components: {
      Header,
      Main,
      Bottom
    },
    mounted(){
      this.$store.dispatch('user/getUserInfo');
    }
  }
</script>

<style>

</style>