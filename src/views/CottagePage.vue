<script setup>
import SingleProjectPage from "../components/SingleProjectPage.vue";

//images
import headerImage from "../assets/cottage-adus/cottage-integrum-los-gatos.jpg";
import image1 from "../assets/cottage-adus/cottage-3D-drawing.png";
import image2 from "../assets/cottage-adus/cottage-elevations-and-sections.jpg";
import image3 from "../assets/cottage-adus/cottage-adu-construction.jpg";

const items = {
  title: "A start-up reinveting residential design.",
  companyName: "Cottage",
  companyLink: "https://www.cotta.ge/featured",
  companyAbout:
    "Cottage is a team of architects, builders, sales, and operation managers committed to solving housing affordability by making it easy to build an accessory dwelling unit (ADU). The company’s goal is to deliver custom ADUs at a fraction of the cost and timeline of traditional architecture. To serve clients, Cottage built a design studio for freelance architectural designers and consultancies, along with design systems platforms to supercharge their work.\n \nI joined Cottage when it was a seed-stage company as its first Design Studio Ops Manager, and my role was to manage and onboard the Cottage designers. As a business operations leader, I focused on developing playbooks to scale studio management, mentored and trained designers, and developed performance tracking mechanisms to measure my OKRs. In order to measure each designer's performance, I built a task & performance tracking system using Google App Scripts and Airtable. In addition to running the studio, I designed and delivered +10 ADUs from schematic design to permit submission.",
  companyRole1: "Design Studio Operations Manager from July 2021 to May 2022",
  companyRole2: "",
  headerImage,
  headerImageAlt:
    "An accessory dwelling unit interior 3D rendering showing the living room and kitchen.",
  headerImageTitle: "Photo © Pyline Tangsuvanich.",
  image1,
  image1Alt: "3D Axonometric drawing of an accessory dwelling unit design.",
  image1Title: "Photo © Pyline Tangsuvanich.",
  image2,
  image2Alt:
    "Elevation and section architectural drawings of the accessory dwelling unit.",
  image2Title: "Photo © Pyline Tangsuvanich.",
  image3,
  image3Alt: "Photo of an accessory dwelling unit under construction.",
  image3Title: "Photo © Pyline Tangsuvanich.",
  prevProject: "SHoPPage",
  nextProject: "HanaPage",
};
</script>

<template>
  <div>
    <SingleProjectPage v-bind="items" />
  </div>
</template>
