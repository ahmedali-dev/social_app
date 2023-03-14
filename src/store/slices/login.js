import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    userTocken: ''
};

export const LoginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        addTokcken: (state,action) => {
            state.userTocken = "hello world";
        }
    }
});

export const {addTocken} = LoginSlice.actions;
export default LoginSlice.reducer;