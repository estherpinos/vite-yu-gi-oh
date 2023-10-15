<script>

import Card from './partials/Card.vue';
import { store } from '../data/store';

export default{
  name:'Main',
  components:{
    Card
  },
  data(){
    return{
      store
    }
  }

}

</script>

<template>

  <main>
    <div class="container-ep p-3">
      <div class="row">
        <Card v-for="item in store.charctersList" 
        :key="item.id"
        :title="item.name"
        :text="item.archetype"
        :image="item.card_images[0].image_url"
        
        ></Card>
        

      </div>

    </div>


  </main>

</template>

<style lang="scss" scoped>

@use '../sass/_variabiles' as *;

main{
  background-color: $bg-color;

  .container-ep{
    background-color: white;
    padding: 20px;
    width: 90%;
    margin: 0 auto;
    padding-top: 20px;
    
  }
  
}


</style>