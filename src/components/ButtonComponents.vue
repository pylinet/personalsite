<template>
  <div class="container-text">
    <p class="text-body-large">This project is hello.</p>
  </div>
  <div class="container-text">
    <a href="https://www.google.com">
      <div class="container-button">
        <div class="container-button-item">
          <p class="text-body">Learn<br />More</p>
        </div>
        <div class="container-button-item">
          <img src="northeastarrow.svg" height="45" />
        </div></div
    ></a>
  </div>
  </template>

  <style>
    .container-text {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
}


.container-button {
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
}



.container-button-item {
  display: flex;
  flex-direction: row;
  height: 100%;
  margin-top: 20px;

}

  </style>