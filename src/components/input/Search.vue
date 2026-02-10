<script setup lang="ts">
import { computed } from 'vue';
import Input from './index.vue';

const modelValue = defineModel<string>();

const searchInput = computed({
  get: () => modelValue.value,
  set: (value) => {
    // TODO: Тут использовать Debounce функцию
    modelValue.value = value;
  },
});
</script>

<template>
  <Input v-model="searchInput" />
</template>

<style scoped lang="scss"></style>