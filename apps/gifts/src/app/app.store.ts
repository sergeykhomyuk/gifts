import { configureStore } from '@reduxjs/toolkit';
import { giftsReducer, usersReducer } from '@and-open/gifts/store';
import { environment } from '../environments/environment';

export const appStore = configureStore({
  reducer: {
    users: usersReducer,
    gifts: giftsReducer,
  },
  devTools: !environment.production,
});
