<script>

export default{
  name:'Card'
}
</script>

<template>

  <div class="col">
    <div class="card">
      <img class="card-img-top" src="https://www.schededidatticheperlascuola.it/wp-content/uploads/2022/03/albero-947x1024.png" alt="">
      <div class="card-body">
        <h1 class="card-title">tit</h1>
        <p class="card-text">text</p>

      </div>

    </div>
  </div>

</template>

<style lang="scss" scoped>

.col{
  .card{
    width: calc(100% / 5);
     img{
      width: 100%;
    }
  }
}


</style>