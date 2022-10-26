import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchPolls = createAsyncThunk('/polls/fetchPolls', async()=>{
    const {data} = await axios.get('/polls')
    return data
})
const initialState = {
    polls: {
        items: [],
    }
}

const pollsSlice = createSlice({
    name: 'polls',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchPolls.pending]: (state, action)=>{
            state.polls.items = []
            state.polls.status = 'loading';
        },
        [fetchPolls.fulfilled]: (state, action)=>{
            state.polls.items = action.payload;
            state.polls.status = 'loaded';
        },
        [fetchPolls.rejected]: (state)=>{
            state.polls.items = []
            state.polls.status = 'error';
        }
    }
})

export const pollsReducer = pollsSlice.reducer