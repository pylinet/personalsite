<!-- This is a the project gallery component shown on the landing page. -->

<script setup>
import LandingPageProjectThumbnail from "./LandingPageProjectThumbnail.vue";

// Gallery images
import hanaSlide from "../assets/hana-co-working/hana-windmill-green-united-kingdom-co-working.jpg";
import cottageSlide from "../assets/cottage-adus/cottage-integrum-los-gatos.jpg";
import wxySlide from "../assets/wxy-architects/wxy-javits-center-exterior.jpg";
import shopUber from "../assets/shop-architects/shop-uber-interior.jpg";
import airtableSlide from "../assets/airtable-interface/airtable-listing-view.jpg";
import denSlide from "../assets/den/DEN-A-Frame.jpg";


// List of project objects and their properties.
const items = {
  DEN: {
    name: "DENPage",
    slide: denSlide,
    alt: "",
    hover: "DEN Outdoors",
  },
  Cottage: {
    name: "CottagePage",
    slide: cottageSlide,
    alt: "An accessory dwelling unit interior 3D rendering showing the living room and kitchen.",
    hover: "Cottage ADUs",
  },
  Hana: {
    name: "HanaPage",
    slide: hanaSlide,
    alt: "A co-working reception desk with warm wood flooring, lush plants, and company logo wall.",
    hover: "CBRE Hana Co-Working",
  },
  Airtable: {
    name: "AirtablePage",
    slide: airtableSlide,
    alt: "An interface to manage your saved property listings when you search for your new home.",
    hover: "Dream Home Finder in Airtable",
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
      <h2>Select projects below 👇.</h2><br>
    <p class="text-body-large">
      Worksample upon
      <i> <a class="button" href="mailto:pylinet@gmail.com"> request.</a></i
      ><br />
      <br />
    </p>
  <!-- This is a loop that displays all of the objects in items in the project thumbnail component.  -->
  <div v-for="item in items" v-bind:key="item" >
    <LandingPageProjectThumbnail v-bind="item" />
  </div>
</template>
