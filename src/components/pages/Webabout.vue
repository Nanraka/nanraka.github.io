<template>
  <section class="about">
    <AppBackgroundHolder :title="title"/>
    <h2>プロフィール</h2>
  </section>
</template>
<script>
import AppBackgroundHolder from '../modules/AppBackgroundHolder.vue'
 
export default {
  data () {
    return {
      title: 'About'
    }
  },
  components: {
    AppBackgroundHolder
  }
}
</script>