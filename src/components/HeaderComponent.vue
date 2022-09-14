<template>
      <nav class="navbar">
      <img src="logo.svg" />
    <ul class="nav-links">
      <li><a href="about.asp">About</a></li>
      <li><a href="blog.asp">Blog</a></li>
    </ul>
  </nav>
</template>

<style>
    
/* Navigation Bar */

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

.navbar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 0px;
  flex-basis: auto;
}

.nav-links {
  list-style: none;
  display: flex;
  flex-direction: row;
  gap: 50px;
  justify-content: space-between;
}

</style>