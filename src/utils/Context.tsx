import { createContext } from 'react';

export interface IThemeContext {
  theme: THEME;
  setTheme: (theme: THEME) => void;
}

export type THEME = 'light' | 'dark';

const ThemeContext = createContext<IThemeContext>({ theme: 'light', setTheme: () => { } });

export default ThemeContext;
