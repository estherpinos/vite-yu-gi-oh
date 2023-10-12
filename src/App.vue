<script>

import Header from './components/header.vue';
import Main from './components/main.vue';
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
          store.charctersList = res.data.results;
          console.log(store.charctersList);
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
