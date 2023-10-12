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
        <Card v-for="(item,index) in store" :key="index"
        :image="https://www.schededidatticheperlascuola.it/wp-content/uploads/2022/03/albero-947x1024.png" 
        :title="item.name"
        :text="item.archetype"
        
        ></Card>
        

      </div>

    </div>


  </main>

</template>

<style lang="scss" scoped>

@use '../sass/_variabiles' as *;

main{
  background-color: $bg-color;
  height: calc(100vh - 60px);
}


</style>