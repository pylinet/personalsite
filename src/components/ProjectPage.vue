<script setup>
import FooterComponent from "../components/FooterComponent.vue";
import ButtonComponents from "../components/ButtonComponents.vue";

defineProps([
  "companyname",
  "companyabout",
  "companyrole1",
  "companyrole2",
  "companylink",
  "image1",
  "image2",
  "image3",
  "image1alt",
  "image2alt",
  "image3alt",
  "headerimage",
  "headerimagealt",
  "title",
  "prevproject",
  "nextproject",
  "name",
]);
</script>

<template>
  <div>
    <div class="layout">
      <div class="container-gallery">
        <div class="container-gallery-item">
          <img
            class="container-image"
            :src="headerimage"
            :alt="headerimagealt"
          />
        </div>

        <div class="container">
          <div class="container-item" style="flex-grow: 0.5">
            <p class="text-body-small">
              <strong>Company</strong><br />
              <a class="text-body-small social" :href="companylink">{{
                companyname
              }}</a>
            </p>
            <br />

            <p class="text-body-small">
              <b>Role</b><br />
              {{ companyrole1 }}<br />{{ companyrole2 }}
            </p>
          </div>
          <div class="container-item" style="flex-grow: 1">
            <h2>{{ title }}</h2>
            <br />
            <p class="text-body-large">
              {{ companyabout }}
            </p>
          </div>
        </div>
        <div class="container">
          <img class="container-image" :src="image1" :alt="image1alt" />
        </div>
        <div class="container">
          <img
            class="container-image multiply"
            :src="image2"
            :alt="image2alt"
          />
        </div>
        <div class="container">
          <img class="container-image" :src="image3" :alt="image3alt" />
        </div>
      </div>
      <ButtonComponents
        :prevproject="prevproject"
        :nextproject="nextproject"
      ></ButtonComponents>
    </div>
    <FooterComponent></FooterComponent>
  </div>
</template>
