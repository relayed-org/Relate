<template>
    <SidebarMain/>
    <router-view></router-view>
</template>

<script lang="ts">
import SidebarMain from "./components/SidebarMain.vue";
export default {
  name: "App",
  components: {
    SidebarMain,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Yantramanav:wght@100;300;400;500;700;900&display=swap");

:root {
  --background: #282A36;
  --background-alt:  rgb(33, 34, 44);
  --background-alt2: rgb(52, 55, 70);
  --border: #34333f;
  --text: #f5f5f5;
  --text-alt: #a8a8a8;
  --white: white;
  --selected: #44475a;
  --notification: rgb(255, 46, 46);
  --status-online: #50FA7B;
  --status-afk: #FFB86C;
  --status-offline: #FF5555;
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
  font-size: 1rem;
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
