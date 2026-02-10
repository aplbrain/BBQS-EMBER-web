<template>
  <a :href="uri" target="_blank" class="link" rel="noopener noreferrer">{{ text }}</a>
</template>

<script setup lang="ts">
import type { Link } from 'src/models/common';
import { computed, type PropType } from 'vue';

const props = defineProps({
  uri: { type: String, default: '' },
  text: { type: String, default: '' },
  link: { type: Object as PropType<Link | undefined> },
});

const uri = props.link && props.link.uri ? props.link.uri : props.uri;
const text = props.link && props.link.text ? props.link.text : props.text;

const componentIsValid = computed(() => {
  return props.link != undefined || (props.uri != undefined && props.text != undefined);
});

// Log warning during development
if (import.meta.env.DEV && !componentIsValid.value) {
  console.warn(
    'Invalid props: must provide either `link` or both `uri` and `text` to `LinkText` component.',
  );
}
</script>
