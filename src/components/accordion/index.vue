<script setup lang="ts">
import Item from './Item.vue';
import type {
  IAccordionItemProps,
  CollapsedChangeParams,
} from './Item.vue';
import { onMounted, ref } from 'vue';

export type IAccordionProps = Pick<
  IAccordionItemProps,
  'title' | 'innerList' | 'id'
>;

const { items } = defineProps<{ items: IAccordionProps[] }>();

const accordionItems = ref<IAccordionItemProps[]>([]);

const onCollapsedChange = ({ id, collapsed }: CollapsedChangeParams) => {
  accordionItems.value = accordionItems.value.map((item) =>
    id === item.id ? { ...item, collapsed } : { ...item, collapsed: false }
  );
};

onMounted(() => {
  accordionItems.value = items.map((item) => ({
    ...item,
    collapsed: false,
  }));
});
</script>

<template>
  <ul class="accordion">
    <Item
      v-for="item in accordionItems"
      :key="item.title"
      @onCollapsedChange="onCollapsedChange"
      v-bind="{ ...item }"
    />
  </ul>
</template>

<style scoped lang="scss">
.accordion {
  border-radius: 4px;
  border: 1px solid #dbdfea;
  background: #fff;
  text-align: left;

  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
