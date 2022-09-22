<script setup>
import ProjectPage from "../components/ProjectPage.vue";

const items = {
  title: "A rooftop pavilion in NYC.",
  companyname: "WXY studio",
  companylink:
    "http://www.wxystudio.com/projects/architecture/jacob_k_javits_convention_center_expansion",
  companyabout:
    "WXY is an award-winning architecture and urban design firm whose projects focus on placemaking, urban design and thoughtfully crafted spaces. Jacob K. Javits center is undergoing a 1.2 million square feet design-build expansion, led by LendLease, Turner Construction, and TVS design. WXY is the associate architecture firm working on a 16,000 square foot pavilion atop of the expansion situated between an event plaza and a rooftop farm. The pavilion is an industrial shed with a sawtooth profile. The exterior is clad in standing seam aluminum and the primary feature is a 20 foot wide glass garage door that opens towards the event plaza. The tapered columns and bow trusses allow for a structure free interior suitable for events, such as conferences, lectures, banquet dining, and performances.  I was part of a team of 3 and I led the creation of several geometric design options during DD and the documentation/detailing efforts during CD.",
  companyrole1: "Architectural and Urban Designer from Oct 2016 - Jan 2018",
  companyrole2: "",
  headerimage: "/src/assets/images/WXY-Javits.jpg",
  headerimagealt:
    "View of the exterior of a rooftop pavilion with the skyline in the background.",
  image1: "/src/assets/images/WXY-JavitsPavilionInterior.jpg",
  image1alt:
    "Interior of WXY's Javits pavilion, which is made out of steel and glass.",
  image2: "/src/assets/images/WXY-JavitsPavilionReflectedCeilingPlan.jpg",
  image2alt:
    "Reflected ceiling plan drawing showing lighting and duct locations.",
  image3: "/src/assets/images/WXY-JavitsPavilionEvents.jpg",
  image3alt: "Picture of a happy hour on the rooftop pavilion.",
  prevproject: "/cottage",
  nextproject: "/shop",
};
</script>

<template>
  <div>
    <ProjectPage v-bind="items" />
  </div>
</template>
