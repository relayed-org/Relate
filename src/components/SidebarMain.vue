<template>
  <div class="sidebar">
    <div class="pfp" @click="selectedServer = null">
      <router-link to="/">
        <img src="@/assets/pfp.jpg" />
      </router-link>
      <div class="infoaccount">
        <p>Sim0</p>
        <p class="status">ONLINE <a id="selectStatus" @click="changeStatus()" style="color: red; cursor: pointer; font-size: 16px;">⌄</a></p> 
      </div>
      <router-link to="/settings"> <button>⚙</button>
</router-link>
     
    </div>
   
    
    <router-link class="router-link server-link" v-for="(ServerInfo, index) in servers" :key="index" :to="{ name: 'server', params: { ServerId: index } }">
      <div @click="selectedServer=ServerInfo['name']" class="server" :class="{ 'selectedServer': ServerInfo['name'] == this.selectedServer }">
        <img :src="ServerInfo['icon']" />
        <p class="notifica">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <!-- !Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.
          -->
            <path d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z" />
          </svg>
        </p>
        <p class="txtserver">{{ServerInfo['name']}}</p>
      </div>
    </router-link>
  </div>
</template>
<script>
  import { fetchData } from '../methods'; 

  export default {
    data() {
      return {
        servers: [],
        selectedServer: null
      };
    },
    methods: {
    changeStatus() {
    },
  },
    async created() {
      try {
          const data = await fetchData();
          this.servers = data.servers;
       } catch (error) {
          console.error('Error in created hook:', error);
      }
    },
  };
</script>
<style scoped>
  .sidebar {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 12rem;
    background-color: var(--background-alt);
    padding: 0.5rem;
    align-items: center;
    height: 100vh;
    z-index: 31;
    border-right: 0.2rem solid var(--border);
    box-sizing: border-box;
    float: left;
  }

  .notifica {
    position: absolute;
    background-color: var(--notification);
    border-radius: 1rem;
    text-decoration: none;
    height: 1.3rem;
    width: 1.3rem;
    text-align: center;
  }

  .notifica svg {
    fill: var(--text);
    width: 0.7rem;
  }

  .pfp img {
    cursor: pointer;
    object-fit: cover;
    border-radius: 10rem;
    width: 3.5rem;
    height: 3.5rem;
    padding: 0.2rem;
  }

  .pfp {
    position: relative;
    display: flex;
    flex-direction: row;
  }

  .infoaccount {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .infoaccount p:first-child {
    color: var(--text);
    font-size: 1.2rem;
  }

  .infoaccount p:last-child {
    font-size: 0.7rem;
    color: var(--status-online);
    font-weight: 800;
    opacity: 0.7;
  }

  .server img {
    cursor: pointer;
    object-fit: cover;
    border-radius: 10rem;
    width: 2rem;
    height: 2rem;
    padding: 0.7rem;
    transition: ease 0.5s;
  }

  .txtserver {
    align-self: center;
    color: var(--text);
    cursor: pointer;
  }

  .server {
    width: 100%;
    display: flex;
    flex-direction: row;
  }

  .selectedServer {
    background-color: var(--selected);
  }

  .server-link{
    width: 100%;
  }

  .server img:hover {
    transform: scale(1.3);
    transition: ease 0.5s;
  }
</style>