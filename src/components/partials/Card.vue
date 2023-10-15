<script>

export default{
  name:'Card',
  props:{
    image: String,
    title: String,
    text: String
  },
}
</script>

<template>

  <div class="col1">
    <div class=" card">
      <img class="card-img-top" :src="image">
      <div class="card-body">
        <h5 class="card-title text-center text-uppercase text-white">{{ title }}</h5>
        <p class="card-text text-center">{{text}}</p>

      </div>

    </div>
  </div>

</template>

<style lang="scss" scoped>

.col1{
    width: 20%;
    margin: 0;
    padding: 10px;
  .card{
    background-color: #D48F38;
    height: 350px;
   
     img{
      width: 100%;
    }
    .card-body{
      & h5{
        font-size: small;
        }
      }
      & p{
        font-size: small;
      }
  }
}


</style>