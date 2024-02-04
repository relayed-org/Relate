<template>
    <div class="container">

      <p class="category">Account</p>
      <p class="category">Themes</p>

    </div>
    <div>
      
    </div>
</template>

<script>

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

  .category {
    color: var(--text);
    transition: ease 0.5s;
    width: 100%;
  }

  .category:hover {
    transform: scale(1.1);
    cursor: pointer;
    transition: ease 0.5s;
  }

</style>