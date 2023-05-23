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
  position: absolute;
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
}

.content-cont {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;

  .search-cont {
    width: 100%;
    margin-left: 12px;
    margin-top: 12px;
  }

  .schedule-cont {
    width: 40%;
  }

}


</style>
