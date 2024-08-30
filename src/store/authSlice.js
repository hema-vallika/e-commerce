import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        userStatus: true,
        userDetails: null,
    },
    reducers:{
        loginUser: (state, action) =>{
            state.userStatus = true
            state.userDetails = action.payload
        },
        logoutUser: (state, action) =>{
            state.userStatus = false
            state.userDetails = null
        }
    }
})

export const {loginUser, logoutUser} = authSlice.actions;
export default authSlice.reducer;