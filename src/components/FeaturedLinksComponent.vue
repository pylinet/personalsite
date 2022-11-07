<script setup>
import airtable from "../assets/about/airtable-logo.png";
import rice from "../assets/about/rice-magazine-logo-65px.png";
import voyansi from "../assets/about/voyansi-logo.png";

</script>
<template> <h2>Recently featured in..</h2>
<div
    class="container"    style="
      align-items: center;
      justify-content: center;
      padding-bottom: 60px;
      border-bottom: 3px;
      border-bottom-style: solid;
    ">

         <div class="container-item" >
            <a href="https://blog.airtable.com/announcing-the-winners-of-interface-designer-contest/"><img class="container-image" :src="airtable" alt="Airtable logo." /></a>
        </div>  
        <div class="container-item">
            <a href="https://magazine.rice.edu/spring-2022/think-architect"><img class="container-image" :src="rice" alt="Rice University Magazine logo." /></a>
        </div>  
        <div class="container-item" >
            <a href="https://www.youtube.com/watch?v=wzwtndkb0xc"><img class="container-image" :src="voyansi" alt="BIM logo." /></a>
        </div>  
    </div>

</template>