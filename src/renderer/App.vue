<template>
  <div class="main-cont">
    <Title title="Nibot"/>
    <div class="content-cont">
      <div class="search-cont">
        <Search/>
        <PostList/>
      </div>
      <div class="schedule-cont">
        <Schedule/>
      </div>
    </div>
  </div>
  
</template>

<script setup lang="ts">
import Title from './components/Title.vue'
import Search from './components/Search.vue'
import PostList from './components/PostList.vue'
import Schedule from './components/Schedule.vue'
</script>

<style lang="scss">
@import './../variables.scss';

html {
  overflow: hidden;
}

.main-cont {
  width: 100%;
  height: 100vh;

  position: relative;

  display: flex;
  flex-direction: column;
}

.content-cont {
  position: inherit;

  display: flex;
  flex-direction: row;
  width: 100%;
  height: 80vh; /* Adjusted to 100vh */
  max-height: 80vh; /* Adjusted to 100vh */

  .search-cont {
    position: relative;

    width: 100%;
    max-height: 100%;
    margin-left: 12px;
    margin-top: 12px;

    display: flex;
    flex-direction: column;
  }

  .schedule-cont {
    width: 40%;
    display: flex;
  }

}


</style>
