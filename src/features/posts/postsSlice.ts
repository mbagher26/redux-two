import { PayloadAction, createSlice, nanoid } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface post {
    id: string,
    title: string,
    content: string,
    userId: string,
    date: string,
    reactions: {
        thumbsUp: number,
        wow: number;
        heart: number;
        rocket: number;
        coffee: number;
        [key:string] : number
    }
}
export interface postState {
    posts: post [] ,
    status: string ,
    error:string | null 
}

const initialState: postState  = {
    posts: [],
    status: 'idle',
    error: null
}

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: {
            reducer(state, action:PayloadAction<post>) {
                state.posts.push(action.payload)
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
            const existingPost = state.posts.find((post) => post.id === id)

            if(existingPost){
                existingPost.reactions[reaction]++
            }
        }
    }
})
export const { postAdded, reactionAdded } = postsSlice.actions
export const selectAllPosts = (state: RootState) => state.posts
export default postsSlice.reducer