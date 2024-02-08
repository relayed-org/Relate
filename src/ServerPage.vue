<template>
  <div class="container">
    <div class="servertitle">
      <p>{{ server.name }}</p>
    </div>
    <div v-for="(channel, group) in server.groups" :key="group" class="chats">
      <p id="category">--- {{ group }} ---</p>
      <div
        v-for="(data, channelName) in channel"
        :key="channelName"
        class="chat-item"
      >
        <p
          @click="
            this.chats = data['chats'];
            this.selectedChat = channelName;
          "
          :class="{ selectedChat: channelName == this.selectedChat }"
        >
          {{ channelName }}
        </p>
        <div class="pfpvocale">
          <img
            v-for="(userData, user) in data.active"
            :key="user"
            :src="userData"
          />
        </div>
      </div>
    </div>
  </div>
  <ChatMessage
    v-for="(message, index) in chats"
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
<script>
import ChatMessage from "./components/ChatMessage.vue";
import axios from "axios";
export default {
  name: "App",
  components: {
    ChatMessage,
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
      const filePath = "/user/profile.json";
      axios
        .get(filePath)
        .then((response) => {
          this.server = response.data.servers[this.ServerId];
          this.chats =
            this.server.groups["Text Channels"][this.server.lastChat]["chats"];
          this.selectedChat = this.server.lastChat;
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
  gap: 0.6rem;
  display: flex;
  border-bottom: solid 0.2rem var(--border);
  flex-direction: column;
  padding: 1rem 0 1rem 0;
  width: 80%;
  margin-bottom: 0.5rem;
}

.selectedChat {
  background-color: hsl(var(--selected));
  border-radius: 5px;
}

.chats p {
  transition: ease 0.5s;
  cursor: pointer;
}

#category {
  cursor: default;
}

.chats .chat-item p:hover {
  transform: scale(1.1);
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
