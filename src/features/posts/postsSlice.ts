import { PayloadAction, createSlice, nanoid } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import sub from "date-fns/sub";
export interface postState {
    id: string,
    title: string,
    content: string,
    date: string,
    userId: string,
    reactions: {
        thumbsUp: number,
        wow: number;
        heart: number;
        rocket: number;
        coffee: number;
        [key:string] : number
    }
}

const initialState: postState[] = [
    {
    id: '1', 
    title: 'Learning Redux Tolkit', 
    content: 'I`ve heard go things.',
    userId: '',
    date: sub(new Date(), {minutes: 10}).toISOString(),
    reactions : {
        thumbsUp: 0,
        wow: 0,
        heart: 0,
        rocket: 0,
        coffee: 0
    } 
    },
    { id: '2', 
    title: 'Slices...', 
    userId:'',
    content: "The more I say slice, the more I want pizza.",
    date: sub(new Date(), {minutes: 5}).toISOString(),
    reactions : {
        thumbsUp: 0,
        wow: 0,
        heart: 0,
        rocket: 0,
        coffee: 0
    } 
}
]

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: {
            reducer(state:postState[], action:PayloadAction<postState>) {
                state.push(action.payload)
            },
            prepare(title, content, userId) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        userId,
                        date: new Date().toISOString(),
                        reactions: {
                            thumbsUp: 0,
                            wow: 0,
                            heart: 0,
                            rocket: 0,
                            coffee: 0
                        }
                    }
                };
            }
        },
        reactionAdded(state, action:PayloadAction<{id:string , reaction:string}>){

            const {id, reaction} = action.payload
            const existingPost = state.find((post) => post.id === id)

            if(existingPost){
                existingPost.reactions[reaction]++
            }
        }
    }
})
export const { postAdded, reactionAdded } = postsSlice.actions
export const selectAllPosts = (state: RootState) => state.posts
export default postsSlice.reducer