<script setup lang="ts">
type Variant =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'
  | 'light'
  | 'dark'
  | 'default';
interface IProps {
  label: string;
  variant?: Variant;
  cssClass?: string;
}
const { variant = 'default', cssClass = '' } = defineProps<IProps>();
</script>

<template>
  <a
    :class="['btn', `btn--${variant}`, cssClass]"
    href=""
  >
    {{ label }}
  </a>
</template>

<style scoped lang="scss">
.btn {
  display: inline-block;
  padding: var(--bs-btn-padding-y) var(--bs-btn-padding-x);
  font-family: var(--bs-btn-font-family), sans-serif;
  font-size: var(--bs-btn-font-size);
  font-weight: var(--bs-btn-font-weight);
  line-height: var(--bs-btn-line-height);
  color: var(--bs-btn-color);
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  border: var(--bs-btn-border-width) solid var(--bs-btn-border-color);
  border-radius: var(--bs-btn-border-radius);
  background-color: var(--bs-btn-bg);
  transition:
    color 0.15s ease-in-out,
    background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
  box-shadow: var(--bs-btn-box-shadow);

  &:focus {
    box-shadow: var(--bs-btn-focus-box-shadow);
  }

  &:hover {
    color: var(--bs-btn-hover-color);
    background: var(--bs-btn-hover-bg);
    border: 1px solid var(--bs-btn-hover-border-color);
  }
}
</style>
