<template>
  <div class="ipef-search-bar">
    <div class="search-container">
      <Search v-if="searchText == ''" class="icon icon-search" />
      <X v-else @click="searchText = ''" class="icon icon-delete" />
      <input
        class="search-input"
        type="text"
        placeholder="Search"
        v-model="searchText"
      />
    </div>

    <div class="search-actions">
      <Alert :numberAlert="3"></Alert>
      <Avatar></Avatar>
    </div>
  </div>
</template>

<script setup lang="ts">
import Avatar from './UI/Avatar.vue';
import Alert from './UI/Alert.vue';
import { watch, ref } from 'vue';
import { storeBurnTasks } from '../store/index';
import { Search, X } from 'lucide-vue-next';

const searchText = ref('');

watch(searchText, () => {
  storeBurnTasks().changeTaskSearchText(searchText.value);
  console.log(storeBurnTasks().tasksSearchText);
});
</script>

<style scoped lang="scss">
@import '../assets/scss/colors';
.ipef-search-bar {
  width: 100%;
  height: 3rem;
  background-color: $card;
  display: block;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  box-sizing: border-box;
  .search-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    .search-input {
      background: none;
      outline: none;
      border: none;
      color: $white;
    }
    .icon {
      stroke: $white;
      width: 1rem;
      cursor: pointer;
    }
  }

  .search-actions {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }
}
</style>
