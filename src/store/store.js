import {configureStore} from '@reduxjs/toolkit';
import {LoginSlice} from "./slices/login";
export const store = configureStore({
    reducer:{
        Login: LoginSlice
    }
});