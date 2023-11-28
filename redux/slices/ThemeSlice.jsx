import {createSlice} from '@reduxjs/toolkit'

const ThemeSlice =  createSlice({
    name: "user",
    initialState:false,
    reducers:{
    
        dark(state,action){
            // console.log("From userslice")
            return state = true;
        },
        light(state, action) {
            return state = false;
          },
    }
})
export default ThemeSlice.reducer;
export const {dark,light} = ThemeSlice.actions