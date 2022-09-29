<!-- This is a back to the top button component found on the bottom of each web page. -->

<script setup>
// Import graphic for use in component.
import northArrow from "../assets/navigation-icons/north-arrow.svg";

// Function that upon click from user, moves web page back to the top.
function moveUp() {
  window.scrollTo(0, 0);
}
</script>

<template>
  <router-link class="button" to @click="moveUp">
    <div class="container-button">
      <div class="container-button-item">
        <p class="text-body">Back to the Top</p>
      </div>
      <div class="container-button-item">
        <img :src="northArrow" height="20" />
      </div>
    </div>
  </router-link>
</template>
