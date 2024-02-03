<template>
    <div class="container">
        <button @click="setView('friends')">Friends</button>
    
      <p class="title">Direct Messages</p>
      <p class="friend" :class="{ 'selectedFriend':  friend == this.chat }" v-for="(userChats, friend) in chats" :key="friend" @click="setChats(friend)">
        {{ friend }}
      </p>
    </div>
    <div>
      <template v-if="currentView === 'messages'">
        <ChatMessage v-for="(message, index) in chats[chat]" :key="index" :message="message.text" :username="message.username" :roles="message.roles" :pfp="message.pfp" />
        <input style="position: absolute; bottom: 0;"/>
      </template>
      <template v-else-if="currentView === 'friends'">
        <input placeholder="Add Friend..." id="addFriend" />
      <button>Add</button>
      <p class="friend" v-for="friend in friends" :key="friend" @click="addChat(friend)">
        {{ friend }}
      </p>
      </template>
    </div>
</template>

<script>
import ChatMessage from './components/ChatMessage.vue';
import { fetchData } from './methods'; 

export default {
  name: 'App',
  components: {
    ChatMessage,
  },
  data() {
    return {
      friends: [],
      chats: [],
      chat: "Asdrubale",
      currentView: "messages"
    };
  },
  methods: {
    setView(view) {
      this.currentView = view
    },
    setChats(friend) {
      this.setView("messages");
      this.chat = friend;
    }
  },
  async created() {
    try {
      const data = await fetchData();
      this.chats = data.chats;
      this.friends = data.friends
    } catch (error) {
      console.error('Error in created hook:', error);
    }
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
    cursor: pointer;
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