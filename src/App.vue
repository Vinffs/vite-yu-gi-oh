<template>
  <PagePreloader v-if="!isloaded" />
  <div>
    <NavBar @change-select="filterCard" />
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
      key: null,
    }
  },
  methods: {
    getCards() {
      const urlCards = store.apiUrl + store.cardInfo;
      axios.get(urlCards, { params: store.params }).then((response) => {
        store.cards = response.data.data;
      })
    },
    getArchetypes() {
      const urlArchetype = store.apiUrl + store.archetypeUrl;
      axios.get(urlArchetype).then((response) => {
        store.archetype = response.data;
      })
    },
    filterCard(select) {
      if (select) {
        this.key = {
          archetype: select,
        }
      } else {
        this.key = null;
      }

      this.getFiltered();

    },
    getFiltered() {
      const urlCards = store.apiUrl + store.cardInfo;
      axios.get(urlCards, { params: this.key }).then((response) => {
        store.cards = response.data.data;
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