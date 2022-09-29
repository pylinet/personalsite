<!-- Component to display all social media icon links. -->

<script setup>
import SocialButton from "./SocialButton.vue";

// Import icons
import linkedinIcon from "../assets/social-icons/linkedin-icon.svg";
import githubIcon from "../assets/social-icons/github-icon.svg";
import emailIcon from "../assets/social-icons/email-icon.svg";
import instagramIcon from "../assets/social-icons/instagram-icon.svg";

const items = {
  Linkedin: {
    externalUrl: "https://www.linkedin.com/in/pyline/",
    iconPath: linkedinIcon,
    alt: "Link to Pyline's Linkedin.",
  },
  Github: {
    externalUrl: "https://github.com/pylinet",
    iconPath: githubIcon,
    alt: "Link to Pyline's GitHub.",
  },
  Email: {
    externalUrl: "mailto:pylinet@gmail.com",
    iconPath: emailIcon,
    alt: "Link to Pyline's email.",
  },
  Instagram: {
    externalUrl: "https://www.instagram.com/thelifeofpy/",
    iconPath: instagramIcon,
    alt: "Link to Pyline's Instagram.",
  },
};
</script>

<template>
  <div class="container-social">
    <div v-for="item in items" v-bind:key="item">
      <SocialButton v-bind="item" />
    </div>
  </div>
</template>

<style scoped>
.container-social {
  display: flex;
  flex-direction: row;
  gap: 30px;
  align-items: center;
}
</style>
