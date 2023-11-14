<template>
  <PagePreloader v-if="!isloaded" />
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
import PagePreloader from './components/PagePreloader.vue';
export default {
  name: 'App',
  components: {
    Card,
    NavBar,
    PagePreloader,
  },
  data() {
    return {
      store,
      isloaded: false,
    }
  },
  methods: {
    getCards() {
      const urlCards = store.apiUrl + store.cardInfo;
      axios.get(urlCards, { params: store.params }).then((response) => {
        console.log(response.data.data);
        store.cards = response.data.data;
      })
    },
    getArchetypes() {
      const urlArchetype = store.apiUrl + store.archetype;
      console.log(urlArchetype);
      axios.get(urlArchetype).then((response) => {
        console.log(response.data);
        store.archetype = response.data;
      })
    }
  },
  mounted() {
    document.onreadystatechange = () => {
      if (document.readyState == "complete") {
        this.isloaded = true;
      }
    }
  },
  created() {
    this.getCards();
    this.getArchetypes();
  }
}
</script>

<style lang="scss" scoped></style>