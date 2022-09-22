<template>
  <div class="ipef-avatar">
    <slot name="icon"><User class="icon-user" :size="20" /></slot>
    <span v-if="props.text !== ''">{{ props.text }}</span>
  </div>
</template>

<script setup lang="ts">
import { User } from 'lucide-vue-next';
import { defineProps } from 'vue';
const props = defineProps({ text: { type: String } });
</script>

<style scoped lang="scss">
@import '../../assets/scss/colors.scss';
.ipef-avatar {
  color: $white;
  text-transform: capitalize;
  display: flex;
  gap: 0.5rem;
  align-items: flex-end;
  .icon-user {
    color: $white;
    padding: 0.5rem;
    box-sizing: content-box;
    border-radius: 1000px;
    background-color: $bg;
  }
}
</style>
