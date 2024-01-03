<script setup lang="ts">
const count = useState('counter', () => Math.round(Math.random() * 100))
const increment = () => count.value++
</script>

<template>
  <p @click.prevent="increment">{{count}}</p>
</template>

<style scoped>

</style>
