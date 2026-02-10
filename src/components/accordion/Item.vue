<script setup lang="ts">
import Arrow from '@/assets/icons/angle-down-solid.svg';

export interface IAccordionItemProps {
  id: string;
  title: string;
  innerList: string[];
  collapsed: boolean;
}
export type CollapsedChangeParams = Pick<
  IAccordionItemProps,
  'id' | 'collapsed'
>;
interface IAccordionItemEmits {
  onCollapsedChange: [params: CollapsedChangeParams];
}

defineProps<IAccordionItemProps>();
const emits = defineEmits<IAccordionItemEmits>();
</script>

<template>
  <li class="accordion-item">
    <div
      :class="['accordion-item__head', { collapsed }]"
      @click="emits('onCollapsedChange', { id, collapsed: !collapsed })"
    >
      <h6 class="accordion-item__head-title">{{ title }}</h6>
      <Arrow :class="['accordion-item__head-icon', { collapsed }]" />
    </div>
    <div :class="['accordion-item__body', { collapsed }]">
      <div :class="['accordion-item__inner', { collapsed }]">
        <p v-for="inner in innerList">
          {{ inner }}
        </p>
      </div>
    </div>
  </li>
</template>

<style scoped lang="scss">
.accordion-item {
  color: var(--bs-accordion-color);
  background-color: var(--bs-accordion-bg);
  border: none;
  border-top-left-radius: var(--bs-accordion-border-radius);
  border-top-right-radius: var(--bs-accordion-border-radius);

  &:not(:last-child) {
    border-bottom: 1px solid #dbdfea;
  }

  &__head {
    cursor: pointer;
    color: rgba(var(--bs-link-color-rgb), var(--bs-link-opacity, 1));
    position: relative;
    padding: 1rem 1.5rem;

    &.collapsed {
      border-bottom: 1px solid #dbdfea;
    }

    &-title {
      margin-top: 0;
      font-family: Nunito, sans-serif;
      font-weight: 700;
      letter-spacing: -0.01em;
      margin-bottom: 0;
      font-size: 1rem;
      line-height: 1.3;
      color: #526484;
    }

    &-icon {
      position: absolute;
      top: calc(50% - 10px);
      font-size: 1rem;
      color: #364a63;
      transition: all 0.3s ease-in-out;
      width: 20px;
      height: 20px;
      text-align: center;
      line-height: 20px;
      right: 1.5rem;

      &.collapsed {
        transform: rotate(180deg);
      }
    }
  }

  &__body {
    color: var(--bs-accordion-color);
    border-radius: 4px;
    padding: 0;
    height: 0;
    transition: all 0.3s ease-in-out;

    &.collapsed {
      height: auto;
    }
  }

  &__inner {
    display: none;
    color: var(--bs-accordion-color);
    padding: 1rem 1.5rem 1.25rem;
    word-break: break-word;
    transition: all 0.3s ease-in-out;

    p {
      margin-top: 0;
      margin-bottom: 1rem;
    }

    &:not(:last-child) {
      border-bottom: 1px solid #dbdfea;
    }

    &.collapsed {
      display: block;
    }
  }
}
</style>
