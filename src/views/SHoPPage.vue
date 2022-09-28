<script setup>
import ProjectPage from "../components/ProjectPage.vue";

// images
import headerimage from "../assets/SHoP/SHoP-Uber.jpg"
import image1 from "../assets/SHoP/SHoP-UberHQModel.jpg";
import image2 from "../assets/SHoP/Uber-DaylightDiagram.jpg";
import image3 from "../assets/SHoP/Uber-ExteriorPhotobyJasonORear.jpg";

const items = {
  title: "A tech HQ in Misison Bay.",
  companyname: "SHoP Architects",
  companylink: "https://www.shoparc.com/projects/uber-hq/",
  companyabout:
    "SHoP Architects is a world-class architecture firm based in NYC. SHoP won an invited competition to design Uber’s new HQ in San Francisco Mission Bay. SHoP led the envelope, retail, and Commons (atrium) design, and Studio O+A led the interior office space design. The 423,000-square-foot project (39,300 square meters) includes an 11-storey tower, connected to an adjoining six-story building with an almost fully transparent facade. A feature known as the Commons—a striking network of circulation and gathering spaces seen in the section model and diagrams in the following pages—will bring the life of the building into contact with the life of the streets. As a Junior Designer at SHoP, I assisted in the concept design process during the competition phase. After the project was awarded to SHoP, I led the fabrication of a 1/4” scale facade model and contributed to facade studies and documentation during DD.",
  companyrole1: "Junior Designer from Sept 2014 - July 2015",
  companyrole2: "",
  headerimage,
  headerimagealt: "Interior photo of Uber's offices in Mission Bay.",
  image1,
  image1alt: "Photo of a 3D physical model of the Uber HQ building.",
  image2,
  image2alt: "Diagram showing how natural daylight enters the building atrium.",
  image3,
  image3alt: "Exterior photo of a building headquarters in San Francisco.",
  prevproject: "/wxy",
  nextproject: "/hana",
};
</script>

<template>
  <div>
    <ProjectPage v-bind="items" />
  </div>
</template>
