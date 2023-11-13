<template>
  <div class="card bg-transparent border-0 ">
    <img :src="image" class="card-img-top" :alt="title">
    <div class="card-body text-center">
      <h5 class="card-title">{{ title }}</h5>
      <h6 class="card-title">{{ text }}</h6>
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