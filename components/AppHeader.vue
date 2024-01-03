<script setup lang="ts">

</script>

<template>
  <nav>
    <div>
      <router-link to="/">Home</router-link>
    </div>
    <div>
      <router-link to="/about">About</router-link>
    </div>
  </nav>
</template>

<style scoped>
nav {
  margin-bottom: 2vw;
}

div {
  display: inline-flex;
  flex-flow: column;
  margin: 1vw;
  border: 1px solid black;
  border-radius: 5px;
  padding: 10px;
}
</style>
