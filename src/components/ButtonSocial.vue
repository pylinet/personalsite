<script setup>
defineProps(["externalurl", "iconpath"]);
</script>

<template>
  <a
    class="social"
    :href="externalurl"
    target="_blank"
    rel="noreferrer noopener"
    ><img :src="iconpath"
  /></a>
</template>
