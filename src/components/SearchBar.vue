<template>
  <div class="ipef-search-bar">
    <input
      class="search-input"
      type="text"
      placeholder="Search"
      v-model="searchText"
    />
    <div class="search-actions">
      <Avatar></Avatar>
    </div>
  </div>
</template>

<script setup lang="ts">
import Avatar from './UI/Avatar.vue';
const searchText = '';
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
  .search-input {
    background: none;
    outline: none;
    border: none;
  }
  .search-actions {
  }
}
</style>
