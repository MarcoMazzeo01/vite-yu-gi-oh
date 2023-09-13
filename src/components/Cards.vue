<script>
import store from "../store.js";

export default {
  data() {
    return {
      store,
    };
  },

  props: {
    cards: Array,
  },
};
</script>

<template>
  <ul class="d-flex flex-wrap gap-4 justify-content-center">
    <li v-for="(card, index) in cards">
      <div class="yugiho-card">
        <img :src="card.card_images[0].image_url" alt="test" />
        <div class="pt-3">
          <h5>{{ card.name }}</h5>
          <p class="mb-0" v-if="card.archetype">{{ card.archetype }}</p>
          <p class="mb-0 fst-italic" v-else>No archetype available.</p>
        </div>
      </div>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
ul {
  list-style: none;
}

.yugiho-card {
  background-color: orange;
  width: 200px;
  min-height: 400px;
  max-height: 450px;
  text-align: center;

  img {
    max-width: 100%;
  }

  h5 {
    font-size: 18px;
  }
}
</style>
