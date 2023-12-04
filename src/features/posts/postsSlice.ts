import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

const initialState = [
    {id: '1', title: 'Learning Redux Tolkit', content: 'I`ve heard go things.'},
    {id: '2', title: 'Slices...', content: "The more I say slice, the more I want pizza."}
] 

const postsSlice = createSlice({
    name : 'posts',
    initialState,
    reducers: {}
})
export const selectAllPosts = (state: RootState) => state.posts
export default postsSlice.reducer