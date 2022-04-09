<template>
  <v-app>
    <WebHeader />
     <v-content>
       <!-- ヘッダーとフッター以外をrouter登録 -->
      <router-view/>
    </v-content>
    <WebFooter />
  </v-app>
</template>


<!-- routerに登録した場所はよしなに処理してくれるので記述しなくても良い -->
<script>
import WebHeader from "./components/modules/WebHeader.vue"
import WebFooter from "./components/modules/WebFooter.vue"

export default{
  name: "App",
  components: {
    WebHeader,
    WebFooter
  }
}
</script>