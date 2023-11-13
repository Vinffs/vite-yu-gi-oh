<template>
  <div>
    <NavBar />
    <div class="container ">
      <card />
    </div>
  </div>
</template>

<script>
import { store } from './data/store';
import Card from './components/card.vue';
import axios from 'axios';
import NavBar from './components/NavBar.vue';
export default {
  name: 'App',
  components: {
    Card,
    NavBar,
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