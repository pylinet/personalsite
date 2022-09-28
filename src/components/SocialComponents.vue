<script setup>
import ButtonSocial from "./ButtonSocial.vue";

// images
import linkedinIcon from '../assets/Social/linkedinicon.svg'
import githubIcon from '../assets/Social/githubicon.svg'
import emailIcon from '../assets/Social/emailicon.svg'
import instagramIcon from '../assets/Social/instagramicon.svg'

const items = {
  Linkedin: {
    externalurl: "https://www.linkedin.com/in/pyline/",
    iconpath: linkedinIcon,
  },
  Github: {
    externalurl: "https://github.com/pylinet",
    iconpath: githubIcon,
  },
  Email: {
    externalurl: "mailto:pylinet@gmail.com",
    iconpath: emailIcon,
  },
  Instagram: {
    externalurl: "https://www.instagram.com/thelifeofpy/",
    iconpath: instagramIcon,
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
