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

  <div class="col">
    <div class="card">
      <img class="card-img-top" :src="getImagePath(image)" alt="">
      <div class="card-body">
        <h1 class="card-title">{{ title }}</h1>
        <p class="card-text">{{text}}</p>

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