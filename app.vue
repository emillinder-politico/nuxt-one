<script setup>
// composables should only be called from setup or other composables and stuff.

import {useFetch} from "#app";

useSeoMeta({ogTitle: "Sure ok"})
const {data} = await useFetch('/api/wakka/lumos/config', {server: true})
</script>

<template>
  <div v-if="data">
    Data: {{ data }}
  </div>

  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>
