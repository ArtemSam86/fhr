<script setup lang="ts"></script>

<template>
  <div class="form-group">
    <label
      class="form-label"
      for="default-textarea"
      >Textarea</label
    >
    <div class="form-control-wrap">
      <textarea
        class="form-control no-resize"
        id="default-textarea"
      >
Large text area content</textarea
      >
    </div>
  </div>
</template>

<style scoped lang="scss">
.form-group {
  position: relative;
  margin-bottom: 0;
  text-align: left;
}

.form-label {
  display: inline-block;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 500;
  color: #344357;
  margin-bottom: 0.5rem;
}

.form-control-wrap {
  position: relative;
}

.form-control {
  margin: 0;
  font-family: inherit;
  display: block;
  width: 100%;
  padding: 0.4375rem 1rem;
  font-size: 0.8125rem;
  font-weight: 400;
  line-height: 1.25rem;
  color: #3c4d62;
  appearance: none;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #dbdfea;
  border-radius: 4px;
  transition:
    border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
  min-height: 122px;

  &.no-resize {
    resize: vertical;
  }

  &:focus {
    color: #3c4d62;
    background-color: #fff;
    border-color: #6576ff;
    outline: 0;
    box-shadow: 0 0 0 3px rgba(101, 118, 255, 0.1);
  }
}
</style>
