import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        value: 0,
    },
    reducers: {}, 
});

export default userSlice.reducer;