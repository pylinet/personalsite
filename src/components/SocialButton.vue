<!-- Individual button component for social media links. -->

<script setup>
defineProps(["externalUrl", "iconPath", "alt"]);
</script>

<template>
  <a
    class="button"
    :href="externalUrl"
    target="_blank"
    rel="noreferrer noopener"
    ><img 
    :src="iconPath"
    :alt="alt"
  /></a>
</template>
