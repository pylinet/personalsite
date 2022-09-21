<template>
  <div class="carousel-item" v-show="currentSlide === index">
    <img :src="slide" />
  </div>
</template>

<script>
export default {
  props: ["index", "slide"],
};
</script>
