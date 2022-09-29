<!-- This is a the project gallery component shown on the landing page. -->

<script setup>
import LandingPageProjectThumbnail from "./LandingPageProjectThumbnail.vue";

// Gallery images
import hanaSlide from "../assets/hana-co-working/hana-windmill-green-united-kingdom-co-working.jpg";
import cottageSlide from "../assets/cottage-adus/cottage-illustration-interior.jpg";
import wxySlide from "../assets/wxy-architects/wxy-javits-center-exterior.jpg";
import shopUber from "../assets/shop-architects/shop-uber-headquarters-model.jpg";

// List of project objects and their properties.
const items = {
  Hana: {
    name: "HanaPage",
    slide: hanaSlide,
    alt: "A co-working reception desk with warm wood flooring, lush plants, and company logo wall.",
    hover: "CBRE Hana Co-Working",
  },
  Cottage: {
    name: "CottagePage",
    slide: cottageSlide,
    alt: "An accessory dwelling unit interior 3D rendering showing the living room and kitchen.",
    hover: "Cottage ADUs",
  },
  WXY: {
    name: "WXYPage",
    slide: wxySlide,
    alt: "Rooftop pavilion at the Javits Center in New York City.",
    hover: "WXY Studio",
  },
  SHoP: {
    name: "SHoPPage",
    slide: shopUber,
    alt: "Interior view of a multi-story vertical garden at Uber's headquarters in San Francisco.",
    hover: "SHoP Architects",
  },
};
</script>

<template>
  <!-- This is a loop that displays all of the objects in items in the project thumbnail component.  -->
  <div v-for="item in items" v-bind:key="item">
    <LandingPageProjectThumbnail v-bind="item" />
  </div>
</template>
