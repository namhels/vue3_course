<template>
  <div>
    <h1>{{ likes }}</h1>
    <h1>Posts page</h1>
    <!-- <MyInput v-focus v-model="searchQuery" placeholder="Search..." />
    <div class="create__btn">
      <MyButton @click="showDialog"> Create post </MyButton>
      <MySelect v-model="selectedSort" :options="sortOptions" />
    </div>
    <MyDialog v-model:show="dialogVisible">
      <PostForm @create="createPost" />
    </MyDialog>
    <PostList
      :posts="sortedAndSearchedPosts"
      @remove="removePost"
      v-if="!isPostLoading"
    />
    <div v-else>Loading...</div>
    <div v-intersection="loadMorePosts"></div> -->
  </div>
</template>

<script>
import axios from 'axios';
import PostForm from '@/components/PostForm';
import PostList from '@/components/PostList';
import {ref} from 'vue';

export default {
  name: 'App',
  components: {
    PostForm,
    PostList
  },
  data() {
    return {
      dialogVisible: false,
      sortOptions: [
        { value: 'title', name: 'By name' },
        { value: 'body', name: 'By content' }
      ]
    };
  },
  setup(props) {
    const likes = ref(2)
    return {
      likes,
    }
  }
};
</script>

<style>
.create__btn {
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  margin-bottom: 15px;
}

.page__wrapper {
  display: flex;
  justify-content: center;
  gap: 5px;
  margin-top: 22px;
}

.page {
  color: plum;
  border: 2px solid plum;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
}

.page--current {
  color: turquoise;
  border: 2px solid turquoise;
}
</style>
