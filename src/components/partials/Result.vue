<script>
import { store } from '../../data/store';
export default{
  name:'Result',
  data(){
    return{
      store
    }
  },
  computed:{
    numeroRisultati(){
      return "Found "+ store.charctersList.length +" Cards";
    }
  }

}
</script>

<template>
  <p class="text-white m-0">{{ numeroRisultati }}</p>
</template>

<style>

</style>