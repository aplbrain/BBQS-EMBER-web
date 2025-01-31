import { Ref } from 'vue';

function scrollTo(view: Ref<HTMLElement | null>) {
  view.value?.scrollIntoView({ behavior: 'smooth' });
}

export { scrollTo };
