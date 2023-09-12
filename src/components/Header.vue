<script setup></script>

<template>
  <header>
    <div class="container d-flex justify-content-around">
      <div class="logo-container">
        <img src="/logo.png" alt="" srcset="" />
        <h1>Yu-Gi-Ho</h1>
      </div>

      <select name="archetypes" id="archetype">
        <option value="alien">Alien</option>
        <option value="Blue-Eyes">Blue-Eyes</option>
        <option value="Chaos">Chaos</option>
      </select>
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
