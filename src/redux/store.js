import { configureStore } from "@reduxjs/toolkit";
import {pollsReducer} from './slices/polls'
import {authReducer} from './slices/auth'
const store = configureStore({
    reducer: {
        polls: pollsReducer,
        auth: authReducer,
    }
})
export default store