<template>
  <div>
    <card />
  </div>
</template>

<script>
import { store } from './data/store';
import Card from './components/card.vue';
import axios from 'axios';
export default {
  name: 'App',
  components: {
    Card,
  },
  data() {
    return store;
  },
  methods: {
    getCards() {
      const url = store.apiUrl;
      axios.get(url, { params: store.params }).then((response) => {
        console.log(response.data.data);
        store.cards = response.data.data;
      })
    }
  },
  created() {
    this.getCards();
  }
}
</script>

<style lang="scss" scoped></style>