<script setup>
import SingleProjectPage from "../components/SingleProjectPage.vue";

// images
import headerImage from "../assets/wxy-architects/wxy-javits-center-exterior.jpg";
import image1 from "../assets/wxy-architects/wxy-javits-center-interior-sunset.jpg";
import image2 from "../assets/wxy-architects/wxy-javits-center-ceiling-drawing.jpg";
import image3 from "../assets/wxy-architects/wxy-javits-center-event.jpg";

const items = {
  title: "A rooftop pavilion in NYC.",
  companyName: "WXY Studio",
  companyLink:
    "http://www.wxystudio.com/projects/architecture/jacob_k_javits_convention_center_expansion",
  companyAbout:
    "WXY is an award-winning architecture and urban design firm whose projects focus on placemaking, urban design and thoughtfully crafted spaces. Jacob K. Javits center is undergoing a 1.2 million square feet design-build expansion, led by LendLease, Turner Construction, and TVS design. WXY is the associate architecture firm working on a 16,000 square foot pavilion atop of the expansion situated between an event plaza and a rooftop farm. The pavilion is an industrial shed with a sawtooth profile. The exterior is clad in standing seam aluminum and the primary feature is a 20 foot wide glass garage door that opens towards the event plaza. The tapered columns and bow trusses allow for a structure free interior suitable for events, such as conferences, lectures, banquet dining, and performances.\n\nI was part of a team of 3 and I led the creation of several geometric design options during DD and the documentation/detailing efforts during CD.",
  companyRole1: "Architectural and Urban Designer from Oct 2016 to Jan 2018",
  companyRole2: "",
  headerImage,
  headerImageAlt:
    "View of the exterior of a rooftop pavilion with the skyline in the background.",
  headerImageTitle: "Photo © WXY Studio.",
  image1,
  image1Alt:
    "Interior of WXY's Javits pavilion, which is made out of steel and glass.",
  image1Title: "Photo © WXY Studio.",
  image2,
  image2Alt:
    "Reflected ceiling plan drawing showing lighting and duct locations.",
  image2Title: "Drawing © WXY Studio.",
  image3,
  image3Alt: "Picture of a happy hour on the Javits rooftop pavilion.",
  image3Title: "Photo © WXY Studio.",
  prevProject: "AirtablePage",
  nextProject: "SHoPPage",
};
</script>

<template>
  <div>
    <SingleProjectPage v-bind="items" />
  </div>
</template>
