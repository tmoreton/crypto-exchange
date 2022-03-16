import { configureStore } from '@reduxjs/toolkit';

const user = (state = {}, action:any) => {
  switch (action.type) {
    default:
      return state
  }
}

export const store = configureStore({
  reducer: {
    user,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});
