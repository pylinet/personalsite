<script setup>
import ProjectPage from "../components/ProjectPage.vue";

//images
import headerimage from "../assets/Cottage/Cottage-IllustrationInterior.jpg";
import image1 from "../assets/Cottage/Cottage-Axon.png";
import image2 from "../assets/Cottage/Cottage-ElevationsAndSections.jpg";
import image3 from "../assets/Cottage/Cottage-ADUConstruction.jpg";
import baseUrl from "../base";


const items = {
  title: "A start-up reinveting residential design.",
  companyname: "Cottage",
  companylink: "https://www.cotta.ge/featured",
  companyabout:
    "Cottage is a team of architects, builders, sales, and operation managers committed to solving housing affordability by making it easy to build an accessory dwelling unit (ADU). The company’s goal is to deliver custom ADUs at a fraction of the cost and timeline of traditional architecture. To serve clients, Cottage built a design studio for freelance architectural designers and consultancies, along with design systems platforms to supercharge their work.  I joined Cottage when it was a seed-stage company as its first Design Studio Manager, and my role was to manage and grow the design studio. As a business operations leader, I focused on developing playbooks to scale studio management, mentored and trained designers, and developed performance tracking mechanisms to measure my OKR’s. In addition to running the studio, I designed and delivered +10 ADU’s from schematic design to permit submission, some of which are demonstrated on the following 2 pages.",
  companyrole1: "Design Studio Manager from July 2021 - May 2022",
  companyrole2: "",
  headerimage,
  headerimagealt: "Interior 3D rendering of a living room and kitchen.",
  image1,
  image1alt: "3D Axonometric drawing of an accessory dwelling unit design.",
  image2,
  image2alt: "Axonometric drawing of a Cottage ADU.",
  image3,
  image3alt: "Photo of an accessory dwelling unit under construction.",
  prevproject: baseUrl + "hana", name: "HanaPage", component: HanaPage,
  nextproject: baseUrl + "wxy", name: "WXYPage", component: WXYPage,
};




</script>

<template>
  <div>
    <ProjectPage v-bind="items" />
  </div>
</template>



