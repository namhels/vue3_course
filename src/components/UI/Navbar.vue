<template>
  <div class="navbar">
    <h2 @click="$router.push('/')" class="logo">SuperVue</h2>
    <div class="navbar__btns">
      <MyButton @click="$router.push('/posts')">Posts</MyButton>
      <MyButton @click="$router.push('/about')" style="margin-left: 20px"
        >Tyger</MyButton
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  padding: 0 30px;
  height: 75px;
  background-color: aquamarine;
  box-shadow: 2px 2px 4px grey;
}
.logo {
  cursor: pointer;
  font-family: fantasy;
  font-size: 42px;
  font-style: italic;
  text-shadow: 1px 1px 1px red, 2px 2px 1px red;
}
.navbar__btns {
  margin-left: auto;
}
</style>
