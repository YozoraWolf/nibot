<template>
  <div class="sidebar">
    <router-link to="/search" class="icon">
      <font-awesome-icon class="i" :icon="['fas', 'search']" />
    </router-link>
    <router-link to="/schedule" class="icon">
      <font-awesome-icon :icon="['fas', 'calendar']" />
    </router-link>
    <router-link to="/bots" class="icon">
      <font-awesome-icon :icon="['fas', 'robot']" />
    </router-link>
    <router-link to="/settings" class="icon">
      <font-awesome-icon :icon="['fas', 'cog']" />
    </router-link>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { RouterLink } from 'vue-router';

export default {
  components: {
    FontAwesomeIcon,
    RouterLink,
  },
};
</script>

<style lang="scss" scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  background-color: $bg-color;
  min-width: 80px;
  height: 100vh;
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.2);

  margin-right: 20px;
}

.icon {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  color: $txt-color;

  &:hover {
    background-color: adjust-color($color: $bg-color, $lightness: 5%, $alpha: 1.0);
  }

  .i {
    font-size: 24px;
  }
}
</style>
