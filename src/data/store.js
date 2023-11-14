import { reactive } from "vue";
export const store = reactive({
  apiUrl: "https://db.ygoprodeck.com/api/v7/",
  cardInfo: "cardinfo.php",
  archetypeUrl: "archetypes.php",
  params: {
    num: 30,
    offset: 0,
  },
  cards: [],
  archetype: [],
});
