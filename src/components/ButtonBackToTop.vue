<template>
  <router-link to @click="moveUp">
    <div class="container-button social">
      <div class="container-button-item">
        <p class="text-body">Back to the Top</p>
      </div>
      <div class="container-button-item">
        <img :src="northArrow" height="20" />
      </div>
    </div>
  </router-link>
</template>

<script setup>
import northArrow from "../assets/Navigation/northarrow.svg";

function moveUp() {
  window.scrollTo(0, 0);
}
</script>
