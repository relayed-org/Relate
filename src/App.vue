<template>
  <div id="app">
    <SidebarMain />
    <router-view></router-view>
  </div>
</template>
<script>
  import SidebarMain from './components/SidebarMain.vue';
  export default {
    name: 'App',
    components: {
      SidebarMain,
    },
  };
</script>
<style>
  @import url("https://fonts.googleapis.com/css2?family=Yantramanav:wght@100;300;400;500;700;900&display=swap");

  :root {
    --background: #1c1a27;
    --background-alt: #282633;
    --border: #34333f;
    --border-alt: #1c1a27;
    --text: #f5f5f5;
    --selected: #ff0000;
    --notification: #ff0000;
    --status-online: rgb(20, 255, 50);
  }

  body,
  html {
    margin: 0;
    padding: 0;
    background-color: var(--background);
  }

  #app {
    font-family: Yantramanav;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
  }

  .router-link {
    text-decoration: none;
    color: inherit;
  }

  p {
    margin: 0;
    padding: 0;
  }
</style>