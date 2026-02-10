<script setup lang="ts"></script>

<template>
  <div class="form-group">
    <label
      class="form-label"
      for="default-06"
      >Default File Upload</label
    >
    <div class="form-control-wrap">
      <div class="form-file">
        <input
          type="file"
          multiple
          class="form-file-input"
          id="customFile"
        /><label
          class="form-file-label"
          for="customFile"
          ><span>Choose file</span></label
        >
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.form-group {
  position: relative;
  margin-bottom: 1.25rem;
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

.form-file {
  position: relative;
  display: inline-block;
  width: 100%;
  height: calc(2.125rem + 2px);
  margin-bottom: 0;
}

.form-file-input {
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  position: relative;
  z-index: 2;
  width: 100%;
  height: calc(2.125rem + 2px);
  margin: 0;
  opacity: 0;

  &:focus {
    color: #3c4d62;
    background-color: #fff;
    border-color: #6576ff;
    outline: 0;
    box-shadow: 0 0 0 3px rgba(101, 118, 255, 0.1);
  }
}

.form-file-label {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1;
  height: calc(2.125rem + 2px);
  font-weight: 400;
  line-height: 1.25rem;
  color: #3c4d62;
  background-color: #fff;
  border: 1px solid #dbdfea;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;

  &::after {
    height: 100%;
    display: block;
    padding: 0.4375rem 1rem;
    line-height: 1.25rem;
    color: #3c4d62;
    content: 'Browse';
    background-color: #ebeef2;
    border-left: inherit;
    border-radius: 0 4px 4px 0;
  }

  span {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    flex-grow: 0;
    padding: 0.4375rem 1rem;
  }
}
</style>
