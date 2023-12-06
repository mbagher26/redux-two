import { PayloadAction, createSlice, nanoid } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import sub from "date-fns/sub";
export interface postState {
    id: string,
    title: string,
    content: string,
    date: string
}

const initialState: postState[] = [
    {
    id: '1', 
    title: 'Learning Redux Tolkit', 
    content: 'I`ve heard go things.',
    date: sub(new Date(), {minutes: 10}).toISOString()
},
    { id: '2', 
    title: 'Slices...', 
    content: "The more I say slice, the more I want pizza.",
    date: sub(new Date(), {minutes: 5}).toISOString()
}
]

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: {
            reducer(state, action:PayloadAction<postState>) {
                state.push(action.payload)
            },
            prepare(title, content, userId) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        userId,
                        date: new Date().toISOString()
                    }
                };
            }
        }
    }
})
export const { postAdded } = postsSlice.actions
export const selectAllPosts = (state: RootState) => state.posts
export default postsSlice.reducer