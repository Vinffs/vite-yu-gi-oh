<template>
  <div class="card minimum bg-secondary rounded-bottom-3">
    <img :src="image" class="card-img-top" :alt="title">
    <div class="card-body text-center flex-fill py-2">
      <h5 class="card-title title text-white">{{ title }}</h5>
      <h6 class="card-title text-white">{{ text }}</h6>
    </div>
  </div>
</template>

<script>
import { store } from '../data/store.js';
export default {
  name: 'CardComponent',
  props: [
    'image',
    'title',
    'text'
  ],
  data() {
    return store;
  }
}
</script>

<style lang="scss" scoped></style>