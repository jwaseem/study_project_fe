import { createSlice } from "@reduxjs/toolkit";
import { users } from "../action/userData";

const initialState ={
    usersData: [],
    loading: false,
    error: null
};
 export const userListReducer = createSlice({
    name: 'data',
  initialState,
  reducers: {},
  extraReducers:{
    [users.pending]: (state, action) => {
        state.loading = true
      },
      [users.fulfilled]: (state, { payload }) => {
        state.usersData = payload
        state.loading = false
      },
      [users.rejected]: (state, action) => {
        state.status = 'failed'
        state.usersData = []
        state.loading = false
      }
  }
 })
 export default userListReducer.reducer;