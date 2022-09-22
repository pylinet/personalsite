<script setup>
import ButtonSocial from "./ButtonSocial.vue";
const items = {
  Linkedin: {
    externalurl: "https://www.linkedin.com/in/pyline/",
    iconpath: "src/assets/icons/linkedinicon.svg",
  },
  Github: {
    externalurl: "https://www.linkedin.com/in/pyline/",
    iconpath: "src/assets/icons/githubicon.svg",
  },
  Email: {
    externalurl: "mailto:pylinet@gmail.com",
    iconpath: "src/assets/icons/emailicon.svg",
  },
  Instagram: {
    externalurl: "https://www.instagram.com/thelifeofpy/",
    iconpath: "src/assets/icons/instagramicon.svg",
  },
};
</script>

<template>
  <div class="container-social">
    <div v-for="item in items" v-bind:key="item">
      <ButtonSocial v-bind="item" />
    </div>
  </div>
</template>

<style>
.container-social {
  display: flex;
  flex-direction: row;
  gap: 30px;
  align-items: center;
}
</style>
