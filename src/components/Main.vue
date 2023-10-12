<script>

import Card from './partials/Card.vue';

export default{
  name:'Main',
  components:{
    Card
  }

}

</script>

<template>

  <main>
    <div class="container-ep p-3">
      <div class="row">
        <Card></Card>
        

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