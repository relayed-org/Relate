<template>
  <div id="app">
    <SidebarMain />
    <div class="container">
      <input id="addFriend">
      <button>Add</button>
      <p class="friend">Asdrubale</p>
      <p class="friend">Ian</p>
    </div>
    <div id="MainPanel">
      <ChatMessage v-for="(message, index) in chatMessages" 
       :key="index" :message="message.text" :username="message.username" :roles="message.roles" :pfp="message.pfp" />
    </div>
  </div>
</template>

<script>
  import SidebarMain from './components/SidebarMain.vue'
  import ChatMessage from './components/ChatMessage.vue'
  import fs from 'fs';
  export default {
    name: 'App',
    components: {
      SidebarMain,
      ChatMessage
    },
    data() {
      return {
        chatMessages: []
      };
    },
    mounted() {
      fs.readFile('public/user/profile.json', 'utf8', (err, data) => {
        if (err) {
          console.error('Error reading messages.json:', err);
          return;
        }
        try {
          this.chatMessages = JSON.parse(data)["chats"]["Asdrubale"];
        } catch (parseError) {
          console.error('Error parsing messages.json:', parseError);
        }
      });
    }
  }
</script>

<style>
  #MainPanel {
    position: relative;
  }

  .container {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 8rem;
    max-width: 8rem;
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

  .friend:hover {
    color: red;
    cursor: pointer;
  }
</style>