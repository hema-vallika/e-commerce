import { createSlice } from "@reduxjs/toolkit";

const globalSlice = createSlice({
    name: "global",
    initialState: {
        menuOpen: false,
    },
    reducers:{
        toggleMenu: (state, action)=>{
            state.menuOpen = !state.menuOpen
        }
    }

})

export const {toggleMenu} = globalSlice.actions;
export default globalSlice.reducer;