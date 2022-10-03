<!-- This component appears on the landing page at the top. -->
<script setup>
import portrait from "../assets/portrait.svg";
const greeting = "Hi, I'm Pyline!";
</script>

<template>
  <div class="container" style="align-items: center">
    <div class="container-item">
      <img :src="portrait" alt="Self-portrait illustration by Pyline." />
    </div>
    <div class="container-item">
      <h1>{{ greeting }}</h1>
      <br />
      <p class="text-body-large">
        I’m an architect, design ops leader, and amateur coder.
        <strong><br />Empathy, people, and technology</strong> are the three
        elements that define my design ethos.<br /><br />Empathy allows me to
        understand the customer’s wants and give them what they need.<br /><br />Technology
        unlocks the tooling required to realize design in an efficient and
        elegant manner.<br /><br />People bring it all together because design
        doesn’t happen alone.

        <br /><br />
        For my work sample, please
        <i> <a class="button" href="mailto:pylinet@gmail.com"> email me.</a></i
        ><br />
        For my resume,
        <a
          class="button"
          href="https://drive.google.com/file/d/1a03bu0Zp-Ez7g7u2sEDrfEUjqJCuoSgC/view?usp=sharing"
        >
          <i>click here.</i></a
        >
        <br />Featured projects below 👇.
      </p>
    </div>
  </div>
</template>
