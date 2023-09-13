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

  methods: {
    sortArchetype(selected) {
      store.selected = selected;
      console.log("TESTAAAA");
    },
  },

  computed: {
    cardsArray() {
      const sortedArchetypes = this.store.cardsArray.filter((card) => {
        if (this.store.selected == "All") {
          return this.store.cardsArray;
        } else {
          return card.archetype === this.store.selected ? true : false;
        }
      });

      console.log(sortedArchetypes);

      return sortedArchetypes;
    },
  },

  components: { Header, Cards, Loader },

  created() {
    axios
      .get("https://db.ygoprodeck.com/api/v7/cardinfo.php?num=500&offset=0")
      .then((resp) => {
        console.log(store);
        console.log(resp.data.data);
        this.store.cardsArray = resp.data.data;

        setTimeout(() => {
          this.isLoaded = true;
        }, 0); //per simulare un ritardo e rendere visibile il loader.
      });
  },
};
</script>

<template>
  <Header @sortArchetype="sortArchetype" />
  <main>
    <div class="container mt-3" v-if="isLoaded">
      <Cards :cards="cardsArray" />
    </div>

    <div v-else>
      <Loader />
    </div>
  </main>
</template>

<style lang="scss"></style>
