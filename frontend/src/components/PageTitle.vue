<template>
  <div class="row justify-center">
    <div class="q-pt-md text-h1 text-primary">{{ props.title }}</div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: String,
});
</script>
