<script>
import Header from "./components/Header.vue";
import Cards from "./components/Cards.vue";
import Loader from "./components/Loader.vue";

import store from "./store.js";

import axios from "axios";

export default {
  data() {
    return {
      store,
      isLoaded: false,
    };
  },

  components: { Header, Cards, Loader },

  created() {
    axios
      .get("https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0")
      .then((resp) => {
        console.log(resp.data.data);
        this.store.cardsArray = resp.data.data;

        setTimeout(() => {
          this.isLoaded = true;
        }, 1500); //per simulare un ritardo e rendere visibile il loader.
      });
  },
};
</script>

<template>
  <Header />
  <main>
    <div class="container mt-3" v-if="isLoaded">
      <Cards />
    </div>

    <div v-else>
      <Loader />
    </div>
  </main>
</template>

<style lang="scss"></style>
