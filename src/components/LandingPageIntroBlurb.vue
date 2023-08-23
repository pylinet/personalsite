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
          📈 Designing @ <a class="button" href="https://denoutdoors.com/">DEN,</a> a modern design and construction start-up.<br />
          ✏️ Contributing content @ <a class="button" href="https://layer.team/">Layer.</a><br>
          🧠 Learning Mandarin. <br>
          📖 Reading <a class="button" href="http://cup.columbia.edu/book/parks-for-profit/9780231194051">Parks for Profit.</a><br>
          🏘️ Living and <a class ="button" href="https://en.wikipedia.org/wiki/Learning_from_Las_Vegas"> Learning from Las Vegas.</a>
        </p>
    </div>
  </div>
 
</template>
