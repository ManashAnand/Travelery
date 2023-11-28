import {createSlice} from '@reduxjs/toolkit'

const ThemeSlice =  createSlice({
    name: "user",
    initialState:false,
    reducers:{
    
        logIn(state,action){
            // console.log("From userslice")
            return state = true;
        },
        logOut(state, action) {
            return state = false;
          },
    }
})
export default ThemeSlice.reducer;
export const {logIn,logOut} = ThemeSlice.actions