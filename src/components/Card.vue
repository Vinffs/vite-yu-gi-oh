<template>
  <div class="row gapping">
    <h2 class="text-center">{{ store.cards.length }} Cards</h2>
    <div class="col-12 col-md-4 col-lg-2 my-3" v-for="card in store.cards">
      <CardComponent :image="imgUrl(card.id)" :title="card.name" :text="card.race" />
    </div>
  </div>
</template>

<script>
import { store } from '../data/store.js';
import CardComponent from './CardComponent.vue';
export default {
  name: 'Card',
  components: {
    CardComponent,
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    imgUrl(id) {
      return `https://images.ygoprodeck.com/images/cards/${id}.jpg`;
    },
    loadMore() {
      store.params.num += 30;
    }
  }

}
</script>

<style lang="scss" scoped>
.gapping {
  padding-top: 150px;
}
</style>