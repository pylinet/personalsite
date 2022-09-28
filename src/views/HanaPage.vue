<script setup>
import ProjectPage from "../components/ProjectPage.vue";

// images
import headerimage from "../assets/Hana/Hana-1818MarketReception.jpg";
import image1 from "../assets/Hana/Hana-WindmillGreen.jpg";
import image2 from "../assets/Hana/Hana-1818DrawingSet.jpg";
import image3 from "../assets/Hana/Hana-3WorldTradeCoWorking.jpg";

const items = {
  title: "A flexible office product by CBRE.",
  companyname: "Hana by CBRE",
  companylink:
    "https://www.industriousoffice.com/blog/industrious/cbre-transfers-its-flexible-workspace-brand-hana-to-industrious",
  companyabout:
    "CBRE, the world’s largest global commercial real estate services firm, started a wholly-owned subsidiary called Hana, which focused on delivering co-working spaces across the world. The vision was to create inspiring and comfortable environments for our members to work, meet, and collaborate. Every Hana space consists of a mix of private team suites, conference rooms, and shared workspaces and lounges, all designed to give maximum flexibility and customization to Hana members. As the first Senior Designer on the physical product team, I worked directly under the VP of Product Design to launch our first Revit and BIM workflow, which would eventually develop into a robust set of standards that supported 5 team members and +10 submitted plan sets across the team. As a Design Manager, I spearheaded documenting our space standards to ensure consistency and alignment across the company.",
  companyrole1: "Design Manager from Jan 2021 to May 2021",
  companyrole2: "Senior Designer from April 2019 to Dec 2020",
  headerimage,
  headerimagealt: "",
  image1,
  image1alt: "",
  image2,
  image2alt: "",
  image3,
  image3alt: "",
  prevproject: "SHoPPage",
  nextproject: "CottagePage",
};
</script>

<template>
  <div>
    <ProjectPage v-bind="items" />
  </div>
</template>
