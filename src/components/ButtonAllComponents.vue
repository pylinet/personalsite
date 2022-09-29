<!-- This component contains all 3 navigation buttons (next, top, previous) -->
<script setup>
// Import the 3 buttons into this file

import ButtonNextProject from "./ButtonNextProject.vue";
import ButtonPrevProject from "./ButtonPrevProject.vue";
import ButtonBackToTop from "./ButtonBackToTop.vue";

// Define properties that will be used in components
defineProps(["prevProject", "nextProject"]);
</script>

<template>
  <div class="container-all-buttons">
    <!-- V-bind the properties to components -->
    <ButtonPrevProject :prevProject="prevProject"></ButtonPrevProject>
    <ButtonBackToTop></ButtonBackToTop>
    <ButtonNextProject :nextProject="nextProject"></ButtonNextProject>
  </div>
</template>
