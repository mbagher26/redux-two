import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface userState {
    id:string,
    name: string
}

const initialState: userState [] = [
    {id: '1' , name: 'Amir'},
    {id: '2' , name: 'Moin'}
]



const userSlise = createSlice({
    name : 'users',
    initialState,
    reducers:{

    }
})
export default userSlise.reducer
export const selectAllUsers = ((state : RootState) => state.users)