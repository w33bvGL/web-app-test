import { defineStore } from 'pinia';

interface ToastMessage {
  id: number;
  text: string;
  type: 'success' | 'error';
}

export const useToastStore = defineStore('toast', {
  state: () => ({
    toasts: [] as ToastMessage[],
  }),

  actions: {
    showToast(text: string, type: 'success' | 'error' = 'success') {
      const id = Date.now();
      this.toasts.push({ id, text, type });

      setTimeout(() => {
        this.toasts = this.toasts.filter(t => t.id !== id);
      }, 3000);
    },
  },
});
