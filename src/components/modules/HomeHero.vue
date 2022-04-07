<template>
  <section class="home-hero">
      <!-- v-container - v-row - v-col -->
    <v-container fluid fill-height class="home-hero__content">
      <v-row>
        <v-col class="home-hero__content-text">
          <p>Hi there.</p>
          <p>I'm Nanraka.</p>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>


<style  lang="css" scoped>
    .home-hero__content {
        background: url("./img/test.jpg");
        background-size: cover;
        background-position: center center;
        width: 100%;
        height: 50vh;
    }
    .home-hero__content-text {
            color: black;
            text-align: center;
            font-size: 28px;
            font-weight: bold;
        }
</style>