<template>
  <div class="ipef--controls-view">
    <div class="controls">
      <Button
        ><template v-slot:icon-right>
          <Menu class="icon" color="white" :size="20" /> </template
      ></Button>
      <Button
        ><template v-slot:icon-right>
          <LayoutGrid class="icon" color="white" :size="20" /> </template
      ></Button>
    </div>
    <Button
      ><template v-slot:icon-right>
        <Plus class="icon" color="white" :size="20" /> </template
    ></Button>
  </div>
</template>

<script setup lang="ts">
import Button from './UI/Button.vue';
// icons
import { Plus, Menu, LayoutGrid } from 'lucide-vue-next';
</script>

<style lang="scss" scoped>
.ipef--controls-view {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .controls {
    display: flex;
  }
}
</style>
