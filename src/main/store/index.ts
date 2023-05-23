import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      posts: [],
    };
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },
  },
  actions: {
    setPosts({ commit }, posts) {
      commit('setPosts', posts);
    },
  },
  getters: {
    getPosts(state) {
      return state.posts;
    },
  },
});

export default store;