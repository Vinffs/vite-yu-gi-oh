import { reactive } from "vue";
export const store = reactive({
  apiUrl: "https://db.ygoprodeck.com/api/v7/",
  cardInfo: "cardinfo.php",
  archetypeUrl: "archetypes.php",
  cards: [],
  archetype: [],
});
