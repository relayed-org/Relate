<template>
  <div class="container">
    <button @click="setView('friends')">Friends</button>

    <p class="title">Direct Messages</p>
    <p
      class="friend"
      :class="{ selectedFriend: friend == this.chat }"
      v-for="(userChats, friend) in chats"
      :key="friend"
      @click="setChats(friend)"
    >
      {{ friend }}
    </p>
  </div>
  <div>
    <template v-if="currentView === 'messages'">
      <ChatMessage
        v-for="(message, index) in chats[chat]"
        :key="index"
        :message="message.text"
        :username="message.username"
        :roles="message.roles"
        :pfp="message.pfp"
      />
      <div class="write-bar">
        <input class="scrivi" placeholder="Send a message..." />
        <div class="selectfile">
          <input type="file" />
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. -->
            <path
              d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM216 408c0 13.3-10.7 24-24 24s-24-10.7-24-24V305.9l-31 31c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l72-72c9.4-9.4 24.6-9.4 33.9 0l72 72c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-31-31V408z"
            />
          </svg>
        </div>
      </div>
    </template>
    <template v-else-if="currentView === 'friends'">
      <div class="buttons-friends">
        <input class="input-f" placeholder="Add Friend..." id="addFriend" />
        <button class="plus">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. -->
            <path
              d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
            />
          </svg>
        </button>
      </div>
      <div class="lista-f">
        <p v-for="friend in friends" :key="friend" @click="addChat(friend)">
          {{ friend }}
        </p>
      </div>
    </template>
  </div>
</template>

<script>
import ChatMessage from "./components/ChatMessage.vue";
import { fetchData } from "./methods";

export default {
  name: "App",
  components: {
    ChatMessage,
  },
  data() {
    return {
      friends: [],
      chats: [],
      chat: "Asdrubale",
      currentView: "messages",
    };
  },
  methods: {
    setView(view) {
      this.currentView = view;
    },
    setChats(friend) {
      this.setView("messages");
      this.chat = friend;
    },
  },
  async created() {
    try {
      const data = await fetchData();
      this.chats = data.chats;
      this.friends = data.friends;
    } catch (error) {
      console.error("Error in created hook:", error);
    }
  },
};
</script>

<style scoped>
.title {
  color: var(--text);
  font-weight: 700;
  font-size: 1.2rem;
  border-bottom: 0.2rem solid var(--border-alt);
  margin-bottom: 1rem;
}

.input-f {
  width: 70%;
  border-radius: 5px;
  border: solid var(--border-alt) 0.2rem;
  background-color: hsl(var(--selected), 0.3);
  outline: none;
  padding: 0.5rem;
  color: var(--text);
}

.input-f::placeholder {
  color: var(--white);
}

.lista-f {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 2rem;
}

.lista-f p {
  color: var(--text);
  width: 85%;
  transition: ease 0.5s;
  padding: 0.5rem;
  margin-bottom: 1.2rem;
  text-align: center;
}

.lista-f p:hover {
  transform: scale(1.1);
  background-color: hsl(var(--selected));
  border-radius: 5px;
  cursor: pointer;
  transition: ease 0.5s;
}

.plus {
  width: 2rem;
  height: 100%;
  margin: 0;
  display: flex;
  background-color: transparent;
  transition: ease 0.5s;
}

.plus:hover {
  transform: scale(1.2);
  transition: ease 0.5s;
}

.plus svg {
  fill: var(--white);
  align-self: center;
}

.buttons-friends {
  display: flex;
  flex-direction: row;
  height: 2.5rem;
  justify-content: center;
}

button {
  cursor: pointer;
  border-radius: 5px;
  color: var(--text);
  border: none;
  background-color: hsl(var(--selected));
  padding: 0.5rem;
  width: 11rem;
  margin: 1rem 0 1rem 0;
  transition: ease 0.5s;
}

button:hover {
  transform: scale(1.05);
  transition: ease 0.5s;
}

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
  float: left;
}

.friend {
  color: var(--text);
  transition: ease 0.5s;
  padding: 0.5rem;
  width: 87%;
  margin-bottom: 1.2rem;
  text-align: center;
}

.selectedFriend {
  background-color: hsl(var(--selected));
  border-radius: 5px;
}

.friend:hover {
  transform: scale(1.1);
  background-color: hsl(var(--selected));
  border-radius: 5px;
  cursor: pointer;
  transition: ease 0.5s;
}

.write-bar {
  position: absolute;
  bottom: 0;
  left: 24rem;
  right: 0.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.scrivi {
  width: 200rem;
  bottom: 0;
  margin: 0 0 0.1rem 0.5rem;
  border-radius: 5px;
  outline: none;
  border: none;
  padding: 0.5rem;
  background-color: var(--background-alt);
  color: var(--text);
}

.selectfile {
  width: 8rem;
  height: 1rem;
  bottom: 0;
  margin: 0 0 0.1rem 0.5rem;
  border-radius: 5px;
  background-color: var(--background-alt);
  outline: none;
  border: none;
  padding: 0.5rem;
  color: var(--text);
  color: transparent;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 5px;
}

.selectfile svg {
  fill: var(--white);
  width: 2.4rem;
}

.selectfile input::-webkit-file-upload-button {
  -webkit-appearance: none;
  background-color: transparent;
  width: 100%;
  padding: 0.2rem;
  outline: none;
  border: none;
}
</style>
