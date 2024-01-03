<script setup lang="ts">
const count = useState('counter', () => Math.round(Math.random() * 100))

const increment = () => count.value++

const {data} = await useFetch('/api/hello')
</script>

<template>
  <p @click.prevent="increment">{{ count }}</p>
  <p>Hello, {{ data["hello"] }}</p>
</template>

<style scoped>

</style>
