import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice'; // مثال على slice

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
});
