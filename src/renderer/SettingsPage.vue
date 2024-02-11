<template>
  <div class="container">
    <p class="Title">Settings</p>
    <div class="category">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. -->
        <path
          d="M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z"
        />
      </svg>
      <p>Account</p>
    </div>
    <div class="category">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. -->
        <path
          d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"
        />
      </svg>
      <p>Themes</p>
    </div>
  </div>
  <div></div>
</template>

<script lang="ts"></script>

<style scoped>
.container {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 14rem;
  background-color: var(--background-alt);
  padding: 0.5rem;
  align-items: center;
  height: 100vh;
  z-index: 31;
  box-sizing: border-box;
  text-align: center;
  float: left;
}

.category {
  color: var(--text);
  transition: ease 0.5s;
  width: 90%;
  padding: 0.3rem;
  margin-bottom: 0.4rem;
  opacity: 0.5;
  display: flex;
  justify-content: center;
  flex-direction: row;
  background-color: transparent;
  gap: 0.5rem;
}

.category:hover {
  transform: scale(1.1);
  cursor: pointer;
  background-color: hsl(var(--selected));
  border-radius: 5px;
  opacity: 1;
  transition: ease 0.5s;
}

.category svg {
  width: 1.2rem;
  fill: var(--white);
}
.category p {
  align-self: center;
}

.Title {
  color: var(--white);
  font-weight: 500;
  font-size: 1.3rem;
  padding: 0.5rem;
}
</style>
