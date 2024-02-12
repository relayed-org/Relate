<template>
  <div class="container">
    <div class="servertitle">
      <p>{{ server.name }}</p>
    </div>
    <div id="contents">
      <div v-for="(channel, groupName) in server.groups" :key="groupName" class="chats">
        <p class="category">⌄ {{ groupName }}</p>
        <div v-for="(data, channelName) in channel" :key="channelName" class="chat-item">
          <p @click="
            chats = data['chats'];
            selectedChat = channelName;
          " :class="{ selectedChat: channelName == selectedChat }">
            <template v-if="data.type === 'text'">
              <span class="typeText">#</span>
            </template>{{ channelName }}
          </p>
          <div class="pfpvocale">
            <img v-for="(userData, user) in data.active" :key="user" :src="userData" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="mainPanel">
    <h1 class="welcomeMessage">Welcome to {{selectedChat}}!</h1>
    <ChatMessage v-for="(message, index) in chats" :key="index" :message="message.text" :username="message.username" :roles="message.roles" :pfp="message.pfp" />
    <div class="write-bar">
      <input class="scrivi" placeholder="Send a message..." />
      <label class="selectfile">
        <input type="file" />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
          <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. -->
          <path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM216 408c0 13.3-10.7 24-24 24s-24-10.7-24-24V305.9l-31 31c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l72-72c9.4-9.4 24.6-9.4 33.9 0l72 72c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-31-31V408z" />
        </svg>
      </label>
    </div>
  </div>
</template>
<script lang="ts">
import ChatMessage from "./components/ChatMessage.vue";
import axios from "axios";

interface Message {
    text: string,
    username: string,
    pfp: string,
    roles: { role: string, color: string }
}

interface Server {
  name: string,
  icon: string,
  lastGroup: string,
  lastChat: string,
  groups: {
    [groupName: string]: {
      [channelName: string]: {
        type: string,
        chats: Message[],
        active?: string[],
      };
    };
  };
}

export default {
  name: "App",
  components: {
    ChatMessage,
  },
  data() {
    return {
      server: {} as Server,
      chats: [] as Message[],
      selectedChat: "" as string,
    };
  },
  props: {
    ServerId: String,
  },
  methods: {
    fetchData() {
      const filePath = "/user/profile.json";
      axios
        .get(filePath)
        .then((response) => {
          if (this.ServerId && response.data.servers[this.ServerId]) {
            const server = response.data.servers[this.ServerId];
            this.server = server;
            this.chats =
              server.groups[server.lastGroup][server.lastChannel]["chats"];
            this.selectedChat = server.lastChannel;
          } else {
            console.error("Server ID is undefined or server data not found.");
          }
        })
        .catch((error) => {
          console.error("Error fetching server data:", error);
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
    width: 14rem;
    background-color: var(--background-alt);
    padding: 0.6rem;
    align-items: center;
    height: 100vh;
    z-index: 31;
    box-sizing: border-box;
    /* Per allineare */
    float: left;
  }

  .servertitle {
    width: 100%;
    color: var(--text);
    font-size: 1.2rem;
    font-weight: 800;
    text-align: center;
    padding-bottom: 0.6rem;
    position: absolute;
    background-color: var(--background-alt);
    border-bottom: solid var(--border) 0.15rem;
  }

  #contents {
    margin-top: 36px;
    width: 100%;
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
    gap: 2.8px;
    display: flex;
    flex-direction: column;
    padding-top: 10px;
    padding-bottom: 8px;
    width: 100%;
  }

  .selectedChat {
    background-color: var(--selected);
  }

  .chats p {
    transition: ease 0.2s;
    cursor: pointer;
  }

  .category {
    text-align: center;
    cursor: default;
    margin-bottom: 3px;
    margin-right: 14px;
  }

  .chats .chat-item p:hover {
    transition: ease 0.2s;
    background-color: var(--selected);
  }

  .chat-item p {
    padding: 4px;
    border-radius: 4px;
  }

  .typeText {
    margin-right: 8px;
    padding-left: 5px;
    font-weight: bold;
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