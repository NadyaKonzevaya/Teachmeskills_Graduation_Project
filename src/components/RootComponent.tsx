import React, { useMemo, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from '../redux/store';
import App from '../App';
import '../index.css';
import ThemeContext, { THEME } from '../utils/Context';

export default function RootComponent() {
  const [theme, setTheme] = useState<THEME>('light');
  const themeMemo = useMemo(() => ({ theme, setTheme }), [theme, setTheme]);
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <PersistGate persistor={persistor} loading={null}>
            <ThemeContext.Provider value={themeMemo}>
              <App />
            </ThemeContext.Provider>
          </PersistGate>
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
  );
}
