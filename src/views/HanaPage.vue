<script setup>
import SingleProjectPage from "../components/SingleProjectPage.vue";

// images
import headerImage from "../assets/hana-co-working/hana-1818-market-st-philadelphia-reception.jpg";
import image1 from "../assets/hana-co-working/hana-windmill-green-united-kingdom-co-working.jpg";
import image2 from "../assets/hana-co-working/hana-1818-market-st-drawing-set.jpg";
import image3 from "../assets/hana-co-working/hana-3-world-trade-co-working-office.jpg";

const items = {
  title: "A flexible office product by CBRE.",
  companyName: "Hana by CBRE",
  companyLink:
    "https://www.industriousoffice.com/blog/industrious/cbre-transfers-its-flexible-workspace-brand-hana-to-industrious",
  companyAbout:
    "CBRE, the world’s largest global commercial real estate services firm, started a wholly-owned subsidiary called Hana, which focused on delivering co-working spaces across the world. The vision was to create inspiring and comfortable environments for our members to work, meet, and collaborate. Every Hana space consists of a mix of private team suites, conference rooms, and shared workspaces and lounges, all designed to give maximum flexibility and customization to Hana members.\n\nAs the Senior Designer on the physical product team, I worked directly under the VP of Product Design to launch our first Revit and BIM workflow, which would eventually develop into a robust set of standards that supported 5 team members and +10 submitted plan sets across the team. As a Design Manager, I spearheaded documenting our space standards to ensure consistency and alignment across the company.",
  companyRole1: "Design Manager from Jan 2021 to May 2021",
  companyRole2: "Senior Designer from April 2019 to Dec 2020",
  headerImage,
  headerImageAlt:
    "A photograph of the co working reception desk with the logo.",
  headerImageTitle: "Photo © CBRE.",
  image1,
  image1Alt:
    "A co-working reception desk with warm wood flooring, lush plants, and company logo wall.",
  image1Title: "Photo © CBRE.",
  image2,
  image2Alt:
    "A set of architectural drawings for the proposed co-working office.",
  image2Title: "Drawing © Pyline Tangsuvanich.",
  image3,
  image3Alt:
    "An interior photograph of the co-working lounge space with beautiful exterior views.",
  imageTitle: "Photo © CBRE.",
  prevProject: "SHoPPage",
  nextProject: "CottagePage",
};
</script>

<template>
  <div>
    <SingleProjectPage v-bind="items" />
  </div>
</template>
