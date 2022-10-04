<template>
  <div class="ipef-alert">
    <slot name="icon"><Bell class="icon-alert" :size="18" /></slot>
    <span class="bubble" v-if="props.numberAlert > 0">{{
      props.numberAlert
    }}</span>
  </div>
</template>

<script setup lang="ts">
import { Bell } from 'lucide-vue-next';
import { defineProps } from 'vue';
const props = defineProps({
  numberAlert: { type: Number, required: true, default: 0 },
});
</script>

<style scoped lang="scss">
@import '../../assets/scss/colors.scss';
.ipef-alert {
  position: relative;
  .icon-alert {
    color: $white;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .bubble {
    position: absolute;
    padding: 0.4rem;
    border-radius: 1000px;
    background-color: $red;
    top: -10px;
    left: -15px;

    height: 0.2rem;
    width: 0.2rem;
    font-size: 10px;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
