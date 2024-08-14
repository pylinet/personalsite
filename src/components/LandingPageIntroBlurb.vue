<!-- This component appears on the landing page at the top. -->
<script setup>
import portrait from "../assets/portrait.svg";
const greeting = "👋 Hi, I'm Pyline!";
</script>

<template>
  <div
    class="container"
    style="
      align-items: center;
      padding-bottom: 60px;
      border-bottom: 3px;
      border-bottom-style: solid;
    "
  >
    <div class="container-item">
      <h1>{{ greeting }}</h1>
      <br />
      <p class="text-body-large">
        I’m an architect, design operations leader, and amateur coder.
        <br />My perspective on design and the built environment revolve around
        <strong>empathy, people, and technology.</strong><br /><br />
        <strong>Empathy</strong> allows me to understand the customer’s wants
        and give them what they need.<br /><br />
        <strong>Technology</strong>
        enables me to realize solutions in an efficient and elegant manner.<br /><br />
        Collaborating with <strong>people</strong>
        enables me to deliver great work.
        <br /><br />
      </p>
    </div>
    <div class="container-item">
      <img :src="portrait" alt="Self-portrait illustration by Pyline." />
    </div>
  </div>
  <div
    class="container"    style="
      align-items: center;
      padding-bottom: 60px;
      border-bottom: 3px;
      border-bottom-style: solid;
    ">
    <div class="container-item" >
        <h2>Currently..</h2>
        <br />
        <p class="text-body-large"> 
          📈 Currently consulting @ <a class="button" href="https://www.industriousoffice.com/">Industrious</a> and <a class="button" href="https://aandaarch.com/">Aanda.</a><br>
          🏘️ Previously designing @ <a class="button" href="https://denoutdoors.com/">DEN,</a> a modern design and construction start-up.<br />
          ✏️ Contributing content @ <a class="button" href="https://layer.team/">Layer</a> and @ <a class="button" href="https://buildingprobable.substack.com/">Building Probable.</a><br>
          🧠 Learning Mandarin. <br>
        </p>
    </div>
  </div>
 
</template>
