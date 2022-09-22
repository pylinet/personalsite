<script setup>
import HeaderComponent from "./components/HeaderComponent.vue";
</script>

<template>
  <div class="layout"><HeaderComponent></HeaderComponent></div>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" :key="$route.path"></component>
    </transition>
  </router-view>
</template>
<style>
@import "./assets/base.css";
@import "./assets/mediaqueries.css";

.fade-enter-active,
.face-enter-to,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
