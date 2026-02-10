<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { storeToRefs } from 'pinia';
import { useTablesStore } from '@/stores/tables';
import Search from '@/components/input/Search.vue';
import Table from './Table.vue';

const tablesStore = useTablesStore();
const { clubsTable } = storeToRefs(tablesStore);

const searchInput = ref('');
watch(searchInput, tablesStore.searchInTable);

onMounted(async () => {
  await tablesStore.getClubs();
});
</script>

<template>
  <div class="table-wrap">
    <Search v-model="searchInput" />
    <Table :table="clubsTable" />
  </div>
</template>

<style scoped lang="scss">
.table-wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
