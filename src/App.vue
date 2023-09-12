<script>
import Header from "./components/Header.vue";
import Cards from "./components/Cards.vue";
import store from "./store.js";

import axios from "axios";

export default {
  data() {
    return {
      store,
    };
  },

  components: {
    Header,
    Cards,
  },

  created() {
    axios
      .get("https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0")
      .then((resp) => {
        console.log(resp.data.data);
        this.store.cardsArray = resp.data.data;
      });
  },
};
</script>

<template>
  <Header />
  <main>
    <div class="container mt-3">
      <Cards />
    </div>
  </main>
</template>

<style lang="scss"></style>
