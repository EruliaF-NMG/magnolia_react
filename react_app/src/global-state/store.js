
import { configureStore } from '@reduxjs/toolkit';
import formReducer from './slice/formSlices';

export const store = configureStore({
    reducer: {
        form:formReducer
    }
});