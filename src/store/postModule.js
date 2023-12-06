import axios from "axios";

export const postModule = {
  state: () => ({
    posts: [],
    isPostsLoading: false,
    selectedSort: '',
    searchQuery: '',
    page: 1,
    limit: 10,
    totalPages: 0,
    sortOptions: [
      { value: 'title', name: 'By name' },
      { value: 'body', name: 'By content' }
    ]
  }),

  getters: {
    sortedPosts(state) {
      return [...state.posts].sort((p1, p2) =>
        p1[state.selectedSort]?.localeCompare(p2[state.selectedSort])
      );
    },
    sortedAndSearchedPosts(state, getters) {
      return getters.sortedPosts.filter((p) =>
        p.title.toLowerCase().includes(state.searchQuery.toLowerCase())
      );
    }
  },

  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },
    setLoading(state, bool) {
      state.isPostsLoading = bool;
    },
    setPage(state, page) {
      state.page = page;
    },
    setSelectedSort(state, selectedSort) {
      state.selectedSort = selectedSort;
    },
    setTotalPages(state, totalPages) {
      state.totalPages = totalPages;
    },
    setSearchQuery(state, searchQuery) {
      state.searchQuery = searchQuery;
    }
  },

  actions: {
    async fetchPosts({ state, commit }) {
      try {
        commit('setLoading', true);
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/posts',
          {
            params: {
              _page: state.page,
              _limit: state.limit
            }
          }
        );
        commit(
          'setTotalPages',
          Math.ceil(response.headers['x-total-count'] / this.limit)
        );
        commit('setPosts', response.data);
      } catch (error) {
        alert('Error: ' + error);
      } finally {
        commit('setLoading', false);
      }
    },
    async loadMorePosts({ state, commit }) {
      try {
        commit('setPage', state.page + 1);
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/posts',
          {
            params: {
              _page: state.page,
              _limit: state.limit
            }
          }
        );
        commit(
          'setTotalPages',
          Math.ceil(response.headers['x-total-count'] / this.limit)
        );
        commit('setPosts', [...state.posts, ...response.data]);
      } catch (error) {
        alert('Error: ' + error);
      }
    }
  },

	namespaced: true
};
