<script setup>
import SocialComponents from "./SocialComponents.vue";
</script>

<template>
  <nav class="navbar">
    <router-link to="/"> <img src="/logo.svg" /></router-link>
    <!-- <ul class="nav-links">
      <li><a class="social" href="about.asp">About</a></li>
      <li><a class="social" href="blog.asp">Blog</a></li>
    </ul> -->
    <SocialComponents></SocialComponents>
  </nav>
</template>

<style>
/* Navigation Bar */

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

.navbar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 100px;
  flex-basis: auto;
  padding-top: 100px;
}

.nav-links {
  list-style: none;
  display: flex;
  flex-direction: row;
  gap: 50px;
  justify-content: space-between;
}
</style>
