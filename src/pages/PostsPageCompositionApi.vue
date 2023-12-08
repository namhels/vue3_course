<template>
  <div>
    <h1>Posts page</h1>
    <MyInput v-focus v-model="searchQuery" placeholder="Search..." />
    <div class="create__btn">
      <MyButton> Create post </MyButton>
      <MySelect v-model="selectedSort" :options="sortOptions" />
    </div>
    <MyDialog v-model:show="dialogVisible">
      <PostForm/>
    </MyDialog>
    <PostList
      :posts="sortedAndSearchedPosts"
      v-if="!isPostsLoading"
    />
    <div v-else>Loading...</div>
  </div>
</template>

<script>
import PostForm from '@/components/PostForm';
import PostList from '@/components/PostList';
import {usePosts} from "@/hooks/usePosts";
import useSortedPosts from "@/hooks/useSortedPosts";
import useSortedAndSearchedPosts from "@/hooks/useSortedAndSearchedPosts";

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
    const {posts, totalPages, isPostsLoading} = usePosts(10);
    const {sortedPosts, selectedSort} = useSortedPosts(posts);
    const {searchQuery, sortedAndSearchedPosts} = useSortedAndSearchedPosts(sortedPosts)

    return {
      posts,
      totalPages,
      isPostsLoading,
      sortedPosts,
      selectedSort,
      searchQuery,
      sortedAndSearchedPosts,
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
