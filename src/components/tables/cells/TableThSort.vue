<script setup lang="ts">
import { ref } from 'vue';
import Arrow from '@/assets/icons/angle-down-solid.svg';
import type { SortOrder } from '@/shared/types/common.ts';

interface IProps {
  title: string;
  onSortHandler?: (sortParams: SortOrder) => void;
}
interface IEmits {
  onSort: [SortOrder];
}

const { onSortHandler } = defineProps<IProps>();
const emits = defineEmits<IEmits>();

const mapSortOrder: Record<SortOrder, SortOrder> = {
  asc: 'desc',
  desc: 'asc',
};
const currentSortOrder = ref<SortOrder>('asc');
const _onSortHandler = () => {
  currentSortOrder.value = mapSortOrder[currentSortOrder.value];
  if (onSortHandler) {
    onSortHandler(currentSortOrder.value);
  } else {
    emits('onSort', currentSortOrder.value);
  }
};
</script>

<template>
  <div
    class="sort-cell"
    @click="_onSortHandler"
  >
    <span class="sort-cell__title">{{ title }}</span>
    <Arrow
      :class="['sort-cell__icon', { sorted: currentSortOrder === 'asc' }]"
    />
  </div>
</template>

<style scoped lang="scss">
.sort-cell {
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
  cursor: pointer;
  text-align: left;
  user-select: none;

  &__title {
    padding: 0;
  }

  &__icon {
    width: 18px;
    height: 18px;
    transition: all 0.3s ease-in-out;

    &.sorted {
      transform: rotate(180deg);
    }
  }
}
</style>