<template>
  <div>
    <PagePreloader v-if="!isLoaded" />
    <div v-else>
      <NavBar @change-select="filterCard" />
      <div class="container">
        <Card />
      </div>
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
      isLoaded: false,
      key: null,
    };
  },
  methods: {
    filterCard(select) {
      if (select) {
        this.key = {
          archetype: select,
        };
      } else {
        this.key = store.params;
      }
      this.getFiltered();
    },
    getFiltered() {
      const urlCards = store.apiUrl + store.cardInfo;
      axios.get(urlCards, { params: this.key }).then((response) => {
        store.cards = response.data.data;
        this.isLoaded = true;
      });
    },
  },
  mounted() {
    this.getFiltered();
  },
  created() {
    const urlCards = store.apiUrl + store.cardInfo;
    const urlArchetype = store.apiUrl + store.archetypeUrl;

    Promise.all([axios.get(urlCards), axios.get(urlArchetype)])
      .then((results) => {
        store.cards = results[0].data.data;
        store.archetype = results[1].data;
        this.isLoaded = true;
      });

    /*
     created() {
      function getCards() {
        const urlCards = store.apiUrl + store.cardInfo;
        return axios.get(urlCards, { params: store.params })
      }
      function getArchetypes() {
        const urlArchetype = store.apiUrl + store.archetypeUrl;
        return axios.get(urlArchetype)
      }
      Promise.all([getCards(), getArchetypes()])
        .then(function (results) {
          store.cards = results[0].data.data;
          store.archetype = results[1].data;
        })
    }
    */
  },
};
</script>

<style lang="scss" scoped></style>
