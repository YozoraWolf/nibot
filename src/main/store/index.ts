import { createStore } from 'vuex';

export const store = createStore({
  state() {
    return {
      posts: [],
      bots: []
    };
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },
    setBots(state, bots) {
      state.bots = bots;
    },
  },
  actions: {
    setPosts({ commit }, posts) {
      commit('setPosts', posts);
    },
    setBotss({ commit }, bots) {
      commit('setBots', bots);
    },
  },
  getters: {
    getPosts(state) {
      return state.posts;
    },
    getBotss(state) {
      return state.bots;
    },
  },
});

export default store;