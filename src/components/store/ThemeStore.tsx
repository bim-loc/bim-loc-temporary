import { create } from "zustand";

interface ThemeStore {
    theme: string;
    checkIsDefault: (currentTheme: string) => boolean;
    toggleTheme: () => void;
    clearTheme: () => void;
}

// theme dict 
const themeDict = {
    'dark': 'dim',
    'light': 'nord',
}

const getDefaultTheme = (): string => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return themeDict['dark'];
    }
    else {
        return themeDict['light'];
    }
};

export const useThemeStore = create<ThemeStore>((set) => ({
    theme: getDefaultTheme(),
    toggleTheme: () => set((state) => ({ 
        theme: state.theme === themeDict['light'] ? themeDict['dark'] : themeDict['light'] 
    })),
    clearTheme: () => set({ theme: getDefaultTheme() }),
    checkIsDefault: (currentTheme: string) => getDefaultTheme() === currentTheme,
}));
