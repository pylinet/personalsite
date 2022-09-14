<script setup>
import LandingPage from './pages/LandingPage.vue'
import FooterComponent from './components/FooterComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';
</script>

<template>
    <div class="layout">
      <HeaderComponent></HeaderComponent>
      <LandingPage></LandingPage>
  </div>

  <FooterComponent></FooterComponent>

</template>
<style>
  @import "./assets/base.css";
  @import "./assets/mediaqueries.css";
  </style>
  