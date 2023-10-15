<script>

import Header from './components/Header.vue';
import Main from './components/Main.vue';
import {store} from './data/store';
import axios from 'axios';


export default{
  name:'App',
  components:{
    Header,
    Main
  },
  data(){
    return{
      store
    }
  },
  methods:{
    getApi(){
      axios.get(store.apiUrl)
        .then( res =>{
          store.charctersList = res.data.data;
          console.log(store.charctersList[0].card_images[0].image_url);
        })
        .catch(err => {
          console.log(err);
        })

    }
  },
  mounted(){
    this.getApi();
  }

}

</script>
 

<template>
   <Header></Header>
    <Main></Main>

</template>

<style lang="scss">
@use './sass/main.scss';

</style>
