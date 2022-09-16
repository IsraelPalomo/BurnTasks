<template>
  <div class="side-bar">
    <h1 @click="storeBurnTasks().increment()">{{ storeBurnTasks().count }}</h1>
  </div>
</template>

<script setup lang="ts">
import { storeBurnTasks } from '../store/index';
</script>

<style scoped lang="scss">
@import '../assets/scss/colours';
.side-bar {
  height: calc(100vh - 2rem);
  width: 13rem;
  background-color: $card;
  margin: 0 1rem;
  border-radius: 10px;
}
</style>
