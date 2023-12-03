<template>
  <div class="app__wrapper">
    <Navbar></Navbar>
  <div class="app">
    <RouterView></RouterView>
  </div>
  </div>  
</template>

<script>
import Navbar from './components/UI/Navbar.vue';

export default { components: { Navbar } };
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.app__wrapper {
  min-height: 100vh;
  background-color: #fbe4d7;
}
.app {
  padding: 30px;
}
</style>
