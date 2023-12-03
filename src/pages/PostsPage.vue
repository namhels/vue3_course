<template>
  <div>
    <h1>Posts page</h1>
    <MyInput v-model="searchQuery" placeholder="Search..." />
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
import axios from 'axios';
import PostForm from '@/components/PostForm';
import PostList from '@/components/PostList';

export default {
  name: 'App',
  components: {
    PostForm,
    PostList
  },
  data() {
    return {
      posts: [],
      dialogVisible: false,
      isPostLoading: false,
      selectedSort: '',
      searchQuery: '',
      page: 1,
      limit: 10,
      totalPages: 0,
      sortOptions: [
        { value: 'title', name: 'By name' },
        { value: 'body', name: 'By content' }
      ]
    };
  },
  methods: {
    createPost(post) {
      this.posts.unshift(post);
      this.dialogVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter((p) => p.id !== post.id);
    },
    showDialog() {
      this.dialogVisible = true;
    },
    // changePage(pageNumber) {
    // 	this.page = pageNumber;
    // },
    async fetchPosts() {
      try {
        this.isPostLoading = true;
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/posts',
          {
            params: {
              _page: this.page,
              _limit: this.limit
            }
          }
        );
        this.totalPages = Math.ceil(
          response.headers['x-total-count'] / this.limit
        );
        this.posts = response.data;
      } catch (error) {
        alert('Error: ' + error);
      } finally {
        this.isPostLoading = false;
      }
    },
    async loadMorePosts() {
      try {
        this.page += 1;
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/posts',
          {
            params: {
              _page: this.page,
              _limit: this.limit
            }
          }
        );
        this.totalPages = Math.ceil(
          response.headers['x-total-count'] / this.limit
        );
        this.posts = [...this.posts, ...response.data];
      } catch (error) {
        alert('Error: ' + error);
      }
    }
  },
  mounted() {
    this.fetchPosts();

    // =======IntersectionObserver=======
    // const options = {
    //   rootMargin: '0px',
    //   threshold: 1.0
    // };
    // const callback = (entries, observer) => {
    //   if (entries[0].isIntersecting && this.page < this.totalPages) {
    //     this.loadMorePosts();
    //   }
    // };
    // const observer = new IntersectionObserver(callback, options);
    // observer.observe(this.$refs.observer);
  },
  computed: {
    sortedPosts() {
      return [...this.posts].sort((p1, p2) =>
        p1[this.selectedSort]?.localeCompare(p2[this.selectedSort])
      );
    },
    sortedAndSearchedPosts() {
      return this.sortedPosts.filter((p) =>
        p.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
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
