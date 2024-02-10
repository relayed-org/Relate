<template>
  <div class="messaggi">
    <div>
      <div class="infotxt">
        <div>
          <img class="pfptxt" id="pfp" :src="pfp" />
        </div>
        <p class="nome">{{ username }}</p>
        <p
          class="role"
          v-for="(roleObj, index) in roles"
          :key="index"
          :style="{ backgroundColor: roleObj.color }"
        >
          {{ roleObj.role.toUpperCase() }}
        </p>
      </div>
      <p class="txt">{{ message }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    message: String,
    username: String,
    roles: Array,
    pfp: String,
  },
};
</script>
<style scoped>
p {
  margin: 0;
  padding: 0;
}

.messaggi {
  display: flex;
  justify-self: start;
  justify-content: start;
  margin-bottom: 1rem;
}

a {
  text-decoration: none;
  color: inherit;
}

.infotxt {
  display: flex;
  flex-direction: row;
  gap: 0.6rem;
}

.pfptxt {
  object-fit: cover;
  border-radius: 10rem;
  width: 2.5rem;
  height: 2.5rem;
  align-self: center;
}

.nome {
  color: var(--text);
  font-size: 1rem;
  align-self: center;
  font-weight: 500;
}

.role {
  font-size: 0.6rem;
  align-self: center;
  color: white;
  font-weight: 800;
  padding: 0.3rem;
  border-radius: 5px;
  margin-right: 0.5rem;
}
.txt {
  color: var(--text);
}
</style>
