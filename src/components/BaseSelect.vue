<script>
import axios from "axios";

export default {
  data() {
    return {
      archetypes: [],
      selected: "All",
    };
  },

  methods: {},

  mounted() {
    axios
      .get("https://db.ygoprodeck.com/api/v7/archetypes.php")
      .then((resp) => {
        // console.log(resp.data);
        this.archetypes = resp.data;
      });
  },
};
</script>

<template>
  <select
    name="archetypes"
    id="archetype"
    v-model="selected"
    @change="$emit('sortArchetype', selected)"
  >
    <option value="All" selected>All</option>
    <template v-for="(archetype, index) in archetypes">
      <option :value="archetype.archetype_name">
        {{ archetype.archetype_name }}
      </option>
    </template>
  </select>
</template>

<style></style>
