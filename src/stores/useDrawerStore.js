import { defineStore } from 'pinia';

export const useDrawerStore = defineStore('drawer', {
  state: () => ({
    isDrawerVisible: false,
  }),
  actions: {
    toggleDrawer() {
      this.isDrawerVisible = !this.isDrawerVisible;
    },
    closeDrawer() {
      this.isDrawerVisible = false;
    },
  },
});
