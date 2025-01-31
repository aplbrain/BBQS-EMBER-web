<template>
  <a :href="uri" target="_blank" class="link">{{ text }}</a>
</template>

<script setup lang="ts">
import { Link } from 'src/models/common';
import { computed, PropType } from 'vue';

const props = defineProps({
  uri: { type: String, default: undefined },
  text: { type: String, default: undefined },
  link: { type: Object as PropType<Link>, default: undefined },
});

const uri = props.link && props.link.uri ? props.link.uri : props.uri;
const text = props.link && props.link.text ? props.link.text : props.text;

const componentIsValid = computed(() => {
  return props.link != undefined || (props.uri != undefined && props.text != undefined);
});

if (!componentIsValid.value) {
  console.error(
    '`LinkText` component is not valid due to props. Either `link` or (`uri` and `text`) is required.'
  );
}
</script>
