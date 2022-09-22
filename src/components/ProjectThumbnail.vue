<script setup>
// define properties that will be used in components

defineProps(["projecturl", "slide", "alt", "hover"]);
</script>

<template>
  <div class="container-gallery">
    <router-link class="container-gallery-item" :to="projecturl">
      <img class="container-image" :src="slide" :alt="alt" />
      <div class="fullcap">
        <h2>{{ hover }}</h2>
      </div>
    </router-link>
  </div>
</template>
