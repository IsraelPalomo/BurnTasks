import { defineStore } from 'pinia';

export const storeBurnTasks = defineStore('BurnTasks', {
  state: () => {
    return { count: 0 };
  },
  actions: {
    increment() {
      this.count++;
    },
  },
});
