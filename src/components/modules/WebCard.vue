<template>
    <div id="app">
        <v-app id="inspire">
            <v-card
            :loading="loading"
            class="mx-auto my-12 d-flex flex-column"
            max-width="374"
            href="https://codepen.io/pen?&editors=101"
            >

            <v-img
                height="250"
                src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
            ></v-img>
        
            <v-card-title>Cafe Badilico</v-card-title>
        
            <v-card-text>
                <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
            </v-card-text>
            <v-spacer />
            </v-card>
        </v-app>
    </div>
</template>