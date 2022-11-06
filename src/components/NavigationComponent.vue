<!-- Component shown on all pages. Rendered in App.vue file. -->

<script setup>
import SocialComponents from "./SocialComponents.vue";
</script>

<template>
  <nav class="nav-bar">
    <router-link :to="{ name: 'LandingPage' }">
      <img
        src="/public/pyline-tangsuvanich-leaf-logo.svg"
        alt="Click to go back to home page."
      />
    </router-link>
    <!-- <ul class="nav-links">
      <router-link :to="{ name: 'AboutPage' }"
        ><li><a class="button" href="about.asp">About</a></li>
      </router-link>
      <li><a class="social" href="blog.asp">Blog</a></li>
    </ul> -->
    <SocialComponents></SocialComponents>
  </nav>
</template>

<style scoped>
/* Navigation Bar */

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

.nav-bar {
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
