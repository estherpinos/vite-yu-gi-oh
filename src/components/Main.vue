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
  },
  methods:{
    
  }

}

</script>

<template>

  <main class="pt-5">
    <select name="" class="form-select" id="" v-model="store.selectedArchetype" @change="$emit('search')">
      <option selected>All cards</option>  
      <option v-for="(item,index) in store.listaNomi"
      :key="index"
      > {{ item.archetype_name}}</option>
    </select>
    <div class="container-ep p-4">
      <div class="bar-black bg-black row" ></div>
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

  .form-select{
    width: 200px;
    margin-left: 60px;
    margin-bottom: 30px;
  }

  .container-ep{
    background-color: white;
    padding: 20px;
    width: 90%;
    margin: 0 auto;

      .bar-black{
        height: 30px;
        width: 100%;
        margin: 0 auto;
      }
  
    
  }
  
}


</style>