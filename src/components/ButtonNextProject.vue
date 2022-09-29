<!-- This is a button to go to the next project page. -->

<script setup>
// Import graphic for use in component.
import rightArrow from "../assets/navigation-icons/right-arrow.svg";
defineProps(["nextProject"]);
</script>

<template>
  <router-link class="button" :to="{ name: nextProject }">
    <div class="container-button">
      <div class="container-button-item">
        <p class="text-body">Next Project</p>
      </div>
      <div class="container-button-item">
        <img :src="rightArrow" height="15" />
      </div>
    </div>
  </router-link>
</template>
 