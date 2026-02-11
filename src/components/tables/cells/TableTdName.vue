<script setup lang="ts">
defineProps<{ name: string }>();
</script>

<template>
  <div
    class="name"
    v-html="name"
  ></div>
</template>

<style scoped lang="scss">
.name {
  display: flex;
  align-items: center;
}
</style>
