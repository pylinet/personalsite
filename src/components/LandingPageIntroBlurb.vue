<!-- This component appears on the landing page at the top. -->
<script setup>
import portrait from "../assets/portrait.svg";
const greeting = "👋 Hi, I'm Pyline!";
</script>

<template>
  <div class="container" style="align-items: center">

    <div class="container-item">
      <h1>{{ greeting }}</h1>
      <br />
      <p class="text-body-large">
        I’m an architect, design operations leader, and amateur coder.
        <br />My perspective on design and  the built environment revolve around <strong>empathy, people, and technology.</strong><br /><br />
        <strong>Empathy</strong> allows me to
        understand the customer’s wants and give them what they need.<br /><br />
        <strong>Technology</strong>
        enables me to realize solutions in an efficient and
        elegant manner.<br /><br /><strong>People</strong> bring it all together because change
        doesn’t happen alone.
        
        <br /><br /></p></div>
        <div class="container-item">
      <img :src="portrait" alt="Self-portrait illustration by Pyline." />
    </div>
  </div>
  <div>
<h2>Featured projects below 👇.</h2>
<p>
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
        <br />
      </p>
    </div>
</template>
