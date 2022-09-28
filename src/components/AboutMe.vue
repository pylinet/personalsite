<script setup>
import portrait from '../assets/portrait.svg'
const greeting = "Hi, I'm Pyline!";
</script>

<template>
  <div class="container">
    <div class="container-item" style="flex-grow: 0.5">
      <img :src="portrait" alt="Self-portrait illustration by Pyline." />
    </div>
    <div class="container-item" style="flex-grow: 2">
      <h1>{{ greeting }}</h1>
      <br>
      <p class="text-body-large">
        I’m an architect, design ops leader, and amateur coder. Let's
        collaborate! <br /><br />
        Featured projects below 👇.<br />
        For a full work sample, please
        <i><a class="text-body-large social" href="mailto:pylinet@gmail.com">
            email me</a>.</i>
      </p>
    </div>
  </div>

</template>
