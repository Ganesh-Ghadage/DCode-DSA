import { create } from 'zustand';

type Theme = 'light' | 'dark';

interface ThemeStore {
  theme: Theme;
  toggleTheme: () => void;
}

export const useThemeStore = create<ThemeStore>((set, get) => {
  const defaultTheme: Theme = 'dark';
  const saved = typeof localStorage !== 'undefined' ? localStorage.getItem('theme') as Theme : null;
  const initialTheme = saved || defaultTheme;

  // Set on load
  if (typeof document !== 'undefined') {
    document.documentElement.setAttribute('data-theme', initialTheme);
  }

  return {
    theme: initialTheme,

    toggleTheme: () => {
      const newTheme: Theme = get().theme === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', newTheme);
      document.documentElement.setAttribute('data-theme', newTheme);
      set({ theme: newTheme });
    },
  };
});
