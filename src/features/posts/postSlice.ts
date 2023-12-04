import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: '1', title: 'Learning Redux Tolkit', content: 'I`ve heard go things.'},
    {id: '2', title: 'Slices...', content: "The more I say slice, the more I want pizza."}
] 

const postsSlice = createSlice({
    name : 'posts',
    initialState,
    reducers: {}
})

export default postsSlice.reducer