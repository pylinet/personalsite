<!-- This is a button to go to the previous project page. -->

<script setup>
import leftArrow from "../assets/navigation-icons/left-arrow.svg";

defineProps(["prevProject"]);
</script>

<template>
  <router-link class="button" :to="{ name: prevProject }">
    <div class="container-button">
      <div class="container-button-item">
        <img :src="leftArrow" height="15" />
      </div>
      <div class="container-button-item">
        <p class="text-body">Previous Project</p>
      </div>
    </div>
  </router-link>
</template>
