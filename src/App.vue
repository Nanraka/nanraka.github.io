<template>
  <v-app>
    <WebHeader />
     <v-content>
      <WebHome/>
    </v-content>
    <WebFooter />
  </v-app>
</template>


<script>
import WebHeader from "./components/modules/WebHeader.vue"
import WebHome from './components/pages/WebHome.vue'
import WebFooter from "./components/modules/WebFooter.vue"

export default{
  name: "App",
  components: {
    WebHeader,
    WebHome,
    WebFooter
  }
}
</script>