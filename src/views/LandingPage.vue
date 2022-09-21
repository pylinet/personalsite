<script setup>
import SocialComponents from "../components/SocialComponents.vue";

const greeting = "Hi, I'm Pyline!";

const intro =
  "I’m an architect, design ops leader, and amateur coder. Let's collaborate!";
</script>

<template>
  <div class="container">
    <div class="container-item">
      <img
        src="@/assets/images/portrait.svg"
        alt="Self-portrait illustration by Pyline."
      />
    </div>
    <div class="container-item">
      <h1>{{ greeting }}</h1>
      <p class="text-body-large">
        {{ intro }}
      </p>
      <SocialComponents />
    </div>
  </div>

  <div class="container-gallery">
    <div class="container-gallery-item">
      <img
        src="Hana-WindmillGreen.jpg"
        alt="Windmill Green lobby located in a co-working office designed by CBRE."
      />
    </div>
    <div class="container-gallery-item">
      <img src="SHoPUber.jpg" />
    </div>
    <div class="container-gallery-item">
      <img
        src="CottageIllustrationInterior.jpg"
        alt="Interior view of a multi-story vertical garden at Uber's headquarters in San Francisco."
      />
    </div>
  </div>
</template>
