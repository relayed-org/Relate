<template>
  <div class="container">
    <div class="pfp">
      <router-link to="/"> <img src="@/assets/pfp.jpg" />  </router-link>

    </div> 
    <div class="linea"></div>
    <div v-for="(ServerInfo, index) in servers" :key="index" class="server">
      <router-link :to="{ name: 'server', params: { ServerInfo: ServerInfo['name'] } }">
        <img :src="ServerInfo['icon']" />
      </router-link>
    </div>
  </div>
</template>

<script>
import fs from 'fs'; 

export default {
  data() {
    return {
      servers: []
    };
  },
  mounted() {
    fs.readFile('public/user/profile.json', 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading messages.json:', err);
        return;
      }
      try {
        this.servers = JSON.parse(data)["servers"];
      } catch (parseError) {
        console.error('Error parsing messages.json:', parseError);
      }
    });
  }
};
</script>

<style scoped>
.container {
  position: relative;
  display: flex;
  flex-direction: column;
  width: fit-content;
  background-color: var(--colore2);
  padding: 0.5rem;
  align-items: center;
  height: 100vh;
  z-index: 31;
  border-right: 0.3rem solid var(--colore3);
  box-sizing: border-box;

  /* Per allineare */
  float: left;
  
}

.pfp img {
  cursor: pointer;
  object-fit: cover;
  border-radius: 10rem;
  width: 3.5rem;
  height: 3.5rem;
  padding: 0.2rem;
}

.linea {
  border-radius: 1rem;
  border-bottom: 0.3rem solid var(--colore3);
  margin: 0.5rem;
  width: 100%;
}

.server img {
  cursor: pointer;
  object-fit: cover;
  border-radius: 10rem;
  width: 2rem;
  height: 2rem;
  padding: 0.2rem;
  margin-bottom: 1rem;
}

</style>
