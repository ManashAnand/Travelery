import {createSlice} from '@reduxjs/toolkit'

const UserSlice =  createSlice({
    name: "user",
    initialState:false,
    reducers:{
    
        logIn(state,action){
            
            return  {...state,...action.payload}
        },
        logOut(state, action) {
            
            return {}; 
          },
    }
})
export default UserSlice.reducer;
export const {logIn,logOut} = UserSlice.actions