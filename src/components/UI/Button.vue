<template>
  <div class="ipef--button" :class="props.active ? 'ipef--button__active' : ''">
    <slot name="icon-left"></slot>
    <p v-if="props.title !== ''" class="title"></p>
    <slot name="icon-right"></slot>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
const props = defineProps({
  title: { type: String, required: true, default: '' },
  active: { type: Boolean, required: false, default: false },
});
</script>

<style lang="scss" scoped>
@import '../../assets/scss/colors';
.ipef--button {
  background-color: $card;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: #ff574b7d;
  }
  p {
    margin: 0;
  }
  padding: 0.5rem;
  border-radius: 7px;
}
.ipef--button__active {
  background-color: #ff574b7d;
}
</style>
