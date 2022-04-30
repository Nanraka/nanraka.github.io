<template>
  <section class="home-about">
    <div class="section__title">
      <div class="section__title-text">01. About Me</div>
    </div>
    <!-- グリッドシステムレイアウトを利用 -->
    <v-container>
      <v-row class="home-about__contents">
        <v-col md="5" class="home-about__contents-img">
          <img src="./img/test.jpg" alt="" class="img-fluid">
        </v-col>
        <v-col md="5" class="home-about__contents-text">
          <p>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</p>
          <p>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</p>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style lang="css" scoped>
  .home-about__contents {
    margin-top: 20px;
    justify-content: center;
  }
 
  .home-about__contents-img {
    text-align: center;
  }
 
  .home-about__contents-text {
    word-wrap: break-word;
  }
</style>