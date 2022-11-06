<!-- Main app vue file that gets rendered. -->

<script setup>
import NavigationComponent from "./components/NavigationComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
</script>

<template>
  <div class="layout"><NavigationComponent></NavigationComponent></div>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" :key="$route.path"></component>
    </transition>
  </router-view>
  <FooterComponent></FooterComponent>
</template>

<style scoped>
/* Import css files for styling. */
@import "./assets/base.css";
@import "./assets/mediaqueries.css";

/* Animation to fade the entire web app onto the screen. */

.fade-enter-active,
.face-enter-to,
.fade-leave-active {
  transition: opacity .3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
