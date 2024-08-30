import {configureStore} from '@reduxjs/toolkit';
import {slice} from './Slice';
import {setupListeners} from '@reduxjs/toolkit/query';
import {services} from './Services';

export const store = configureStore({
  reducer: {
    TikTok2024Reducer: slice.reducer,
    [services.reducerPath]: services.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(services.middleware),
});

setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
