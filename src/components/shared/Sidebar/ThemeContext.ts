import { createContext } from "react";

export const themes = {
  light: {
    bgColor: "indigo",
    name: "light",
    main: 100,
    profile: 400,
    notify: 600,
    text: 700,
  },
  dark: {
    bgColor: "indigo",
    name: "dark",
    main: 700,
    profile: 400,
    notify: 200,
    text: 100,
  },
};

type ContextTheme = {
  theme: typeof themes.light;
  setTheme: Function;
  bgColor: string;
  setBgColor: Function;
  showSidebar: boolean;
  setShowSidebar: Function;
};

export const ThemeContext = createContext({} as ContextTheme);
