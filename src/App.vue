<template>
  <Navbar></Navbar>
  <div class="app">
    <RouterView></RouterView>
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

.app {
  padding: 30px;
}
</style>
