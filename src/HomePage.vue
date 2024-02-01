<template>
  <div id="app">
    <div class="container">
      <p class="title">Add a friend</p>
      <input placeholder="Add Friend..." id="addFriend" />
      <button>Add</button>
      <p class="title">Your friend list</p>
      <p class="friend" :class="{ 'selectedFriend':  friend == this.chat }" v-for="(userChats, friend) in chats" :key="friend" @click="setChats(friend)">
        {{ friend }}
      </p>
    </div>
    <div id="MainPanel">
      <ChatMessage v-for="(message, index) in chats[chat]" :key="index" :message="message.text" :username="message.username" :roles="message.roles" :pfp="message.pfp" />
    </div>
  </div>
</template>
<script>
  import ChatMessage from './components/ChatMessage.vue';
  import axios from 'axios';
  export default {
    name: 'App',
    components: {
      ChatMessage,
    },
    data() {
      return {
        chats: [],
        chat: "Asdrubale"
      };
    },
    methods: {
      setChats(friend) {
        this.chat = friend;
      },
      fetchData() {
        const filePath = '/user/profile.json';
        axios.get(filePath).then((response) => {
          this.chats = response.data.chats
          this.chat = response.data.lastChat
        }).catch((error) => {
          console.error('Error fetching server data:', error);
        });
      },
    },
    created() {
      this.fetchData();
    },
  };
</script>
<style scoped>
  .title {
    color: whitesmoke;
    font-weight: 700;
    font-size: 1.2rem;
    border-bottom: 0.2rem solid #1c1a27;
    margin-bottom: 0.5rem;
  }

  input {
    width: 10rem;
    border-radius: 5px;
    background-color: black;
    border: solid white 0.1rem;
    color: white;
    outline: none;
    padding: 0.5rem;
  }

  button {
    border-radius: 5px;
    color: white;
    background-color: black;
    border: solid white 0.1rem;
    padding: 0.2rem;
    width: 11rem;
    margin: 0.5rem 0 0.5rem 0;
    transition: ease 0.5s;
  }

  button:hover {
    background-color: white;
    color: black;
    transform: scale(1.05);
    transition: ease 0.5s;
  }

  .container {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 12rem;
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

  .friend {
    color: white;
    transition: ease 0.5s;
    width: 100%;
  }

  .selectedFriend {
    background-color: red;
  }

  .friend:hover {
    transform: scale(1.1);
    cursor: pointer;
    transition: ease 0.5s;
  }
</style>