<template>
  <div class="q-pt-md text-h1 text-primary">{{ props.title }}</div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: String,
});
</script>
