<template>
  <div class="side-bar">
    <div class="side-bar__contain-title">
      <h2>03</h2>
    </div>
    <div
      v-for="(item, index) in sidebarItems"
      :key="index"
      class="side-bar__item"
    >
      {{ item }}
    </div>
  </div>
</template>

<script setup lang="ts">
const sidebarItems = [
  'Dashboard',
  'Projects',
  'My Tasks',
  'Calendar',
  'Time Manage',
  'Report',
  'Settings',
];
</script>

<style scoped lang="scss">
@import '../assets/scss/colors';
.side-bar {
  height: calc(100vh - 2rem);
  background-color: $card;
  border-radius: 10px;
  display: grid;
  gap: 1rem;
  color: $white;
  .side-bar__contain-title {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .side-bar__item {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: fit-content;
    padding: 1rem 0;
    cursor: pointer;
    &:hover {
      background: linear-gradient(
        90deg,
        rgba(255, 88, 75, 0.28084737312893904) 0%,
        rgba(255, 255, 255, 0) 100%
      );
      &::after {
        content: '';
        display: block;
        height: 100%;
        width: 0.3rem;
        border-radius: 10px;
        background-color: $red;
        position: absolute;
        right: 0;
      }
    }
  }
}
</style>
