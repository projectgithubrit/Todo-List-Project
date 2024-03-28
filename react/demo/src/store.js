import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './Component/todoSlice';

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});
