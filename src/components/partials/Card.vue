<script>

export default{
  name:'Card',
  props:{
    image: String,
    title: String,
    text: String
  },

  methods:{
    getImagePath(img){
      return new URL(`../assets/img/${img}`, import.meta.url).href;
    }
  }
}
</script>

<template>

  <div class="col1">
    <div class="">
      <img class="card-img-top" src="image">
      <div class="card-body">
        <h1 class="card-title">{{ title }}</h1>
        <p class="card-text">{{text}}</p>

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
   
     img{
      width: 100%;
    }
  }
}


</style>