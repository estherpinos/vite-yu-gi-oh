<script>

export default{
  name:'Header'

}

</script>

<template>

  <header>
    <div class="align-items-center h-100 d-flex ">
      <h1 class="text-black">Yu-Gi-Oh Api</h1>
    </div>

    
  </header>

</template>

<style lang="scss" scoped>

@use '../sass/variabiles' as *;

header{
 height: 60px;
 padding-left: 20px;
 

  & h1{
    font-size: 30px;
    margin: 0;
  }
}

</style>