<script setup>
import SingleProjectPage from "../components/SingleProjectPage.vue";

//images
import headerImage from "../assets/den/DEN-A-Frame.jpg";
import image1 from "../assets/den/A-Frame Floorplan.jpg";
import image2 from "../assets/den/DEN Initiatives.jpg";
import image3 from "../assets/den/DEN-Revit Transition.jpg";

const items = {
  title: "A start-up reinveting residential design.",
  companyName: "DEN Outdoors",
  companyLink: "https://denoutdoors.com/",
  companyAbout:
    "DEN is design-forward plans package business, with customers all over the world.",
  companyRole1: "Design Director from January 2023 to April 2024",
  companyRole2: "",
  headerImage,
  headerImageAlt:
    "",
  headerImageTitle: "Photo © Pyline Tangsuvanich.",
  image1,
  image1Alt: "",
  image1Title: "Photo © Pyline Tangsuvanich.",
  image2,
  image2Alt:
    "",
  image2Title: "Photo © Pyline Tangsuvanich.",
  image3,
  image3Alt: "",
  image3Title: "Photo © Pyline Tangsuvanich.",
  prevProject: "SHoPPage",
  nextProject: "CottagePage",
};
</script>

<template>
  <div>
    <SingleProjectPage v-bind="items" />
  </div>
</template>
