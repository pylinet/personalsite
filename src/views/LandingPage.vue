<!-- The landing page is the home page. -->

<script setup>
import ButtonBackToTop from "../components/ButtonBackToTop.vue";
import LandingPageIntroBlurb from "../components/LandingPageIntroBlurb.vue";
import LandingPageProjectGallery from "../components/LandingPageProjectGallery.vue";
import FeaturedLinksComponent from "../components/FeaturedLinksComponent.vue";
</script>

<template>
  <div>
    <div class="layout">
      <LandingPageIntroBlurb></LandingPageIntroBlurb>

      <FeaturedLinksComponent></FeaturedLinksComponent>
      <LandingPageProjectGallery></LandingPageProjectGallery>
      <div class="container" style="justify-content:right">
        <ButtonBackToTop></ButtonBackToTop>
      </div>
    </div>
  </div>
</template>
