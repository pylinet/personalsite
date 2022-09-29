<!-- This is a the individual project container shown in the project gallery component. -->

<script setup>
// Define properties that will be used in components

defineProps(["slide", "alt", "hover", "name"]);
</script>

<template>
  <div class="container-gallery">
    <router-link class="container-gallery-item" :to="{ name: name }">
      <img class="container-image" :src="slide" :alt="alt" />
      <div class="fullcap">
        <h2>{{ hover }}</h2>
      </div>
    </router-link>
  </div>
</template>
