<template>
  <div class="sidebar">
    <div class="userpanel">
      <div class="userinfo">
        <router-link @click="selectedServer = null" to="/">
          <div>
            <img src="/user/cached/pfp.jpg" />
            <div id="cerchiostatus" class="cerchiostatus"></div>
          </div>
        </router-link>
        <div class="infoaccount">
          <div>
            <p id="username">Sim0</p>
          </div>
          <div>
            <select id="status">
              <option value="online">Online</option>
              <option value="afk">Idle</option>
              <option value="offline">Do not disturb</option>
            </select>
          </div>
        </div>
      </div>
      <div class="options">
        <router-link to="/settings" class="optionsIcons">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. -->
            <path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z" />
          </svg>
        </router-link>
        <router-link to="/settings" class="optionsIcons">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. -->
            <path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z" />
          </svg>
        </router-link>
        <router-link to="/settings" class="optionsIcons">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. -->
            <path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z" />
          </svg>
        </router-link>
      </div>
    </div>
    <router-link to="/" class="router-link server-link">
     <div @click="selectedServer = null" class="server" id="home">
        <img src="/home.png"/>
        <p class="txtserver">Home</p>
     </div>
    </router-link>
    <router-link class="router-link server-link" v-for="(ServerInfo, index) in servers" :key="index" :to="{ name: 'server', params: { ServerId: index } }">
      <div @click="selectedServer = ServerInfo['name']" class="server" :class="{ selectedServer: ServerInfo['name'] == selectedServer }">
        <img :src="ServerInfo['icon']" />
        <p class="notifica">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <!-- !Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.
          -->
            <path d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z" />
          </svg>
        </p>
        <p class="txtserver">{{ ServerInfo["name"] }}</p>
      </div>
    </router-link>
  </div>
</template>
<script lang="ts">
  import {
    fetchData
  } from "../methods";
  export default {
    data() {
      return {
        servers: [],
        selectedServer: null,
      };
    },
    methods: {
      changeStatus() {},
    },
    async created() {
      try {
        const data = await fetchData();
        this.servers = data.servers;
        
      } catch (error) {
        console.error("Error in created hook:", error);
        
      }

      const status = document.getElementById("status");
      const cerchio = document.getElementById("cerchiostatus");

      if (status && cerchio != null){
        status.addEventListener("click", function select() {
         

          const getoption = document.querySelectorAll("select");
          let getoption2 = getoption[0].value;

          if (getoption2 == "online") {
            status.style.color = "var(--status-online)";
            cerchio.style.backgroundColor = "var(--status-online)";

          } else if (getoption2 == "afk") {
            status.style.color = "var(--status-afk)";
              cerchio.style.backgroundColor = "var(--status-afk)";

          } else if (getoption2 == "offline") {
            status.style.color = "var(--status-offline)";
            cerchio.style.backgroundColor = "var(--status-offline)";
            
          }
        });
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
    background-color: var(--background-alt2);
    padding: 0.5rem;
    align-items: center;
    height: 100vh;
    z-index: 31;
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

  .userinfo img {
    cursor: pointer;
    object-fit: cover;
    border-radius: 10rem;
    width: 2rem;
    height: 2rem;
    padding: 0.7rem;
    transform: scale(1.25);
  }

  .userpanel {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100px;
  }

  .userinfo {
    position: relative;
    display: flex;
    flex-direction: row;
    width: 100%;
    border-radius: 5px;
  }

  .infoaccount {
    height: 62px;
    justify-content: center;
    display: flex;
    flex-direction: column;
    width: 100%;
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

  #home img{
    border-radius: 0 !important;
  }

  #home{
    border-radius: 0 !important;
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
  
    transition: ease 0.2s;
    margin-bottom: 0.5rem;
  }

  .server:hover {
    width: calc(100% + 0.5rem);
    padding-left: 0.5rem;
    margin-left: -0.5rem;
    background-color: var(--selected);
    transition: ease 0.2s;
  }

  .selectedServer {
    width: calc(100% + 0.5rem);
    padding-left: 0.5rem;
    margin-left: -0.5rem;
    background-color: var(--selected);
  }

  .server-link {
    width: 100%;
  }

  #username {
   color: var(--text);
  }

  select {
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    outline: none;
    background-color: transparent;
    border: none;
    width: 6rem;

    cursor: pointer;
    color: var(--status-online);
  }

  select option {
    background-color: var(--border);
    border: 0rem;
  }

  select [value="online"] {
    color: var(--status-online);
  }

  select [value="afk"] {
    color: var(--status-afk);
  }

  select [value="offline"] {
    color: var(--status-offline);
  }

  .options {
    display: flex;
    flex-direction: row;
    gap:8px;
    transition: ease 0.5s;
  }

  .options svg {
    width: 100%;
    fill: var(--white);
  }

  .optionsIcons {
    font-size: 1.2rem;
    color: var(--status-online);
    font-weight: 800;
    opacity: 0.7;
    width: 1rem;
    height: 1rem;
    background-color: transparent;
    border: none;
    cursor: pointer;
    transition: ease 0.5s;
  }

  .cerchiostatus {
    position: absolute;
    top:36px;
    left: 36px;
    width: 0.6rem;
    height: 0.6rem;
    background-color: var(--status-online);
    border-radius: 2rem;
    
    z-index: 20;
  }
</style>