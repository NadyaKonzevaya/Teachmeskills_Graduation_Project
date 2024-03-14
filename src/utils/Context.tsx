import { createContext } from 'react';
import { IThemeContext } from '../redux/interfaces';

export type THEME = 'light' | 'dark';

const ThemeContext = createContext<IThemeContext>({ theme: 'light', setTheme: () => { } });

export default ThemeContext;
