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
        enables me to realize solutions in an efficient and elegant manner.<br /><br /><strong
          >People</strong
        >
        bring it all together because change doesn’t happen alone.

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
          💻 Building <a class="button" href="https://www.smalltigergroup.com/">Small Tiger</a> with <a class="button" href="https://www.hellohowareyouhaveaniceday.com/"> Libo Li.</a><br>
          📈 Contracting @ <a class="button" href="https://www.apple.com/services/">Apple,</a> building tools for Services, Marketing & Ops.<br />
          🧠 Learning Mandarin and Javascript. <br>
          🔊 Listening to <a class="button" href="https://www.npr.org/podcasts/510333/throughline">Throughline by NPR. </a><br>
          📖 Reading <a class="button" href="https://mitpress.mit.edu/9780262533386/">Information & Society.</a><br>
        </p>
    </div>
  </div>
 
</template>
