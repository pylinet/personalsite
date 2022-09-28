<script setup>
import ProjectThumbnail from "./ProjectThumbnail.vue";

// gallery images
import hanaSlide from "../assets/Hana/Hana-WindmillGreen.jpg";
import cottageSlide from "../assets/Cottage/Cottage-IllustrationInterior.jpg";
import wxySlide from "../assets/WXY/WXY-Javits.jpg";
import shopUber from "../assets/SHoP/SHoP-Uber.jpg";

const items = {
  Hana: {
    name: "HanaPage",
    slide: hanaSlide,
    projecturl: "/hana",
    alt: "Windmill Green lobby located in a co-working office designed by CBRE.",
    hover: "CBRE Hana Co-Working",
  },
  Cottage: {
    name: "CottagePage",
    slide: cottageSlide,
    projecturl: "/cottage",
    alt: "Accessory dwelling unit interior rendering.",
    hover: "Cottage ADUs",
  },
  WXY: {
    name: "WXYPage",
    slide: wxySlide,
    projecturl: "/WXY",
    alt: "Rooftop pavilion at the Javits Center in New York City.",
    hover: "WXY Studio",
  },
  SHoP: {
    name: "SHoPPage",
    slide: shopUber,
    projecturl: "/shop",
    alt: "Interior view of a multi-story vertical garden at Uber's headquarters in San Francisco.",
    hover: "SHoP Architects",
  },
};
</script>

<template>
  <div v-for="item in items" v-bind:key="item">
    <ProjectThumbnail v-bind="item" />
  </div>
</template>
