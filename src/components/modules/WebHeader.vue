<!--
<template>
	<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
	<div class="container-fluid">
	<a class="navbar-brand" href="#">Nanraka</a>
	<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
		<span class="navbar-toggler-icon"></span>
	</button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
        <a class="nav-link active" aria-current="page"  href="#">Features</a>
        <a class="nav-link active" aria-current="page"  href="#">Pricing</a>
      </div>
    </div>
  </div>
</nav>
</template>
-->

<template>
  <header>
    <v-app-bar 
      app
      dark
    >
      <!-- ハンバーガーメニュー -->
      <v-app-bar-nav-icon @click = "drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>Nanraka</v-toolbar-title>
      
      <!-- ナビゲーションメニューの作成 -->
      <v-tabs>
        <v-tab
          v-for = "(menuItem,index) in menuItems"
          :key = "index"
        >
        {{ menuItems.name }}
        </v-tab>
      </v-tabs>
    </v-app-bar>

    <!-- ハンバーガーメニューの制御 -->
    <v-navigation-drawer
      v-model="drawer" 
      absolute
      temporary
    >
      <!-- ハンバーガーメニュー内要素の設定 -->
      <v-list
        nav
        dense
      >
        <v-list-item-group>
          <v-list-item
            v-for = "(menuItem,index) in menuItems"
            :key = "index"
          >
          <v-list-item-title>{{menuItem.name}}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </header>
</template>


<script>
import constants from '../../common/constants.js'
 
export default {
  name: 'WebHeader',
  data(){
    return{
      drawer: false,
      menuItems: constants.menuItems
    }
  }
}
</script>

<style lang="css" scoped>
  .v-toolbar__title {
    overflow: visible !important;
    margin-right: 50px !important;
  }
  .v-app-bar-nav-icon{
    @include display_pc {
      display: none !important;
    }
  }
  .v-tabs{
    display: none;
    @include display_pc {
      display: block !important;
    }
  }
</style>