<script>
import BaseSelect from "./BaseSelect.vue";

export default {
  data() {},

  components: { BaseSelect },
};
</script>

<template>
  <header>
    <div class="container d-flex justify-content-around">
      <div class="logo-container">
        <img src="/logo.png" alt="" srcset="" />
        <h1>Yu-Gi-Ho</h1>
      </div>

      <BaseSelect />
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  background-color: orange;

  .logo-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
}
</style>
