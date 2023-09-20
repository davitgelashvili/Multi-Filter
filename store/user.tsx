import { createSlice } from "@reduxjs/toolkit";

const initialData = {
    count: 0
}

const user = createSlice({
    name: 'user',
    initialState: initialData,
    reducers: {
        changeCount(state, action) {
            state.count = action.payload
        }
    }
})

export const userAction = user.actions

export default user.reducer