import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./features/users/userSlice";
import counterReducer from './ReduxCounter/counter/CounterSlice'
import themeSlice from './ReduxCounter/theme/themeSlice'

export default configureStore({
    reducer:{
        users : usersReducer,
        counter:counterReducer,
        color:themeSlice
    }
})
