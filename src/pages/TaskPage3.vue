<script setup lang="ts">
import { ref } from 'vue';

import Button from '@/components/button/index.vue';
import FileUpload from '@/components/input/FileUpload.vue';
import InputDefault from '@/components/input/index.vue';
import Select from '@/components/input/Select.vue';
import Textarea from '@/components/input/Textarea.vue';
import Accordion from '@/components/accordion/index.vue';
import type { IAccordionProps } from '@/components/accordion/index.vue';

const items = ref<IAccordionProps[]>([
  {
    id: '1',
    title: 'What is Dashlite?',
    innerList: [
      '            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n' +
        '            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim\n' +
        '            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\n' +
        '            aliquip ex ea commodo consequat. Duis aute irure dolor in\n' +
        '            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\n' +
        '            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in\n' +
        '            culpa qui officia deserunt mollit anim id est laborum.',
      '            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n' +
        '            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim\n' +
        '            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\n' +
        '            aliquip ex ea commodo consequat.',
    ],
  },
  {
    id: '2',
    title: 'What are some of the benefits of receiving my bill electronically?',
    innerList: [
      '            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n' +
        '            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim\n' +
        '            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\n' +
        '            aliquip ex ea commodo consequat. Duis aute irure dolor in\n' +
        '            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\n' +
        '            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in\n' +
        '            culpa qui officia deserunt mollit anim id est laborum.',
      '            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n' +
        '            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim\n' +
        '            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\n' +
        '            aliquip ex ea commodo consequat.',
    ],
  },
  {
    id: '3',
    title: 'What is the relationship between Dashlite and payment?',
    innerList: [
      '            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n' +
        '            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim\n' +
        '            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\n' +
        '            aliquip ex ea commodo consequat. Duis aute irure dolor in\n' +
        '            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\n' +
        '            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in\n' +
        '            culpa qui officia deserunt mollit anim id est laborum.',
      '            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n' +
        '            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim\n' +
        '            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\n' +
        '            aliquip ex ea commodo consequat.',
    ],
  },
  {
    id: '4',
    title: 'What are the benefits of using Dashlite?',
    innerList: [
      '            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n' +
        '            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim\n' +
        '            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\n' +
        '            aliquip ex ea commodo consequat. Duis aute irure dolor in\n' +
        '            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\n' +
        '            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in\n' +
        '            culpa qui officia deserunt mollit anim id est laborum.',
      '            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n' +
        '            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim\n' +
        '            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\n' +
        '            aliquip ex ea commodo consequat.',
    ],
  },
]);
</script>

<template>
  <div class="container">
    <h2>Задание 3. Общее (HTML/CSS + логика)</h2>

    <div class="container__buttons">
      <Button
        label="Primary"
        variant="primary"
      />
      <Button
        label="Secondary"
        variant="secondary"
      />
      <Button
        label="Success"
        variant="success"
      />
      <Button
        label="Danger"
        variant="danger"
      />
      <Button
        label="Warning"
        variant="warning"
      />
      <Button
        label="Info"
        variant="info"
      />
      <Button
        label="Light"
        variant="light"
      />
      <Button
        label="Dark"
        variant="dark"
      />
    </div>

    <div class="container__forms">
      <InputDefault />
    </div>

    <div class="container__forms">
      <FileUpload />
    </div>

    <div class="container__forms">
      <Select />
    </div>

    <div class="container__forms">
      <Textarea />
    </div>

    <div class="container__forms">
      <Accordion :items />
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  gap: 16px;

  &__buttons {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 16px;

    padding: 16px;
    border-radius: 4px;
    border: 1px solid #dbdfea;
  }

  &__forms {
    padding: 16px;
    border-radius: 4px;
    border: 1px solid #dbdfea;
  }
}
</style>
