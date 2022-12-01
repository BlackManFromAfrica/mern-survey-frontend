import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchPolls = createAsyncThunk('/polls/fetchPolls', async()=>{
    const {data} = await axios.get('/')
    return data
})

export const fetchRemovePoll = createAsyncThunk('/polls/fetchRemovePoll', async(id)=>{
    axios.delete(`/polls/${id}`)
})

const initialState = {
    polls: {
        items: [],
        status: 'loading'
    }
}

const pollsSlice = createSlice({
    name: 'polls',
    initialState,
    reducers: {},
    extraReducers: {
        // опросы
        [fetchPolls.pending]: (state)=>{
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
        },
        // удаление
        [fetchRemovePoll.pending]: (state, action)=>{
            state.polls.items = state.polls.items.filter((obj) => obj._id !== action.meta.arg)
        }
    }
})

export const pollsReducer = pollsSlice.reducer