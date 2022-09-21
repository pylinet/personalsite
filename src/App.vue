<script setup>
import LandingPage from './views/LandingPage.vue'
import FooterComponent from './components/FooterComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';
</script>

<template>
    <div class="layout">
      <HeaderComponent/>
      <LandingPage/>
  </div>

  <FooterComponent/>

</template>
<style>
  @import "./assets/base.css";
  @import "./assets/mediaqueries.css";
  </style>
  