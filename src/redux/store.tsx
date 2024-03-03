import { configureStore, createListenerMiddleware } from '@reduxjs/toolkit';
import {
//   persistStore,
  persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER,
} from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import moviesReducer from './movies/MoviesSlice';

// const persistCardConfig = {
//   key: 'cards',
//   storage,
// };
// const persistAuthConfig = {
//   key: 'auth',
//   storage,
//   blacklist: ['tokens'],
// };

// const persistedCardsReducer = persistReducer(
//   persistCardConfig,
//   cardsReducer,
// );

// const persistedAuthReducer = persistReducer(
//   persistAuthConfig,
//   authReducer,
// );

const listenerMiddleware = createListenerMiddleware();

export const store = configureStore({
  reducer: {
    // auth: persistedAuthReducer,
    // cardView: cardViewReducer,
    movies: moviesReducer,
  },
  middleware:
    (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat([listenerMiddleware.middleware]),
});

// export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
