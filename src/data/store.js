import { reactive } from 'vue';

// le proprietà dello'oggetto reactive sono proprità reattive 
export const store = reactive({
  apiUrl: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=100&offset=0',
  apiUrlArchetype: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=',
  charctersList: [],
  apiUrl2:'https://db.ygoprodeck.com/api/v7/archetypes.php',
  listaNomi:[],
  selectedArchetype:"All cards"

})