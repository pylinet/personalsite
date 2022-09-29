<!-- This is a template component for each project page. -->

<script setup>
import ButtonAllComponents from "../components/ButtonAllComponents.vue";

defineProps([
  "companyName",
  "companyAbout",
  "companyRole1",
  "companyRole2",
  "companyLink",
  "image1",
  "image2",
  "image3",
  "image1Alt",
  "image2Alt",
  "image3Alt",
  "image1Title",
  "image2Title",
  "image3Title",
  "headerImage",
  "headerImageAlt",
  "headerImageTitle",
  "title",
  "prevProject",
  "nextProject",
]);
</script>

<template>
  <div>
    <div class="layout">
      <div class="container-gallery">
        <div class="container-gallery-item">
          <img
            class="container-image"
            :src="headerImage"
            :alt="headerImageAlt"
            :title="headerImageTitle"
          />
        </div>

        <div class="container">
          <div class="container-item container-project-text-info">
            <p class="text-body-small">
              <strong>Company</strong><br />
              <a class="text-body-small button" :href="companyLink">{{
                companyName
              }}</a>
            </p>
            <br />

            <p class="text-body-small">
              <b>Role</b><br />
              {{ companyRole1 }}<br />{{ companyRole2 }}
            </p>
          </div>
          <div class="container-item container-project-text-body">
            <h2>{{ title }}</h2>
            <br />
            <p class="text-body-large">
              {{ companyAbout }}
            </p>
          </div>
        </div>
        <div class="container">
          <img
            class="container-image"
            :src="image1"
            :alt="image1Alt"
            :title="image1Title"
          />
        </div>
        <div class="container">
          <img
            class="container-image multiply"
            :src="image2"
            :alt="image2Alt"
            :title="image2Title"
          />
        </div>
        <div class="container">
          <img
            class="container-image"
            :src="image3"
            :alt="image3Alt"
            :title="image3Title"
          />
        </div>
      </div>
      <!-- V-bind the properties to components -->
      <ButtonAllComponents
        :prevProject="prevProject"
        :nextProject="nextProject"
      ></ButtonAllComponents>
    </div>
  </div>
</template>

<style scoped>
.container-project-text-info {
  width: 40%;
}
.container-project-text-body {
  width: 60%;
}

@media screen and (max-width: 800px) {
  .container-project-text-info,
  .container-project-text-body {
    width: 100%;
  }
}
</style>
