import { createContext } from 'react';

export type THEME = 'light' | 'dark';

interface IThemeContext {
  theme: THEME;
  setTheme: (theme: THEME) => void;
}

const ThemeContext = createContext<IThemeContext>({ theme: 'light', setTheme: () => { } });

export default ThemeContext;
