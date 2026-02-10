<script setup lang="ts"></script>

<template>
  <div class="form-group">
    <label
      class="form-label"
      for="default-06"
      >Default Select</label
    >
    <div class="form-control-wrap">
      <div class="form-control-select">
        <select
          class="form-control"
          id="default-06"
        >
          <option value="default_option">Default Option</option>
          <option value="option_select_name">Option select name</option>
          <option value="option_select_name">Option select name</option>
        </select>
      </div>
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

.form-control-select {
  position: relative;
}

.form-control {
  margin: 0;
  font-family: inherit;
  text-transform: none;
  word-wrap: normal;
  display: block;
  width: 100%;
  padding: 0.4375rem 1rem;
  font-size: 0.8125rem;
  font-weight: 400;
  line-height: 1.25rem;
  color: #3c4d62;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #dbdfea;
  border-radius: 4px;
  transition:
    border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
  min-height: calc(2.125rem + 2px);
  -webkit-appearance: none;

  option {
    font-family: inherit;
    text-transform: none;
    word-wrap: normal;
    font-size: 0.8125rem;
    line-height: 1.25rem;
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