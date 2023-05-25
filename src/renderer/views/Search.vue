<template>
  <div class="search-cont">
    <InputText/>
    <PostList/>
  </div>
</template>

<script>
import InputText from '../components/subcomp/InputText.vue';
import PostList from '../components/PostList.vue';

export default {
    components: {
    InputText,
    PostList
  }
}
</script>

<style lang="scss" scoped>
  .search-cont {
    position: relative;

    width: 100%;
    max-height: 100%;
    margin-left: 12px;
    margin-top: 12px;

    display: flex;
    flex-direction: column;
  }
</style>