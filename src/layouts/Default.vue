<script setup lang="ts"></script>

<template>
  <div class="default">
    <div class="default__header">
      <slot name="header" />
    </div>
    <div class="default__body">
      <slot name="body" />
    </div>
  </div>
</template>

<style scoped>
.default {
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 100vh;
}
</style>
