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
  background-image: url(@/assets/flowersField.jpg);
  background-repeat: repeat-y;
  color: azure;
  font-family: fantasy;
  text-shadow:
  1px 1px 1px red,
  2px 2px 1px red;
  /* background-size: cover; */
}
.app {
  padding: 30px;
}
</style>
