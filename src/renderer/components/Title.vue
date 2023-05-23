<template>
  <div class="titlebar" @mousedown="dragStart($event)">
    <img :src=ico>
    <div class="title">{{ title }}</div>
    <div class="buttons">
      <div class="button minimize" @click="minimize"><span>_</span></div>
      <div class="button maximize" @click="maximize"><span>□</span> </div>
      <div class="button close" @click="close"><span>X</span></div>
    </div>
  </div>
</template>
  
<script>
export default {
  props: ['title', 'ico'],
  methods: {
    minimize() {
      window.electron.minimizeApp(); // Access Electron API using window object
    },
    maximize() {
      // Implement maximize logic here
      window.electron.maximizeApp();
    },
    close() {
      // Implement close logic here
      window.electron.closeApp();
    },
    dragStart(event) {
    },
  }
};
</script>
  
<style scoped lang="scss">
$btn-hov-bright: 200%;
$titlebar-color: adjust-color($color: $bg-color, $lightness: -5%, $alpha: 1.0);
$btn-trans-delay: .3s;

.titlebar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  background-color: $titlebar-color;
  color: #fff;
  user-select: none;
  -webkit-app-region: drag;
}

.title {
  padding-left: 10px;
  font-weight: bold;
}

.buttons {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  -webkit-app-region: no-drag;


  .button {
    width: 64px;
    height: 100%;
    cursor: pointer;

    font-weight: bold;
    font-size: 14px;

    display: flex;
    align-items: center;
    justify-content: center;
    background-color: $titlebar-color;
  }
}

.minimize {
  background-color: $titlebar-color;

  transition: filter $btn-trans-delay;

  &:hover {
    transition: filter $btn-trans-delay;
    filter: brightness($btn-hov-bright);
  }
}

.maximize {
  background-color: $titlebar-color;

  transition: filter $btn-trans-delay;

  &:hover {
    transition: filter $btn-trans-delay;
    filter: brightness($btn-hov-bright);
  }
}

.close {
  background-color: $titlebar-color;

  transition: background-color $btn-trans-delay;

  &:hover {
    transition: background-color $btn-trans-delay;
    background-color: #ff2e2e;
    color: #fff;
  }
}
</style>
  