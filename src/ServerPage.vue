<template>
  <div id="app">
    <SidebarMain />
    <div class="container">
    <div class="servertitle">
      <p>{{ServerInfo}}</p>
    </div>
    <div class="chats">
      <div>
        <p>Chat #1</p>
      </div>
      <div>
        <p>Chat #2</p>
      </div>
      <div>
        <p>Chat #3</p>
      </div>
    </div>
    <div class="chats">
      <div>
        <p>Vocale #1</p>
        <div class="pfpvocale">
          <img src="@/assets/pfp.jpg" />
          <img src="@/assets/pfp2.jpg" />
        </div>
      </div>
      <div>
        <p>Vocale #2</p>
      </div>
      <div>
        <p>Vocale #3</p>
      </div>
    </div>
  </div>
  </div>
</template>


<script>
import SidebarMain from './components/SidebarMain.vue'

export default {
  name: 'App',
  components: {
    SidebarMain,
  },
  props: {

    ServerInfo: String,

  },
  }

</script>

<style>
#MainPanel {
  position: relative;
}
p {
    margin: 0;
    padding: 0;
  }

  .container {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 8rem;
    max-width: 8rem;
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

  .servertitle {
    color: var(--whitesmoke);
    font-size: 1.5rem;
    font-weight: 800;
    text-align: center;
    margin-bottom: 1rem;
    border-bottom: solid var(--colore3) 0.2rem;
  }

  .pfpvocale img {
    object-fit: cover;
    border-radius: 10rem;
    width: 2rem;
    height: 2rem;
    padding: 0.2rem;
  }

  .chats {
    color: var(--whitesmoke);
    text-align: center;
    cursor: pointer;
    gap: 0.6rem;
    display: flex;
    flex-direction: column;
    border-bottom: solid var(--colore3) 0.2rem;
    padding: 1rem 0 1rem 0;
  }

 
</style>
