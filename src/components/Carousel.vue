<template>
<b-carousel
  id="carousel1"
  style="text-shadow: 1px 1px 2px #333;"
  controls
  indicators
  background="#ababab"
  img-width="1600"
  img-height="1015"
  v-model="slide"
  :interval="5000"
  class="carousel-image"
>
  <a
    v-for="(item, index) in items"
    :key="index"
    :href="item.link"
    target="_blank"
  >
    <b-carousel-slide class="carousel-item" >
        <img
          slot="img"
          class="d-block img-fluid"
          :src="item.img"
          alt="slide"
        />
      <h3 slot="caption">{{ item.text }}</h3>
    </b-carousel-slide>
  </a>
</b-carousel>
  </template>
  
  <script>
  export default {
    props: {
        items:{
            type: Array,
            required: true
        }

    },
    data() {
      return {
        slide: 0,
      };
    },
  };
  </script>

<style scoped>
.carousel {
  background: transparent !important;
}
/* .carousel-image {
  object-fit: contain; 
  width: 100%; 
  height: 100%; 
}
.carousel-item {
  background-size: contain !important; 
  background-position: center !important; 
} */

/* .d-block {
  width: 100%;
  height: 40vh;
  object-fit: cover;
} */
</style>