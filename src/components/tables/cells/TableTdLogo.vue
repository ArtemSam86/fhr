<script setup lang="ts">
defineProps<{ src: string }>();
</script>

<template>
  <img class="logo" alt="" :src="src" />
</template>

<style scoped lang="scss">
.logo {
  object-fit: cover;
  width: 40px;
  height: 40px;
}
</style>