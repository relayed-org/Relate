<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Yantramanav:wght@100;300;400;500;700;900&display=swap");
  
  :root {
    --sfondo: #1c1a27;
    --colore2: #282633;
    --colore3: #34333f;
    --whitesmoke: #f5f5f5;
  }
  
  body,
  html {
    margin: 0;
    padding: 0;
    background-color: var(--sfondo);
  }
  
  #app {
    font-family: Yantramanav;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    color: #2c3e50;
  }

  
  
  </style>
  
