import { reactive } from 'vue';

// le proprietà dello'oggetto reactive sono proprità reattive 
export const store = reactive({
  apiUrl: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0',
  charctersList: [],
  apiUrl2:'https://db.ygoprodeck.com/api/v7/archetypes.php',
  listaNomi:[]

})