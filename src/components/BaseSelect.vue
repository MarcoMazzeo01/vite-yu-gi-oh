<script>
import axios from "axios";

export default {
  data() {
    return {
      archetypes: [],
      selected: "",
    };
  },

  mounted() {
    console.log("Hi bitch");
    axios
      .get("https://db.ygoprodeck.com/api/v7/archetypes.php")
      .then((resp) => {
        console.log(resp.data);
        this.archetypes = resp.data;
      });
  },
};
</script>

<template>
  <select name="archetypes" id="archetype">
    <template v-for="(archetype, index) in archetypes">
      <option :value="archetype.archetype_name">
        {{ archetype.archetype_name }}
      </option>
    </template>
  </select>
</template>

<style></style>
