<script setup lang="ts">
import type { ITable, TdThComponent } from '@/shared/lib/table';

defineProps<{ table: ITable }>();

const hasHTMLElement = (
  el: TdThComponent | HTMLElement | string | number | null | undefined
) => {
  if (!el) return false;
  return !(
    typeof el === 'string' ||
    typeof el === 'number' ||
    el instanceof HTMLElement
  );
};
</script>

<template>
  <table
    :class="['table', table.cssClass]"
    table=""
  >
    <thead :class="['table__head', table.header.cssClass]">
      <tr :class="['table__head-tr', table.header.row.cssClass]">
        <th
          :class="['table__head-th', cell.cssClass]"
          v-for="cell in table.header.row.cells"
        >
          <component
            v-if="hasHTMLElement(cell.component)"
            :is="cell.component"
          />
          <template v-else>{{ cell.component }}</template>
        </th>
      </tr>
    </thead>
    <tbody :class="['table__body', table.body.cssClass]">
      <tr
        :class="['table__body-tr', row.cssClass]"
        v-for="row in table.body.rows"
      >
        <td
          :class="['table__body-td', td.cssClass]"
          v-for="td in row.cells"
        >
          <component
            v-if="hasHTMLElement(td.component)"
            :is="td.component"
          />
          <template v-else>{{ td.component }}</template>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped lang="scss">
.table {
  border-collapse: collapse;
  border: none;

  td,
  tr,
  th {
    border: none;
  }

  th,
  td {
    padding: 6px;
    text-align: left;
  }

  tr {
    border-radius: 4px;
  }

  &__head {
    &-tr {
    }
    &-th {
    }
  }
  &__body {
    &-tr {
      background-color: #d3cfcf;
      border-color: #d3cfcf;

      &.active {
        background-color: yellow;
      }
    }
    &-td {
    }
  }
}
</style>
