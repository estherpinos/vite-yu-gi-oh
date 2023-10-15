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
      let url="";
      if (store.selectedArchetype=='All cards') {
        url= store.apiUrl;
      }
      else{
        url= store.apiUrlArchetype + store.selectedArchetype;
      }
      axios.get(url)
        .then( res =>{
          store.charctersList = res.data.data;
          console.log(store.charctersList[0].card_images[0].image_url);
        })
        .catch(err => {
          console.log(err);
        })

    },
    getApi2(){
      axios.get(store.apiUrl2)
      .then( res =>{
          store.listaNomi = res.data;
          
        })
        .catch(err => {
          console.log(err);
        })
    },
    ciao(){
      console.log("esthy")
    }
  },
  mounted(){
    this.getApi();
    this.getApi2();
  }

}

</script>
 

<template>
   <Header></Header>
    <Main @search="getApi"></Main>

</template>

<style lang="scss">
@use './sass/main.scss';

</style>
