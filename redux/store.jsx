import {configureStore} from '@reduxjs/toolkit'
import ThemeSlice from './slices/ThemeSlice';

const store = configureStore({
    reducer:{
        user: ThemeSlice
    }
})

export default store;