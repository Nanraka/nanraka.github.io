<template>
  <v-app>
    <!-- ヘッダー -->
    <header>
      <v-app-bar 
        app
        dark
      >
        <!-- ハンバーガーメニュー -->
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
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
        fixed
        temporary
      >
        <!-- ハンバーガーメニュー内要素の設定 -->
        <v-list
          nav
          dense
        >
          <v-list-item-group>
            <v-list-item
              v-for='menuItem in menuItems'
              :key="menuItem"
            >
            <v-list-item-title>{{menuItem.name}}</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </header>
  </v-app>
</template>

<script>
import constants from './common/constants.js'
 
export default {
    name: 'App',
    data(){
      return{
        drawer: false,
        menuItems: constants.menuItems
      }
    }
}
</script>

<style>
 #app {
     font-family: Avenir, Helvetica, Arial, sans-serif;
     -webkit-font-smoothing: antialiased;
     -moz-osx-font-smoothing: grayscale;
     text-align: center;
     color: #2c3e50;
 }
</style>

<!-- ツールバータイトルの表示変更 -->
<style lang="css" scoped>
  .v-toolbar__title {
    overflow: visible !important;
    margin-right: 50px !important;
  }
</style>