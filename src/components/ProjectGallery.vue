<script setup>
import ProjectThumbnail from "./ProjectThumbnail.vue";

const items = {
  Hana: {
    name: "HanaPage",
    slide: "/Hana-WindmillGreen.jpg",
    projecturl: "/hana",
    alt: "Windmill Green lobby located in a co-working office designed by CBRE.",
    hover: "CBRE Hana Co-Working",
  },
  Cottage: {
    name: "CottagePage",
    slide: "/Cottage-IllustrationInterior.jpg",
    projecturl: "/cottage",
    alt: "Accessory dwelling unit interior rendering.",
    hover: "Cottage ADUs",
  },
  WXY: {
    name: "WXYPage",
    slide: "/WXY-Javits.jpg",
    projecturl: "/WXY",
    alt: "Rooftop pavilion at the Javits Center in New York City.",
    hover: "WXY Studio",
  },
  SHoP: {
    name: "SHoPPage",
    slide: "/SHoP-Uber.jpg",
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
