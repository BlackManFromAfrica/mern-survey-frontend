import { configureStore } from "@reduxjs/toolkit";
import {pollsReducer} from './slices/polls'
const store = configureStore({
    reducer: {
        polls: pollsReducer
    }
})
export default store