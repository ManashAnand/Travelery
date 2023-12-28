import {configureStore} from '@reduxjs/toolkit'
import ThemeSlice from './slices/ThemeSlice';
import UserSlice from './slices/UserSlice';

const store = configureStore({
    reducer:{
        theme: ThemeSlice,
        user: UserSlice
    }
})

export default store;