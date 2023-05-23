<template>
  <div class="cont"> 
    <ul class="posts">
      <div class="post-cont" v-for="(post, idx) in posts" :key="post.pid">
        <div class="top-line" v-if="idx !== 0"></div>
        <Post class="post" :post="post"/>
      </div>
    </ul>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import Post from './subcomp/Post.vue';

export default {
  components: {
    Post
  },
  setup() {
    const store = useStore();

    const posts = computed(() => {
      return store.getters.getPosts;
    });

    return {
      posts
    };
  }
};
</script>

<style scoped lang="scss">
.cont {

  position: relative;

  margin: 8px;
  margin-top: 32px;
  border: 1px solid $bg-lines-color;
  border-radius: 1%;

  display: flex;

  height: 95%;
  max-height: 100%;

  .posts {

    display: flex;
    flex-direction: column;
    position: relative;

    width: 100%;
    max-height: 100%;

    list-style-type: none;
    padding: 0;
    overflow: auto;
    overflow-x: hidden;

    scroll-behavior: smooth;

    .post-cont {
      .top-line {
        margin-top: 12px;
        margin-bottom: 12px;

        height: 2px;
        background-color: $bg-lines-color;
      }

      .post {
        margin: 4px;
        margin-left: 12px;
      }

    }

  }
}
</style>