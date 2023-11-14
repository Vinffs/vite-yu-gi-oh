import { reactive } from "vue";
export const store = reactive({
  apiUrl: "https://db.ygoprodeck.com/api/v7/",
  cardInfo: "cardinfo.php",
  archetype: "archetypes.php",
  params: {
    num: 20,
    offset: 0,
  },
  cards: [],
  archetype: [],
});
