<script setup>
import FooterComponent from "../components/FooterComponent.vue";
import ButtonBackToTop from "../components/ButtonBackToTop.vue";
import AboutMe from "../components/AboutMe.vue";
import ProjectGallery from "../components/ProjectGallery.vue";
</script>

<template>
  <div>
    <div class="layout">
      <AboutMe></AboutMe>
      <ProjectGallery></ProjectGallery>
      <div class="container">
        <ButtonBackToTop></ButtonBackToTop>
      </div>
    </div>
    <FooterComponent></FooterComponent>
  </div>
</template>
