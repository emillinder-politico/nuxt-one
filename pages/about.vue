<script setup lang="ts">
import { ref, onMounted } from 'vue'

const apiHtml = ref()

const count = useState('counter', () => Math.round(Math.random() * 100))

const increment = () => count.value++

const {data} = await useFetch('/api/html/with-script')

const executeScriptElements = (containerElement : any) => {
    const scriptElements = containerElement.querySelectorAll("script");

    Array.from(scriptElements).forEach((scriptElement) => {
        const clonedElement = document.createElement("script");

        Array.from(scriptElement.attributes).forEach((attribute) => {
            clonedElement.setAttribute(attribute.name, attribute.value);
        });

        clonedElement.text = scriptElement.text;

        scriptElement.parentNode.replaceChild(clonedElement, scriptElement);
    });
}

onMounted(() => {
  executeScriptElements(apiHtml.value);
})

</script>

<template>
  <p @click.prevent="increment">{{ count }}</p>
  <div ref="apiHtml" v-html="data['html']"></div>
</template>

<style scoped>

</style>
