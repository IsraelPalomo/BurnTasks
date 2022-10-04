import { defineStore } from 'pinia';

export const storeBurnTasks = defineStore('BurnTasks', {
  state: () => {
    return {
      tasksSearchText: '',
    };
  },
  actions: {
    changeTaskSearchText(newText: string) {
      this.tasksSearchText = newText;
    },
  },
});
