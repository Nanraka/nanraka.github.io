<template>
  <section class="home">
    <HomeHero />
    <HomeAbout />
    <HomeService />
  </section>
</template>


<script>
import HomeHero from '../modules/HomeHero.vue'
import HomeAbout from '../modules/HomeAbout.vue'
import HomeService from '../modules/HomeService.vue'
 
export default {
  components: {
    HomeHero,
    HomeAbout,
    HomeService
  }
}
</script>


<style lang="css" scoped>
.home {
  padding-bottom: 50px;
}
</style>