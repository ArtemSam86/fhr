<script setup lang="ts">
import Default from '@/layouts/Default.vue';
</script>

<template>
  <Default>
    <template #header>
      <nav class="nav">
        <router-link
          activeClass="nav__active-link"
          to="/"
        >
          Home
        </router-link>
        <router-link
          activeClass="nav__active-link"
          to="/task-1"
        >
          Задание 1
        </router-link>
        <router-link
          activeClass="nav__active-link"
          to="/task-2"
        >
          Задание 2
        </router-link>
        <router-link
          activeClass="nav__active-link"
          to="/task-3"
        >
          Задание 3
        </router-link>
      </nav>
    </template>
    <template #body>
      <RouterView />
    </template>
  </Default>
</template>

<style scoped lang="scss">
.nav {
  display: flex;
  gap: 16px;
  justify-content: center;

  &__active-link {
    color: #a2a6ef;
  }
}
</style>
