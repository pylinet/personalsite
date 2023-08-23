<script setup>
import SingleProjectPage from "../components/SingleProjectPage.vue";

//images
import headerImage from "../assets/airtable-interface/airtable-scroll.gif";
import image1 from "../assets/airtable-interface/airtable-data-diagram.png";
import image2 from "../assets/airtable-interface/airtable-dream-home-base-design.jpg";
import image3 from "../assets/airtable-interface/airtable-listing-view.jpg";

const items = {
  title: "Dream Home Finder.",
  companyName: "N/A",
  companyLink: "https://www.airtable.com/universe/exp1DT8OewoGa9BE0/dream-home-finder",
  companyAbout:
    "In today’s world, house hunting is a stressful endeavor. Not only do buyers have to deal with people outbidding them, rising interest rates, and a shortage in supply, but they also have to manage all the data associated with a piece of real estate. As first time home buyers, my partner and I needed a solution to manage all of this information in a single place. This is especially helpful if buyers are sourcing leads from multiple marketplaces and owners who don’t have public listings. My goal with this Airtable Base & Interface design is to remove the friction on house hunting data management so that home buyers can spend more time analyzing their options and going on open house visits (the fun part!) \n\nPlaced 3rd for Best Design in Airtable's Interface Contest.",
  companyRole1: "Independent Project Completed Sept 2022",
  companyRole2: "",
  headerImage,
  headerImageAlt:
    "Diagram showing data flow using Zillow and Bankrate into Airtable.",
  headerImageTitle: "Diagram © Pyline Tangsuvanich.",
  image1,
  image1Alt: "Airtable database showing housing listings.",
  image1Title: "Photo © Pyline Tangsuvanich.",
  image2,
  image2Alt:
    "Elevation and section architectural drawings of the accessory dwelling unit.",
  image2Title: "Photo © Pyline Tangsuvanich.",
  image3,
  image3Alt: "Photo of an accessory dwelling unit under construction.",
  image3Title: "Photo © Pyline Tangsuvanich.",
  prevProject: "HanaPage",
  nextProject: "WXYPage",
};
</script>

<template>
  <div>
    <SingleProjectPage v-bind="items" />
  </div>
</template>
