<script setup>
import ProjectPage from "../components/ProjectPage.vue";

const items = {
  title: "A start-up reinveting residential design.",
  companyname: "Cottage",
  companylink: "https://www.cotta.ge/featured",
  companyabout:
    "Cottage is a team of architects, builders, sales, and operation managers committed to solving housing affordability by making it easy to build an accessory dwelling unit (ADU). The company’s goal is to deliver custom ADUs at a fraction of the cost and timeline of traditional architecture. To serve clients, Cottage built a design studio for freelance architectural designers and consultancies, along with design systems platforms to supercharge their work.  I joined Cottage when it was a seed-stage company as its first Design Studio Manager, and my role was to manage and grow the design studio. As a business operations leader, I focused on developing playbooks to scale studio management, mentored and trained designers, and developed performance tracking mechanisms to measure my OKR’s. In addition to running the studio, I designed and delivered +10 ADU’s from schematic design to permit submission, some of which are demonstrated on the following 2 pages.",
  companyrole1: "Design Studio Manager from July 2021 - May 2022",
  companyrole2: "",
  headerimage: "/Cottage-IllustrationInterior.jpg",
  headerimagealt: "Interior 3D rendering of a living room and kitchen.",
  image1: "/Cottage-Axon.png",
  image1alt: "3D Axonometric drawing of an accessory dwelling unit design.",
  image2: "/Cottage-ElevationsAndSections.jpg",
  image2alt: "Axonometric drawing of a Cottage ADU.",
  image3: "/Cottage-ADUConstruction.jpg",
  image3alt: "Photo of an accessory dwelling unit under construction.",
  prevproject: "/hana",
  nextproject: "/wxy",
};
</script>

<template>
  <div>
    <ProjectPage v-bind="items" />
  </div>
</template>
