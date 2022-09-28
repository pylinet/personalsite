<script setup>
import ButtonNextProject from "./ButtonNextProject.vue";
import ButtonPrevProject from "./ButtonPrevProject.vue";
import ButtonBackToTop from "./ButtonBackToTop.vue";

// define properties that will be used in components

defineProps(["prevproject", "nextproject"]);
</script>

<template>
  <div class="container-button">
    <router-link class="social" :to="{name: prevproject}">
      <ButtonPrevProject></ButtonPrevProject>
    </router-link>
    <ButtonBackToTop class="social"></ButtonBackToTop>
    <router-link class="social" :to="{name: nextproject}">
      <ButtonNextProject></ButtonNextProject>
    </router-link>
  </div>
</template>
