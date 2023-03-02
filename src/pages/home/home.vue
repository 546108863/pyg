<template>
  <div>
    <Header></Header>
    <Main></Main>
    <Bottom></Bottom>
  </div>
</template>

<script>
import Header from "@/components/Header/Header.vue";
import Main from "./Main/Main.vue";
import Bottom from "../../components/Bottom.vue";

export default {
  name: "home",
  components: {
    Header,
    Main,
    Bottom,
  },
  mounted() {
    this.$store.dispatch("user/getUserInfo");
  },
};
</script>

<style></style>
