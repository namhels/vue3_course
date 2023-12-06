<template>
  <div>
    <h1>Posts page</h1>
    <MyInput
      :model-value="searchQuery"
      @update:model-value="setSearchQuery"
      v-focus
      placeholder="Search..."
    />
    <div class="create__btn">
      <MyButton @click="showDialog"> Create post </MyButton>
      <MySelect
        :model-value="selectedSort"
        @update:model-value="setSelectedSort"
        :options="sortOptions"
      />
    </div>
    <MyDialog v-model:show="dialogVisible">
      <PostForm @create="createPost" />
    </MyDialog>
    <PostList
      :posts="sortedAndSearchedPosts"
      @remove="removePost"
      v-if="!isPostsLoading"
    />
    <div v-else>Loading...</div>
    <div v-intersection="loadMorePosts"></div>
    <!-- <MyPagination v-model="page" :totalPages="totalPages"/> -->
    <!-- <div class="page__wrapper">
			<div v-for="pageNumber in totalPages" :key="pageNumber" class="page"
				:class="{ 'page--current': page === pageNumber }" @click="changePage(pageNumber)">
				{{ pageNumber }}
			</div>
		</div> -->
  </div>
</template>

<script>
// import axios from 'axios';
import PostForm from '@/components/PostForm';
import PostList from '@/components/PostList';
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';

export default {
  name: 'App',
  components: {
    PostForm,
    PostList
  },
  data() {
    return {
      dialogVisible: false
    };
  },
  methods: {
    ...mapMutations({
      setPage: 'post/setPage',
      setSearchQuery: 'post/setSearchQuery',
      setSelectedSort: 'post/setSelectedSort'
    }),
    ...mapActions({
      loadMorePosts: 'post/loadMorePosts',
      fetchPosts: 'post/fetchPosts'
    }),
    createPost(post) {
      this.posts.unshift(post);
      this.dialogVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter((p) => p.id !== post.id);
    },
    showDialog() {
      this.dialogVisible = true;
    }
  },
  mounted() {
    this.fetchPosts();
  },
  computed: {
    ...mapState({
      posts: (state) => state.post.posts,
      isPostsLoading: (state) => state.post.isPostsLoading,
      selectedSort: (state) => state.post.selectedSort,
      searchQuery: (state) => state.post.searchQuery,
      page: (state) => state.post.page,
      limit: (state) => state.post.limit,
      totalPages: (state) => state.post.totalPages,
      sortOptions: (state) => state.post.sortOptions
    }),
    ...mapGetters({
      sortedPosts: 'post/sortedPosts',
      sortedAndSearchedPosts: 'post/sortedAndSearchedPosts'
    })
  },

  watch: {
    // page() {
    // 	this.fetchPosts();
    // }
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
