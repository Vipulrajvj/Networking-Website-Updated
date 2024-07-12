//Making a user slice which can be used anywhere in the feed or the sidebar or the widgets , that is the use of redux, to create slices for such data

import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/counter/userSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
