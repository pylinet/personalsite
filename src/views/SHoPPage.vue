<script setup>
import SingleProjectPage from "../components/SingleProjectPage.vue";

// images
import headerImage from "../assets/shop-architects/shop-uber-interior.jpg";
import image1 from "../assets/shop-architects/shop-uber-headquarters-model.jpg";
import image2 from "../assets/shop-architects/shop-uber-daylight-diagram.jpg";
import image3 from "../assets/shop-architects/shop-uber-photo-by-jason-o-rear.jpg";

const items = {
  title: "A tech HQ in Misison Bay.",
  companyName: "SHoP Architects",
  companyLink: "https://www.shoparc.com/projects/uber-hq/",
  companyAbout:
    "SHoP Architects is a world-class architecture firm based in NYC. SHoP won an invited competition to design Uber’s new HQ in San Francisco Mission Bay. SHoP led the envelope, retail, and Commons (atrium) design, and Studio O+A led the interior office space design. The 423,000-square-foot project (39,300 square meters) includes an 11-storey tower, connected to an adjoining six-story building with an almost fully transparent facade. A feature known as the Commons—a striking network of circulation and gathering spaces seen in the section model and diagrams in the following pages—will bring the life of the building into contact with the life of the streets. As a Junior Designer at SHoP, I assisted in the concept design process during the competition phase. After the project was awarded to SHoP, I led the fabrication of a 1/4” scale facade model and contributed to facade studies and documentation during DD.",
  companyRole1: "Junior Designer from Sept 2014 to July 2015",
  companyRole2: "",
  headerImage,
  headerImageAlt: "Interior photo of Uber's offices in Mission Bay.",
  headerImageTitle: "Photo © Jason O'Rear.",
  image1,
  image1Alt: "Photo of a 3D physical model of the Uber HQ building.",
  image1Title: "Photo © SHoP Architects.",
  image2,
  image2Alt: "Diagram showing how natural daylight enters the building atrium.",
  image2Title: "Diagram © SHoP Architects.",
  image3,
  image3Alt: "Exterior photo of a building headquarters in San Francisco.",
  image3Title: "Photo © Jason O'Rear.",
  prevProject: "WXYPage",
  nextProject: "CottagePage",
};
</script>

<template>
  <div>
    <SingleProjectPage v-bind="items" />
  </div>
</template>
