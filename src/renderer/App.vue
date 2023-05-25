<template>
  <div class="main-cont">
    <Title title="Nibot"/>
    <div class="content-cont">
    <div class="sidebar-cont">
      <Sidebar/>
    </div>
    <router-view/>
    </div>
  </div>
  
</template>

<script setup lang="ts">
import Title from './components/Title.vue'
import Sidebar from './components/Sidebar.vue'
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

  .sidebar-cont {
    display: flex;
    margin: 0;
    padding: 0;
    width: 100px;
    height: 100%;

    margin-right: 8px;
  }
}

.content-cont {
  position: relative;

  display: flex;
  flex-direction: row;
  height: 80vh; /* Adjusted to 100vh */
  max-height: 80vh; /* Adjusted to 100vh */

  margin-right: 12px;
}


</style>
