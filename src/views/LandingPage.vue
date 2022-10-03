<!-- The landing page is the home page. -->

<script setup>
import ButtonBackToTop from "../components/ButtonBackToTop.vue";
import LandingPageIntroBlurb from "../components/LandingPageIntroBlurb.vue";
import LandingPageProjectGallery from "../components/LandingPageProjectGallery.vue";
</script>

<template>
  <div>
    <div class="layout">
      <LandingPageIntroBlurb></LandingPageIntroBlurb>
      <br />
      <LandingPageProjectGallery></LandingPageProjectGallery>
      <div class="container">
        <ButtonBackToTop></ButtonBackToTop>
      </div>
    </div>
  </div>
</template>
