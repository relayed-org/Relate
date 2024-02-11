<template>
  <div class="container">
    <button @click="setView('friends')">Friends</button>

    <p class="title">Direct Messages</p>

    <div class="chats">
      <div
        class="chat"
        :class="{ selectedChat: friend === chat }"
        v-for="(chatData, friend) in chats"
        :key="friend"
        @click="setChats(friend)"
      >
        <img class="chatPfp" :src="chatData.pfp" />

        <div>
          <p class="chatUsername">{{ friend }}</p>
          <p class="chatLastMessage">{{ getLastMessage(chatData, chat) }}</p>
        </div>
      </div>
    </div>
  </div>
  <div id="mainPanel">
    <template v-if="currentView === 'messages'">
      <template v-if="chats[chat]">
        <h1 class="welcomeMessage">{{ chat }}</h1>
        <p class="welcomeDescription">This is the start of your conversation with {{ chat }}!</p>
        <ChatMessage
          v-for="(message, index) in chats[chat].messages"
          :key="index"
          :message="message.text"
          :username="message.username"
          :roles="message.roles"
          :pfp="message.pfp"
        />
      </template>
      <div class="write-bar">
        <input class="scrivi" placeholder="Send a message..." />
        <div class="selectfile">
          <input type="file" />
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
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
            <path
              d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
            />
          </svg>
        </button>
      </div>
      <div class="lista-f">
        <p v-for="(friendData, friend) in friends" :key="friend" @click="addChat(friend, friendData)">
          {{ friend }}
        </p>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import ChatMessage from './components/ChatMessage.vue';
import { fetchData } from './methods';

export default {
  name: 'App',
  components: {
    ChatMessage,
  },
  data() {
    return {
      friends: {} as Record<string, any>,
      chats: {} as Record<string, any>,
      chat: 'Asdrubale',
      currentView: 'messages',
    };
  },
  methods: {
    setView(view: string) {
      this.currentView = view;
    },
    setChats(friend: string) {
      this.setView('messages');
      this.chat = friend;
    },
    addChat(friend: string, friendData: { pfp: any }) {
      if (!(friend in this.chats)) {
        this.chats[friend] = { pfp: friendData.pfp, messages: [] };
      }
      this.chat = friend;
    },
    getLastMessage(chatData: { messages: Array<{ text: string }> }, chat: string) {
      if (chatData.messages.length) {
        return chatData.messages[chatData.messages.length - 1].text;
      } else {
        return '';
      }
    },
  },
  async created() {
    try {
      const data = await fetchData();
      this.chats = data.chats;
      this.friends = data.friends;
    } catch (error) {
      console.error('Error in created hook:', error);
    }
  },
};
</script>


<style scoped>
.container {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 14rem;
  background-color: var(--background-alt);
  padding: 0.6rem;
  align-items: center;
  height: 100vh;
  z-index: 31;
  box-sizing: border-box;
  float: left;
  
}
.title {
  color: var(--text);
  font-weight: 700;
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

.input-f {
  width: 70%;
  border-radius: 5px;
  border: solid var(--border) 0.2rem;
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

.friend {
  color: var(--text);
  transition: ease 0.5s;
  padding: 0.5rem;
  width: 87%;
  margin-bottom: 1.2rem;
  text-align: center;
}

.chats{
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 3px;
}
.chat{
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: row;
  cursor: pointer;
  border-radius: 4px;
  transition: ease 0.2s;
}
.chat:hover{
  background-color: var(--selected);

}
.chatUsername{
  color: var(--text);
}
.chatPfp{
  object-fit: cover;
  border-radius: 10rem;
  width: 2.4rem;
  height: 2.4rem;
  align-self: center;
  padding: 0.5rem 0.7rem 0.5rem 0.7rem;
}

.chatLastMessage{
  color: var(--text-alt);
}
.selectedChat {
  background-color: var(--selected);
}

.friend:hover {
  transform: scale(1.1);
  background-color: hsl(var(--selected));
  border-radius: 5px;
  cursor: pointer;
  transition: ease 0.5s;
}

#mainPanel {
    background-color: var(--background);
    right: 0;
    width: calc(100% - 28rem);
    height: calc(100vh - 2rem);
    padding: 1rem;
    float: right;
    position: absolute;
  }

  .welcomeMessage {
    color: var(--text);
  }
  .welcomeDescription{
    color: var(--text-alt);
    padding-bottom: 1.6rem;
  }

.write-bar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: absolute;
    width: calc(100% - 2rem);
    bottom: 1rem;
  }

  .scrivi {
    width: 200rem;
    border-radius: 5px;
    outline: none;
    border: none;
    padding: 0.5rem;
    background-color: var(--background-alt);
    color: var(--text);
  }

  .selectfile {
    margin: 0 0 0.1rem 0.5rem;
    background-color: var(--background-alt);
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
    width: 1.8rem;
    height: 1.8rem;
  }

  .selectfile input {
    display: none;
  }
</style>
