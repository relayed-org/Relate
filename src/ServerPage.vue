<template>
    <div class="container">
      <div class="servertitle">
        <p>{{ server.name }}</p>
      </div>
      <div v-for="(channel, group) in server.groups" :key="group" class="chats">
        <p id="category">--- {{ group }} ---</p>
        <div v-for="(data, channelName) in channel" :key="channelName" class="chat-item">
          <p @click="this.chats=data['chats']; this.selectedChat = channelName;" :class="{ 'selectedChat': channelName == this.selectedChat }">{{ channelName }}</p>
          <div class="pfpvocale">
            <img v-for="(userData, user) in data.active" :key="user" :src="userData" />
          </div>
        </div>
      </div>
    </div>
    <ChatMessage v-for="(message, index) in chats" :key="index" :message="message.text" :username="message.username" :roles="message.roles" :pfp="message.pfp" />
</template>
<script>
  import ChatMessage from './components/ChatMessage.vue';
  import axios from 'axios';
  export default {
    name: 'App',
    components: {
      ChatMessage
    },
    data() {
      return {
        server: {},
        chats: [],
        selectedChat: String,
      };
    },
    props: {
      ServerId: String,
    },
    methods: {
      fetchData() {
        const filePath = '/user/profile.json';
        axios.get(filePath).then(response => {
          this.server = response.data.servers[this.ServerId];
          this.chats = this.server.groups['Text Channels'][this.server.lastChat]['chats'];
          this.selectedChat = this.server.lastChat;
        }).catch(error => {
          console.error('Error fetching server data:', error);
        });
      },
    },
    created() {
      this.fetchData();
    },
    beforeRouteUpdate(to, from, next) {
      this.fetchData();
      next();
    },
  };
</script>
<style scoped>
  .container {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 12rem;
    background-color: var(--background-alt);
    padding: 0.5rem;
    align-items: center;
    height: 100vh;
    z-index: 31;
    border-right: 0.3rem solid var(--border);
    box-sizing: border-box;
    /* Per allineare */
    float: left;
  }

  .servertitle {
    color: var(--text);
    font-size: 1.5rem;
    font-weight: 800;
    text-align: center;
    margin-bottom: 1rem;
    border-bottom: solid var(--border) 0.15rem;
  }

  .pfpvocale img {
    object-fit: cover;
    border-radius: 10rem;
    width: 2rem;
    height: 2rem;
    padding: 0.2rem;
  }

  .chats {
    color: var(--text);
    text-align: center;
    cursor: pointer;
    gap: 0.6rem;
    display: flex;
    flex-direction: column;
    border: solid var(--border) 0.15rem;
    padding: 1rem 0 1rem 0;
    border-radius: 0.5rem;
    width: 100%;
    margin-bottom: 0.5rem;
  }

  .selectedChat {
    background-color: var(--selected);
  }

  .chats p {
    transition: ease 0.5s;
  }

  .chats p:hover {
    transform: scale(1.1);
    transition: ease 0.5s;
  }
</style>